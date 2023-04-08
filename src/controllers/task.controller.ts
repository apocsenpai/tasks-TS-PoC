import { Request, Response, NextFunction } from "express";
import { TaskCreate } from "../utils/protocols/Task";
import taskService from "../services/task.service";
import httpStatus from "http-status";
import { Responsible } from "@/utils/protocols/Responsible";

async function create(req: Request, res: Response, next: NextFunction) {
    const createTaskData = req.body as TaskCreate;
    const {id: responsibleId} = res.locals.user as Responsible;

    try {
        await taskService.create({...createTaskData, responsibleId});

        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error);
    }
}

export default { create };
