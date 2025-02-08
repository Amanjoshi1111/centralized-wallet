import { prisma } from "@repo/db/client";
import express from "express";
import z, { ZodError } from "zod";

const app = express();
const PORT = process.env.BANK_WEBHOOK_PORT || 4000

const webHookSchema = z.object({
    token: z.string(),
    userId: z.string(),
    amount: z.string()
})

app.post("/axisWebhook", async (req, res) => {
    try {
        webHookSchema.parse(req.body);

        const paymentInfo = {
            token: req.body.token,
            userId: req.body.userId,
            amount: req.body.amount
        }

        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentInfo.userId
                },
                data: {
                    amount: {
                        increment: paymentInfo.amount
                    },

                }
            }),
            prisma.onRampTransaction.create({
                data: {
                    userId: paymentInfo.userId,
                    status: "Success",
                    token: paymentInfo.token,
                    amount: paymentInfo.amount,
                    startTime: new Date().toISOString(),
                    provider: "Axis"
                }
            })
        ])

        res.status(200).json({
            message: "captured"
        })

    } catch (err) {
        if (err instanceof ZodError) {
            res.status(401).json("Invalid Inputs");
            return;
        }
        res.status(400).json({
            message: "Something went wrong in webhook"
        })
        return;
    }
})

app.listen(PORT, () => {
    console.log("Server listening to port : ", PORT);
})
