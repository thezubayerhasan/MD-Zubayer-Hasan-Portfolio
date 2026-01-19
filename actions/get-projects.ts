"use server"

import { db } from "@/db/drizzle";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getProjects() {
    try {
        const data = await db.select().from(projects).orderBy(desc(projects.createdAt));
        return { success: true, data };
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return { success: false, error: "Failed to fetch projects" };
    }
}
