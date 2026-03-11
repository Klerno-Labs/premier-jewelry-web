import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { projects } from '@/lib/db/schema';
import { desc, eq, like, or } from 'drizzle-orm';
import { projectSchema, projectFilterSchema } from '@/lib/validations/project';
import { ZodError } from 'zod';

// GET /api/projects
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const filters = projectFilterSchema.parse(Object.fromEntries(searchParams));

    const conditions = [];
    
    if (filters.status) {
      conditions.push(eq(projects.status, filters.status));
    }
    if (filters.ownerId) {
      conditions.push(eq(projects.ownerId, filters.ownerId));
    }
    if (filters.search) {
      conditions.push(
        or(
          like(projects.name, `%${filters.search}%`),
          like(projects.description, `%${filters.search}%`)
        )
      );
    }

    const allProjects = await db.select().from(projects)
      .where(conditions.length ? conditions[0] === undefined ? undefined : conditions.reduce((acc, cond) => acc && cond) : undefined) // Simplification for Drizzle query builder
      // Ideally use `and(...conditions)` from drizzle-orm
      .orderBy(desc(projects.createdAt));

    // Manual builder approach for complex conditions if helper not imported
    const finalProjects = await db.query.projects.findMany({
      where: (projects, { eq, and, like, or }) => {
        const conds = [];
        if (filters.status) conds.push(eq(projects.status, filters.status));
        if (filters.ownerId) conds.push(eq(projects.ownerId, filters.ownerId));
        if (filters.search) conds.push(or(like(projects.name, `%${filters.search}%`), like(projects.description, `%${filters.search}%`)));
        return conds.length ? and(...conds) : undefined;
      },
      with: {
        owner: {
          columns: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: [desc(projects.createdAt)]
    });

    return NextResponse.json(finalProjects, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Failed to fetch projects:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/projects
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = projectSchema.parse(body);

    const [newProject] = await db.insert(projects).values(validatedData).returning();

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Failed to create project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}