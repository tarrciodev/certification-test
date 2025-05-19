import Elysia, { t } from "elysia";
import { createAnswerService } from "../../service/certification-test/create-answer-service";

export async function createAnswerRoute(app: Elysia) {
    return app.post(
        "/create-answer/:questionId",
        async ({ body, params }) => {
            const { questionId } = params;
            const newAnswer = await createAnswerService({
                ...body,
                questionId,
            });
            return newAnswer;
        },
        {
            params: t.Object({
                questionId: t.String(),
            }),
            body: t.Object({
                alternativeId: t.String(),
                testAttemptId: t.String(),
            }),
        }
    );
}
