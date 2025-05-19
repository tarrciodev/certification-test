import Elysia, { t } from "elysia";
import { createQuestionService } from "../../service/certification-test/create-question-service";

export function createQuestionRoute(app: Elysia) {
    return app.post(
        "/create-question/:certificationTestId",
        async ({ body, params }) => {
            const { certificationTestId } = params;
            const newQuestion = await createQuestionService({
                ...body,
                certificationTestId,
            });
            return newQuestion;
        },
        {
            params: t.Object({
                certificationTestId: t.String(),
            }),
            body: t.Object({
                text: t.String(),
                score: t.Number(),
                alternatives: t.Array(
                    t.Object({
                        text: t.String(),
                        isCorrect: t.Boolean(),
                    })
                ),
            }),
        }
    );
}
