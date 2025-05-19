import { prisma } from "../../config/prisma";

type CreateAnswerBody = {
    questionId: string;
    alternativeId: string;
    testAttemptId: string;
};
export async function createAnswerService(data: CreateAnswerBody) {
    const alternativeExists = await prisma.alternative.findFirst({
        where: {
            id: data.alternativeId,
            questionId: data.questionId,
        },
    });

    if (!alternativeExists) {
        throw new Error("A alternativa não existe");
    }

    const questionAnswer = await prisma.answer.create({
        data: {
            questionId: data.questionId,
            alternativeId: data.alternativeId,
            testAttemptId: data.testAttemptId,
        },
    });

    return questionAnswer;
}
