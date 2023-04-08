import taskController from "@/controllers/task.controller.js";
import authenticate from "@/middlewares/authenticate.middleware.js";
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import taskSchema from "../schemas/task.schema.js";

const taskRoutes: Router = Router();

taskRoutes
  .use(authenticate)
  .post("/", validateSchema(taskSchema), taskController.create)
  .put("/done")
  .put("/undone")
  .delete("/close");

export default taskRoutes;
