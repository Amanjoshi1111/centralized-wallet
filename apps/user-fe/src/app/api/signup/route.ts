import getErrorMessage from "@/lib/getErrorMsg";
import { prisma } from "@repo/db/client";
import z from "zod";
import * as bcrypt from "bcrypt";

const userValidationSchema = z.object({
    email: z.optional(z.string().email({ message: "Invalid email" })),
    name: z.string().min(3, { message: "Name should be of minimum length 3 characters" }),
    number: z.string().length(10, { message: "Number should be of minimum length 10 characters" }),
    password: z.string().min(8, { message: "Password should be of minimum length 8 characters" })
})

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const zodResponse = userValidationSchema.safeParse(body);

        //If zod validation fails, early return
        if (zodResponse.success == false) {
            return Response.json(zodResponse.error);
        }

        //Check weather user with this name already exist or not
        let userExist = await prisma.user.findFirst({
            where: {
                OR: [
                    { number: zodResponse.data.number },
                    { email: zodResponse.data.email }
                ]
            }
        })

        //If user exist return with msg user already exists
        if (userExist) {
            return Response.json({
                message: "User already exist"
            })
        };

        // zodResponse.data.password = await bcrypt.hash(zodResponse.data.password, 10);
        const {password, ...user} = await prisma.user.create({
            data: zodResponse.data
        });
        return Response.json(user);
    } catch (err) {
        const message = getErrorMessage(err);
        console.log("message ;", message);
        return Response.json({
            message
        })
    }
}