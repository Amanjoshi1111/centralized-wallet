'use client';
import { User } from "next-auth";
import { Button } from "./Button";
import { navbarOnClick } from "@/lib/actions/navbarOnClick";


export function Navbar({ user }: { user: User | undefined }) {

    return <div className="h-20 border-b-2 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">Wallet</div>
        <Button text={user ? "Sign Out " : "Sign In"} className="px-6 py-2 border bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-lg" onButtonClick={() => navbarOnClick()} />
    </div>
}

