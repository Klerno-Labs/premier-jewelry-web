import { relations } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `pegrio_${name}`);

export const users = createTable(
  "user",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: varchar("image", { length: 255 }),
    password: varchar("password", { length: 255 }),
    role: varchar("role", { length: 50 }).notNull().default("user"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (user) => ({
    emailIdx: index("user_email_idx").on(user.email),
  })
);

export const accounts = createTable(
  "account",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 })
      .$type<"email" | "oauth" | "oidc">()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compositePk: index("account_provider_providerAccountId_key").on(
      account.provider,
      account.providerAccountId
    ),
    userIdIdx: index("account_user_id_idx").on(account.userId),
  })
);

export const sessions = createTable(
  "session",
  {
    sessionToken: varchar("session_token", { length: 255 }).notNull().primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_user_id_idx").on(session.userId),
  })
);

export const verificationTokens = createTable(
  "verification_token",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull().primaryKey(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compositePk: index("verification_token_identifier_token_idx").on(
      vt.identifier,
      vt.token
    ),
  })
);

export const passwordResetTokens = createTable(
  "password_reset_token",
  {
    id: serial("id").primaryKey(),
    token: varchar("token", { length: 255 }).notNull().unique(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (prt) => ({
    userIdIdx: index("password_reset_token_user_id_idx").on(prt.userId),
    tokenIdx: index("password_reset_token_token_idx").on(prt.token),
  })
);