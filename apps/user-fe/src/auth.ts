
import { prisma } from "@repo/db/client"
import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Phone Number',
            credentials: {
                phoneOrEmail: { label: "Phone number", placeholder: "Phone number", type: "number" },
                password: { label: "Password", placeholder: "Password", type: "password" },
            },
            authorize: async ({ phoneOrEmail, password }): Promise<any> => {
                if (!phoneOrEmail || !password) {
                    throw new CredentialsSignin("Please enter both password and gmail");
                }

                const user = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { number: phoneOrEmail },
                            { email: phoneOrEmail }
                        ]
                    }
                });

                if (!user) {
                    throw new CredentialsSignin("Invalid Credentials");
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt({token, user}){
            console.log("jwt callback");
            return token;
        },
        session({session, token, user}){
            console.log("session callback")
            if(token.sub && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
    }
})