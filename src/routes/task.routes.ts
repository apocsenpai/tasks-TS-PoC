import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import taskSchema from "../schemas/task.schema";

const taskRoutes: Router = Router();

taskRoutes
  .post("/", validateSchema(taskSchema))
  .put("/done")
  .put("/undone")
  .delete("/close");

export default taskRoutes;
