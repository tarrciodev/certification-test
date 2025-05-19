import Elysia, { t } from "elysia";
import { createCertificationTestService } from "../../service/certification-test/create-certification-test-service";

export function createCertificationTestRoute(app: Elysia) {
    return app.post(
        "/create-question",
        async ({ body }) => {
            const newCertificationTest = await createCertificationTestService(
                body
            );
            return newCertificationTest;
        },
        {
            body: t.Object({
                title: t.String(),
                description: t.String(),
                passingScore: t.Number(),
                timeLimit: t.Number(),
                skillId: t.String(),
            }),
        }
    );
}
