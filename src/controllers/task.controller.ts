import { Request, Response, NextFunction } from "express";
import { TaskCreate } from "../utils/protocols/Task";
import taskService from "../services/task.service";
import httpStatus from "http-status";
import { Responsible } from "@/utils/protocols/Responsible";

async function create(req: Request, res: Response, next: NextFunction) {
  const createTaskData = req.body as TaskCreate;
  const { id: responsibleId } = res.locals.user as Responsible;
  try {
    await taskService.create({ ...createTaskData, responsibleId });

    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

type TaskIdParams = {
  taskId: string;
};

async function toogleTask(req: Request, res: Response, next: NextFunction) {
  const { taskId } = req.params as TaskIdParams;

  try {
    await taskService.toogleTask({ id: Number(taskId) });

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

async function closeTask(req: Request, res: Response, next: NextFunction) {
  const { taskId } = req.params as TaskIdParams;

  try {
    await taskService.closeTask({ id: Number(taskId) });

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

async function listAll(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await taskService.listAll();

    res.send(tasks);
  } catch (error) {
    next(error);
  }
}

export default { create, toogleTask, closeTask, listAll };
