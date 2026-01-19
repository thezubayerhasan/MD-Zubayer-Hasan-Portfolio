import { pgTable, text, serial, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";

// Schema definition for the database


export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url"),
    tags: text("tags").array(),
    link: text("link"),
    githubUrl: text("github_url"),
    featured: boolean("featured").default(false),
    createdAt: timestamp("created_at").defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
