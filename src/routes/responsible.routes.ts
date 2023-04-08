import { Router } from "express";
import responsibleController from "../controllers/responsible.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import responsibleSchema from "../schemas/responsible.schema";

const responsibleRoutes: Router = Router();

responsibleRoutes
  .use(validateSchema(responsibleSchema))
  .post("/create", responsibleController.create)
  .post("/auth", responsibleController.signin);

export default responsibleRoutes;
