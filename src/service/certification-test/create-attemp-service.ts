import { prisma } from "../../config/prisma";

interface CreateAttempBody {
    certificationTestId: string;
    userId: string;
}
export async function createAttempService(data: CreateAttempBody) {
    const attempExists = await prisma.testAttempt.findFirst({
        where: {
            certificationTestId: data.certificationTestId,
            userId: data.userId,
        },
    });

    if (attempExists) {
        throw new Error("Já existe uma tentativa associada a esse teste");
    }
    const testAttemp = await prisma.testAttempt.create({
        data: {
            certificationTestId: data.certificationTestId,
            userId: data.userId,
        },
    });

    return testAttemp;
}
