import { Navbar } from "@/components/layout/Navbar"
import { ProjectsGrid } from "@/components/features/ProjectsGrid"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
    title: "Projects | Zubayer Portfolio",
    description: "Showcase of my recent work and side projects.",
}

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container py-12 px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">My Projects</h1>
                    <p className="max-w-[700px] text-muted-foreground text-lg">
                        A collection of full-stack applications, experiments, and open source contributions.
                    </p>
                </div>

                <Alert className="mb-8">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        These projects are fetched dynamically from the PostgreSQL database using Server Actions.
                    </AlertDescription>
                </Alert>

                <Suspense fallback={<ProjectsSkeleton />}>
                    <ProjectsGrid />
                </Suspense>
            </main>
        </div>
    )
}

function ProjectsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-48 w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}
