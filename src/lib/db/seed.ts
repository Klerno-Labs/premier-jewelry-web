import { db } from '@/lib/db/drizzle';
import { users, projects, tasks } from "@/lib/db/drizzle";
import { hash } from 'bcryptjs';

async function seed() {
  console.log('🌱 Seeding database...');

  try {
    // 1. Clean existing data (optional, useful for dev)
    // await db.delete(tasks);
    // await db.delete(projects);
    // await db.delete(users);

    const hashedPassword = await hash('Password123!', 10);

    // 2. Create Users
    const [admin] = await db.insert(users).values([
      {
        name: 'Sarah Connor',
        email: 'sarah@pegrio.app',
        password: hashedPassword,
        role: 'admin',
        avatarUrl: null,
        isActive: true,
      },
      {
        name: 'John Wick',
        email: 'john@pegrio.app',
        password: hashedPassword,
        role: 'manager',
        avatarUrl: null,
        isActive: true,
      },
      {
        name: 'Ellen Ripley',
        email: 'ellen@pegrio.app',
        password: hashedPassword,
        role: 'user',
        avatarUrl: null,
        isActive: true,
      },
    ]).returning();

    const [manager] = await db.insert(users).values({
      name: 'Marty McFly',
      email: 'marty@pegrio.app',
      password: hashedPassword,
      role: 'user',
    }).returning();

    // 3. Create Projects
    const [project1] = await db.insert(projects).values([
      {
        name: 'Website Redesign',
        description: 'Overhaul the corporate website with new branding guidelines for Q4 launch.',
        status: 'active',
        ownerId: admin.id,
        dueDate: new Date('2024-12-15'),
      },
      {
        name: 'Mobile App MVP',
        description: 'Develop the initial version of the customer-facing mobile application.',
        status: 'planning',
        ownerId: admin.id,
        dueDate: new Date('2025-03-01'),
      },
      {
        name: 'Q4 Marketing Campaign',
        description: 'Social media blitz and email automation setup for holiday sales.',
        status: 'active',
        ownerId: manager.id,
        dueDate: new Date('2024-11-20'),
      },
    ]).returning();

    const [project2] = await db.insert(projects).values({
      name: 'Server Migration',
      description: 'Migrate legacy infrastructure to AWS cloud environment.',
      status: 'on_hold',
      ownerId: admin.id,
      dueDate: new Date('2025-01-30'),
    }).returning();

    // 4. Create Tasks
    await db.insert(tasks).values([
      {
        title: 'Design Homepage Mockup',
        description: 'Create high-fidelity mockups for the new homepage using Figma.',
        status: 'done',
        priority: 'high',
        projectId: project1.id,
        assignedToId: manager.id,
        dueDate: new Date('2024-10-10'),
      },
      {
        title: 'Implement Navigation',
        description: 'Code the responsive navigation bar component.',
        status: 'in_progress',
        priority: 'high',
        projectId: project1.id,
        assignedToId: manager.id,
        dueDate: new Date('2024-10-25'),
      },
      {
        title: 'Setup Database',
        description: 'Configure PostgreSQL and run initial migrations.',
        status: 'done',
        priority: 'urgent',
        projectId: project2.id,
        assignedToId: admin.id,
      },
      {
        title: 'Content Strategy',
        description: 'Draft blog posts for the campaign launch.',
        status: 'todo',
        priority: 'medium',
        projectId: project2.id,
        assignedToId: manager.id,
        dueDate: new Date('2024-11-01'),
      },
      {
        title: 'Competitor Analysis',
        description: 'Research top 3 competitors and document feature gaps.',
        status: 'backlog',
        priority: 'low',
        projectId: project1.id,
        assignedToId: null,
      },
    ]);

    console.log('✅ Seed completed successfully');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();