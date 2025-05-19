import Elysia from "elysia";
import { createUserRoute } from "./create-user-route";

export const userRoutes = new Elysia({ prefix: "/users" }).use(createUserRoute);
