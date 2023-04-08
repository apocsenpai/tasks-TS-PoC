import { Router } from "express";
import responsibleController from "../controllers/responsible.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import responsibleSchema from "../schemas/responsible.schema";

const responsibleRoutes: Router = Router();

responsibleRoutes
  .post("/create", validateSchema(responsibleSchema), responsibleController.create)
  .post("/auth", );

export default responsibleRoutes;
