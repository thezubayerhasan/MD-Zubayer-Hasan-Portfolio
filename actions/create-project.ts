"use server"

import { db } from "@/db/drizzle";
import { projects } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const githubUrl = formData.get("githubUrl") as string;
    const link = formData.get("link") as string;
    const tagsStr = formData.get("tags") as string;
    const featured = formData.get("featured") === "on";

    if (!title || !description) {
        return { success: false, error: "Title and description are required" };
    }

    const tags = tagsStr ? tagsStr.split(",").map((t) => t.trim()) : [];

    try {
        await db.insert(projects).values({
            title,
            description,
            imageUrl: imageUrl || null,
            githubUrl: githubUrl || null,
            link: link || null,
            tags: tags,
            featured,
        });

        revalidatePath("/admin");
        revalidatePath("/projects");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Failed to create project:", error);
        return { success: false, error: "Failed to create project" };
    }
}
