import taskController from "@/controllers/task.controller.js";
import authenticate from "@/middlewares/authenticate.middleware.js";
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import taskSchema from "../schemas/task.schema.js";

const taskRoutes: Router = Router();

taskRoutes
  .use(authenticate)
  .post("/", validateSchema(taskSchema), taskController.create)
  .put("/:taskId/toggle", taskController.toogleTask)
  .delete("/:taskId/close", taskController.closeTask);

export default taskRoutes;
