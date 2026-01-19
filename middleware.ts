import { auth } from "@/auth"

export default auth((req) => {
    // If the user is not logged in and trying to access /admin, 
    // the 'authorized' callback in auth.ts handles the redirect?
    // Actually, NextAuth v5 middleware handles this via the configuration in auth.ts
})

export const config = {
    matcher: ["/admin/:path*"],
}
