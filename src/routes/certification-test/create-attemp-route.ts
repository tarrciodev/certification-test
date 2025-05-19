import Elysia, { t } from "elysia";
import { createAttempService } from "../../service/certification-test/create-attemp-service";

export function createAttempRoute(app: Elysia) {
    return app.post(
        "/create-attemp",
        async ({ body }) => {
            const newAttemp = await createAttempService(body);
            return newAttemp;
        },
        {
            body: t.Object({
                certificationTestId: t.String(),
                userId: t.String(),
            }),
        }
    );
}
