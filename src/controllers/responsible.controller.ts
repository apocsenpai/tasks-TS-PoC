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
async function signin(req: Request, res: Response, next: NextFunction){
    const signInData = req.body as ResponsibleCreate;

    try {
      const token = await responsibleService.signin(signInData);

      res.send(token);
    } catch (error) {
      next(error);
    }
  }


export default { create,signin };
