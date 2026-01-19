import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const runtime = 'edge';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai("gpt-4o"),
        system: "You are Zubayer's AI assistant. You can answer questions about his portfolio, skills, and projects. He is a Senior Full Stack Developer using Next.js, TypeScript, and AI.",
        messages,
    });

    return result.toTextStreamResponse();
}
