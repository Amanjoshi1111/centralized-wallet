"use server";
import { auth } from "@/auth";
import { prisma, Provider, OnRampStatus, Prisma } from "@repo/db/client";
import { redirect, RedirectType } from "next/navigation";

export const initiateOnRampTransaction = async (amount: number, provider: Provider) => {

    console.log({ amount, provider });
    try {
        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return {
                message: "User not authenticated"
            }
        }
        const userId = session?.user?.id;
        const token = "10 Feb Testing"

        const data: Prisma.OnRampTransactionUncheckedCreateInput = {
            status: OnRampStatus.Processing,
            token,
            startTime: new Date().toISOString(),
            provider,
            amount: amount * 100,
            userId
        }

        await prisma.onRampTransaction.create({
            data
        });

        console.log("HELLO WORLD");
        redirect('/home', RedirectType.push);

    } catch (err) {
        return {
            message: "Something went wrong",
            err
        }
    }
}

export const getOnRampTransaction = async () => {

    const session = await auth();
    if (!session || !session.user || !session.user.id) {
        return {
            message: "User not authenticated"
        }
    }

    const userId = session?.user?.id;
    console.log({userId});
    const res = await prisma.onRampTransaction.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            startTime: 'desc'
        }
    })
    return res;
}