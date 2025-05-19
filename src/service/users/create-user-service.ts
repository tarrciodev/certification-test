import argon2 from "argon2";
import { prisma } from "../../config/prisma";

interface User {
    email: string;
    password: string;
    name: string;
}
export async function createUserService(data: User) {
    const userExists = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
    if (userExists) {
        throw new Error("User already exists");
    }
    const createdUser = await prisma.user.create({
        data: {
            ...data,
            password: await argon2.hash(data.password, {
                type: argon2.argon2id,
            }),
        },
    });
    return createdUser;
}
