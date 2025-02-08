'use server';
import { auth, signIn, signOut } from "@/auth";

export const navbarOnClick = async () => {
    const session = await auth();
    session?.user ? await signOut() : await signIn(undefined, { redirectTo: "/transaction" });
}