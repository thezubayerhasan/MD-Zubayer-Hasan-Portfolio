"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createProject } from "@/actions/create-project"
import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function AddProjectForm() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const result = await createProject(formData)

        setLoading(false)

        if (result.success) {
            toast.success("Project added successfully")
            e.currentTarget.reset()
        } else {
            toast.error(result.error || "Failed to add project")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required placeholder="Project Name" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required placeholder="Project details, tech stack used..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input id="imageUrl" name="imageUrl" placeholder="https://..." />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input id="tags" name="tags" placeholder="React, Next.js, AI" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="githubUrl">GitHub URL</Label>
                    <Input id="githubUrl" name="githubUrl" placeholder="https://github.com/..." />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="link">Live Demo URL</Label>
                    <Input id="link" name="link" placeholder="https://..." />
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" />
                <Label htmlFor="featured">Featured Project</Label>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Add Project
            </Button>
        </form>
    )
}
