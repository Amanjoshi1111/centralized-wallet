'use client';
import { User } from "next-auth";
import { Button } from "./Button";
import { navbarOnClick } from "@/lib/actions";


export function Navbar({user}: {user : User|undefined}) {

    return <div className="h-20 border-b-2 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">Wallet</div>
        <Button text={user ? "Sign Out " : "Sign In"} onButtonClick={()=> navbarOnClick()} />
    </div>
}

