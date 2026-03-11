import { NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { users, projects, tasks } from '@/lib/db/schema';
import { sql, eq, and } from 'drizzle-orm';

// GET /api/dashboard/stats
export async function GET() {
  try {
    // 1. Total Users
    const totalUsersResult = await db.select({ count: sql<number>`count(*)` }).from(users);
    const totalUsers = totalUsersResult[0]?.count || 0;

    // 2. Active Projects
    const activeProjectsResult = await db.select({ count: sql<number>`count(*)` })
      .from(projects)
      .where(eq(projects.status, 'active'));
    const activeProjects = activeProjectsResult[0]?.count || 0;

    // 3. Tasks Status Breakdown
    const taskStats = await db.select({
      status: tasks.status,
      count: sql<number>`count(*)`
    }).from(tasks)
      .groupBy(tasks.status);

    // 4. Recent Activity (Mocked or simplified based on schema)
    // Since we don't have a complex activity log populated, let's get recent projects
    const recentProjects = await db.query.projects.findMany({
      orderBy: (projects, { desc }) => [desc(projects.createdAt)],
      limit: 5,
      with: {
        owner: { columns: { name: true } }
      }
    });

    // 5. Overdue Tasks count
    const overdueTasksResult = await db.select({ count: sql<number>`count(*)` })
      .from(tasks)
      .where(
        and(
          sql`${tasks.dueDate} < NOW()`,
          sql`${tasks.status} != 'done'`
        )
      );
    const overdueTasks = overdueTasksResult[0]?.count || 0;

    return NextResponse.json({
      totalUsers,
      activeProjects,
      taskStats,
      recentProjects,
      overdueTasks
    }, { status: 200 });

  } catch (error) {
    console.error('Failed to fetch dashboard stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}