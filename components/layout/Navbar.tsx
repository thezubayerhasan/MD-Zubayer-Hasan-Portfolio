"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Terminal } from "lucide-react"

export function Navbar() {
    const routes = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/stack", label: "Tech Stack" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <div className="mr-8 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Terminal className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            ZubayerDev
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <Terminal className="h-6 w-6" />
                            <span className="font-bold text-lg">ZubayerDev</span>
                        </Link>
                        <nav className="flex flex-col gap-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className="block px-2 py-1 text-lg font-medium"
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <ModeToggle />
                    <Button variant="default" className="hidden md:flex">
                        Resume
                    </Button>
                </div>
            </div>
        </header>
    )
}
