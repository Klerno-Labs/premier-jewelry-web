'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db/drizzle';
import { tasks } from "@/lib/db/drizzle";
import { taskSchema, updateTaskSchema } from '@/lib/validations/task';
import { eq } from 'drizzle-orm';

export async function createTask(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  try {
    const validatedData = taskSchema.parse(rawData);
    
    await db.insert(tasks).values(validatedData);

    revalidatePath(`/dashboard/projects/${validatedData.projectId}`);
    revalidatePath('/dashboard/tasks');
    
    return { success: true, message: 'Task created successfully' };
  } catch (error) {
    console.error('Create Task Error:', error);
    return { error: 'Failed to create task. Please check your inputs.' };
  }
}

export async function updateTaskStatus(id: number, status: string) {
  try {
    await db.update(tasks)
      .set({ 
        status: status as any, 
        updatedAt: new Date() 
      })
      .where(eq(tasks.id, id));

    // Note: In a real app, we'd fetch the project ID first to revalidate the specific path
    // or revalidate broadly.
    revalidatePath('/dashboard/tasks');
    
    return { success: true };
  } catch (error) {
    console.error('Update Task Status Error:', error);
    return { error: 'Failed to update task status.' };
  }
}

export async function deleteTask(id: number, projectId: number) {
  try {
    await db.delete(tasks).where(eq(tasks.id, id));
    
    revalidatePath(`/dashboard/projects/${projectId}`);
    revalidatePath('/dashboard/tasks');
    
    return { success: true, message: 'Task deleted successfully' };
  } catch (error) {
    console.error('Delete Task Error:', error);
    return { error: 'Failed to delete task.' };
  }
}