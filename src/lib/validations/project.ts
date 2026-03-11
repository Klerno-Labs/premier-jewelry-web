import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required').max(100, 'Name too long'),
  description: z.string().optional(),
  status: z.enum(['planning', 'active', 'on_hold', 'completed', 'archived']).default('planning'),
  ownerId: z.coerce.number().int().positive('Owner ID must be a positive integer'),
  dueDate: z.coerce.date().optional(),
});

export const updateProjectSchema = projectSchema.partial();

export const projectFilterSchema = z.object({
  status: z.enum(['planning', 'active', 'on_hold', 'completed', 'archived']).optional(),
  ownerId: z.coerce.number().optional(),
  search: z.string().optional(),
});

export type CreateProjectInput = z.infer<typeof projectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
export type ProjectFilters = z.infer<typeof projectFilterSchema>;