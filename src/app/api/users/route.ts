import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { registerSchema, updateUserSchema } from '@/lib/validations/user';
import { hash } from 'bcryptjs';
import { ZodError } from 'zod';

// GET /api/users - List all users (paginated would be added here for scale)
export async function GET() {
  try {
    const allUsers = await db.select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      avatarUrl: users.avatarUrl,
      isActive: users.isActive,
      createdAt: users.createdAt,
    }).from(users).orderBy(users.createdAt);

    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/users - Create a new user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input (we reuse registerSchema but ignore confirmPassword for API usage if desired, or require it)
    const validatedData = registerSchema.parse(body);

    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, validatedData.email)).limit(1);
    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    const hashedPassword = await hash(validatedData.password, 10);

    const [newUser] = await db.insert(users).values({
      name: validatedData.name,
      email: validatedData.email,
      password: hashedPassword,
      role: 'user', // Default role for registration
    }).returning({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      createdAt: users.createdAt,
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Failed to create user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}