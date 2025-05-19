import Elysia from "elysia";
import { createAnswerRoute } from "./create-answer-route";
import { createAttempRoute } from "./create-attemp-route";
import { createCertificationTestRoute } from "./create-certification-test-route";
import { createQuestionRoute } from "./create-question-route";

export const certificationRoutes = new Elysia({ prefix: "/certification-test" })
    .use(createCertificationTestRoute)
    .use(createQuestionRoute)
    .use(createAnswerRoute)
    .use(createAttempRoute);
