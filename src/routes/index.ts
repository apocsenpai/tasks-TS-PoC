import { Router } from "express";
import responsibleRoutes from "./responsible.routes.js";
import taskRoutes from "./task.routes.js";

const routes: Router = Router();

routes
    .use("/responsibles", responsibleRoutes)
    .use("/tasks", taskRoutes);

export default routes;
