import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";
import { authRegisterSchema } from "@/lib/validations";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { generateId } from "lucia";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = authRegisterSchema.parse(body);

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
        role: "user", // Default role
        emailVerified: new Date(), // Auto-verify for this demo context
      })
      .returning({ id: users.id, email: users.email, name: users.name, role: users.role });

    return NextResponse.json(
      { user: newUser[0], message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}