import { Router } from "express";
import responsibleRoutes from "./responsible.routes";
import taskRoutes from "./task.routes";

const routes: Router = Router();

routes
    .use("/responsibles", responsibleRoutes)
    .use("/tasks", taskRoutes);

export default routes;
