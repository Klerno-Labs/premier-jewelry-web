import { relations } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `pegrio_${name}`);

export const users = createTable(
  "user",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }).notNull().unique(),
    password: varchar("password", { length: 256 }),
    role: varchar("role", { length: 50 })
      .notNull()
      .default("user"),
    image: varchar("image", { length: 256 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (user) => ({
    emailIdx: index("user_email_idx").on(user.email),
  })
);

export const projects = createTable(
  "project",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    description: text("description"),
    status: varchar("status", { length: 50 }).notNull().default("active"),
    ownerId: integer("owner_id")
      .references(() => users.id)
      .notNull(),
    budget: integer("budget").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (project) => ({
    ownerIdIdx: index("project_owner_id_idx").on(project.ownerId),
  })
);

export const tasks = createTable(
  "task",
  {
    id: serial("id").primaryKey(),
    projectId: integer("project_id")
      .references(() => projects.id, { onDelete: "cascade" })
      .notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    status: varchar("status", { length: 50 }).notNull().default("todo"),
    dueDate: timestamp("due_date"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (task) => ({
    projectIdIdx: index("task_project_id_idx").on(task.projectId),
  })
);

export const sessions = createTable("session", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});