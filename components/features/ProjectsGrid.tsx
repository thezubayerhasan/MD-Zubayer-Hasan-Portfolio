import { getProjects } from "@/actions/get-projects"
import { ProjectCard } from "./ProjectCard"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export async function ProjectsGrid() {
    const { success, data, error } = await getProjects()

    if (!success || !data) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Failed to load projects. {error}
                </AlertDescription>
            </Alert>
        )
    }

    if (data.length === 0) {
        return (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-muted-foreground">No projects found.</h3>
                <p className="text-muted-foreground mt-2">Check back later or visit the admin dashboard to add some!</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    )
}
