"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-20 lg:py-32 xl:py-48 overflow-hidden bg-background">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-foreground/10 mb-6">
                        Now Available for Work
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Enterprise-Grade</span> Applications with Modern Tech
                </motion.h1>

                <motion.p
                    className="mx-auto mt-6 max-w-[700px] text-muted-foreground text-lg md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I help companies build scalable, secure, and beautiful web applications using Next.js, TypeScript, and AI.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" className="h-12 px-8 text-lg">
                        View Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                        Download Resume <Download className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] -z-10" />
        </section>
    )
}
