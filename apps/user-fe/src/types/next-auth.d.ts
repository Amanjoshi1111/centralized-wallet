import NextAuth, { DefaultSession } from "next-auth";

import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */

    // interface User {
    //     role?: string
    // }

    // interface Session {
    //     user:{
    //         role?: string,
    //         id?: string
    //     } & DefaultSession['user'];
    // }
}