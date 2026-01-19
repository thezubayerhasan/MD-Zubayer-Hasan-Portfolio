import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                // Simple hardcoded admin password for now
                // In a real app, this should arguably be in the DB or env variable
                if (credentials.password === process.env.ADMIN_PASSWORD) {
                    return { id: "1", name: "Admin", email: "admin@zubayer.dev" }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
})
