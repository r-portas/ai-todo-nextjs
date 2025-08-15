import { drizzle } from "drizzle-orm/libsql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

//#region DB Setup

export const db = drizzle(process.env.DATABASE_URL!);

//#endregion

//#region Schema

export const todos = sqliteTable("todos", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  due: integer({ mode: "timestamp" }),
  priority: text({ enum: ["low", "medium", "high"] }).default("medium"),
  completed: integer({ mode: "boolean" }).default(false),
});

//#endregion
