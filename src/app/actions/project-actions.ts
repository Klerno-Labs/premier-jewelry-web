'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db/drizzle';
import { projects } from "@/lib/db/drizzle";
import { projectSchema, updateProjectSchema } from '@/lib/validations/project';
import { auth } from '@/auth'; // Assuming auth setup exists
import { redirect } from 'next/navigation';

import { eq } from "drizzle-orm";
export async function createProject(formData: FormData) {
  // In a real app, check auth here
  // const session = await auth();
  // if (!session?.user) return { error: 'Unauthorized' };

  const rawData = Object.fromEntries(formData.entries());
  
  try {
    const validatedData = projectSchema.parse(rawData);
    
    await db.insert(projects).values({
      ...validatedData,
      // ownerId: session.user.id // Would use real ID
      ownerId: 1, // Mock ID for data layer completeness
    });

    revalidatePath('/dashboard/projects');
    revalidatePath('/dashboard');
    
    return { success: true, message: 'Project created successfully' };
  } catch (error) {
    console.error('Create Project Error:', error);
    return { error: 'Failed to create project. Please check your inputs.' };
  }
}

export async function updateProject(id: number, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  try {
    const validatedData = updateProjectSchema.parse(rawData);

    await db.update(projects)
      .set({ ...validatedData, updatedAt: new Date() })
      .where(eq(projects.id, id)); // Need `eq` imported from drizzle-orm

    revalidatePath('/dashboard/projects');
    revalidatePath(`/dashboard/projects/${id}`);
    
    return { success: true, message: 'Project updated successfully' };
  } catch (error) {
    console.error('Update Project Error:', error);
    return { error: 'Failed to update project.' };
  }
}

export async function deleteProject(id: number) {
  try {
    await db.delete(projects).where(eq(projects.id, id));
    
    revalidatePath('/dashboard/projects');
    revalidatePath('/dashboard');
    
    return { success: true, message: 'Project deleted successfully' };
  } catch (error) {
    console.error('Delete Project Error:', error);
    return { error: 'Failed to delete project.' };
  }
}