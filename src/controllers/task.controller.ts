import { Request, Response, NextFunction } from "express";
import { TaskCreate } from "../utils/protocols/Task";
import taskService from "../services/task.service";

async function create(req: Request, res: Response, next: NextFunction) {
    const createTaskData = req.body as TaskCreate;

    try {
        await taskService.create(createTaskData);

        res.send('Okay');
    } catch (error) {
        console.log(error);
    }
}

export default { create };
