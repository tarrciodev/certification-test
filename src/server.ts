import Elysia from "elysia";
import { certificationRoutes } from "./routes/certification-test";
import { skillRoutes } from "./routes/skills";
import { userRoutes } from "./routes/users";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = new Elysia()
    .use(userRoutes)
    .use(skillRoutes)
    .use(certificationRoutes)
    .listen(PORT, () => console.log(`HTTP Server runing on port: ${PORT}`));
