"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Project } from "@/db/schema"
import { motion } from "framer-motion"

interface ProjectCardProps {
    project: Project
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="flex flex-col h-full overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-colors group">
                <div className="h-48 overflow-hidden bg-muted relative">
                    {/* Placeholder for image if one exists, or a gradient */}
                    {project.imageUrl ? (
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                            {project.title.charAt(0)}
                        </div>
                    )}
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                        {project.featured && (
                            <Badge variant="default" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">Featured</Badge>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                    </p>
                </CardContent>
                <CardFooter className="gap-2 pt-0">
                    {project.githubUrl && (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                        </Button>
                    )}
                    {project.link && (
                        <Button size="sm" className="w-full" asChild>
                            <Link href={project.link} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
