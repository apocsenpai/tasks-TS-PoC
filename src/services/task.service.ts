import { TaskCreate, TaskId, TaskPerResponsible } from "../utils/protocols/Task";
import dayjs from "dayjs";
import taskRepository from "../repositories/task.repository";
import { taskNotFound, unprocessableContentError } from "@/errors";
import { QueryResult } from "pg";

async function create({
  name,
  description,
  date,
  responsibleId,
}: TaskCreate): Promise<void> {
  const dateIsNotValid: boolean = dayjs().isAfter(dayjs(date), "day");

  if (dateIsNotValid) throw unprocessableContentError;

  await taskRepository.create({ name, description, date, responsibleId });
}

async function toogleTask({ id }: TaskId): Promise<void> {

  const {
    rows: [task],
  } = await taskRepository.findById({ id });

  if (!task) throw taskNotFound();

  await (!task.status
    ? taskRepository.updateStatusDone({ id })
    : taskRepository.updateStatusUndone({ id }));
}

async function closeTask({ id }: TaskId): Promise<void> {

  const {
    rows: [task],
  } = await taskRepository.findById({ id });

  if (!task) throw taskNotFound();

  await taskRepository.deleteTaskById({ id });
}

async function listAll(): Promise<QueryResult<TaskPerResponsible>> {
  return await taskRepository.findAll();
}

export default { create, toogleTask, closeTask, listAll };
