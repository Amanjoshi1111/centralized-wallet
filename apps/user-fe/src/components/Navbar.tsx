'use client';
import { signIn } from "next-auth/react";
import Button from "./Button";

export default function Navbar() {
    return <div className="flex w-full justify-between px-12 py-5 border-b-2 border-solid items-center">
        <div className="text-3xl font-bold">Wallet</div>
        <Button title="login" onClick={()=> signIn()} />
    </div>
}