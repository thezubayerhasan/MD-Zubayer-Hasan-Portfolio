"use client"

import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatBot() {
    const { messages, input, handleInputChange, handleSubmit } = useChat() as any
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-4 z-50 w-[350px] shadow-2xl"
                    >
                        <Card className="h-[500px] flex flex-col border-primary/20">
                            <CardHeader className="p-4 border-b">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        Zubayer AI
                                    </CardTitle>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-0 overflow-hidden">
                                <ScrollArea className="h-full p-4">
                                    {messages.length === 0 && (
                                        <div className="text-center text-muted-foreground mt-4 text-sm">
                                            Ask me about Zubayer&apos;s skills, experience, or projects!
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-4">
                                        {messages.map((m: any) => (
                                            <div
                                                key={m.id}
                                                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div
                                                    className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${m.role === 'user'
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-muted'
                                                        }`}
                                                >
                                                    {m.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                            <CardFooter className="p-3 border-t">
                                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                                    <Input
                                        value={input}
                                        onChange={handleInputChange}
                                        placeholder="Ask something..."
                                        className="flex-1"
                                    />
                                    <Button type="submit" size="icon">
                                        <MessageCircle className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg z-50"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>
        </>
    )
}
