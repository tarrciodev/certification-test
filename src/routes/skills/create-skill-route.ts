import Elysia, { t } from "elysia";
import { createSkillsService } from "../../service/skills/create-skills-service";

export async function createSkillRoute(app: Elysia) {
    return app.post(
        "/create",
        async ({ body }) => {
            const { name, description } = body;
            const newSkill = await createSkillsService({ name, description });
            return newSkill;
        },
        {
            body: t.Object({
                name: t.String(),
                description: t.String(),
            }),
        }
    );
}
