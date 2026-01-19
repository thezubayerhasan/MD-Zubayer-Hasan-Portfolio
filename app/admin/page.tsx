import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjects } from "@/actions/get-projects"
import { redirect } from "next/navigation"
import { AddProjectForm } from "@/components/features/AddProjectForm"

export default async function AdminDashboard() {
    const session = await auth()

    if (!session) {
        redirect("/admin/login")
    }

    const { data: projects } = await getProjects()

    return (
        <div className="container py-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <form action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <Button variant="outline">Sign Out</Button>
                </form>
            </div>

            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AddProjectForm />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Existing Projects ({projects?.length || 0})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {projects?.map((project) => (
                                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <div className="font-medium">{project.title}</div>
                                        <div className="text-sm text-muted-foreground truncate max-w-[300px]">{project.description}</div>
                                    </div>
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
