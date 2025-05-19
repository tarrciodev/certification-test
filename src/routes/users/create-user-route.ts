import Elysia, { t } from "elysia";
import { createUserService } from "../../service/users/create-user-service";

export async function createUserRoute(app: Elysia) {
    return app.post(
        "/create",
        async ({ body }) => {
            const { email, password, name } = body;
            const newUser = await createUserService({ email, password, name });
            return newUser;
        },
        {
            body: t.Object({
                email: t.String(),
                password: t.String(),
                name: t.String(),
            }),
        }
    );
}
