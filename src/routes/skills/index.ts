import Elysia from "elysia";
import { createSkillRoute } from "./create-skill-route";

export const skillRoutes = new Elysia({ prefix: "/skills" }).use(
    createSkillRoute
);
