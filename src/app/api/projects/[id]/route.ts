import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { projects } from "@/lib/db/drizzle";
import { eq } from 'drizzle-orm';
import { updateProjectSchema } from '@/lib/validations/project';
import { ZodError } from 'zod';

// GET /api/projects/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

    const project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
      with: {
        owner: {
          columns: {
            id: true,
            name: true,
            email: true,
          }
        },
        tasks: true
      }
    });

    if (!project) return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH /api/projects/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

    const body = await req.json();
    const validatedData = updateProjectSchema.parse(body);

    const [updatedProject] = await db.update(projects)
      .set({ ...validatedData, updatedAt: new Date() })
      .where(eq(projects.id, id))
      .returning();

    if (!updatedProject) return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Failed to update project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/projects/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

    const [deletedProject] = await db.delete(projects)
      .where(eq(projects.id, id))
      .returning({ id: projects.id });

    if (!deletedProject) return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}