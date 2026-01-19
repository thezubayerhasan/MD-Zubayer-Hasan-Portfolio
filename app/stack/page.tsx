"use client"

import { Navbar } from "@/components/layout/Navbar"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Terminal, Cpu, Globe, Cloud } from "lucide-react"

const technologies = [
    {
        category: "Frontend",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "HTML5/CSS3"]
    },
    {
        category: "Backend",
        icon: Server,
        skills: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Server Actions", "REST APIs", "GraphQL"]
    },
    {
        category: "DevOps & Tools",
        icon: Cloud,
        skills: ["Docker", "Git/GitHub", "Vercel", "AWS", "CI/CD", "Jest/Playwright", "Linux"]
    },
    {
        category: "Emerging Tech",
        icon: Cpu,
        skills: ["OpenAI API", "Vercel AI SDK", "RAG", "Vector Databases", "WebSockets"]
    }
]

export default function TechStackPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container py-12 px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-6">
                            <Code2 className="mr-2 h-4 w-4" />
                            My Arsenal
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-bold tracking-tight lg:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Tech Stack
                    </motion.h1>
                    <motion.p
                        className="max-w-[700px] text-muted-foreground text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        The tools and technologies I use to build robust, scalable applications.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                            <Card className="h-full overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <tech.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{tech.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {tech.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    )
}
