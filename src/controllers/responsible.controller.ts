import { Request, Response, NextFunction } from "express";
import { ResponsibleCreate } from "../utils/protocols/Responsible.js";
import responsibleService from "../services/responsible.service.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const createResponsibleData = req.body as ResponsibleCreate;

  try {
    await responsibleService.create(createResponsibleData);

    res.send("Okay");
  } catch (error) {
    next(error);
  }
}

export default { create };
