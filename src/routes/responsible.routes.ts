import { Router } from "express";
import responsibleController from "../controllers/responsible.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import responsibleSchema from "../schemas/responsible.schema.js";

const responsibleRoutes: Router = Router();

responsibleRoutes
  .use(validateSchema(responsibleSchema))
  .post("/create", responsibleController.create)
  .post("/auth", responsibleController.signin);

export default responsibleRoutes;
