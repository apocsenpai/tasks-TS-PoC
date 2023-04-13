import { TaskCreate, TaskId } from "../utils/protocols/Task";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import taskRepository from "../repositories/task.repository";
import { taskNotFound, unprocessableContentError } from "@/errors";

dayjs.extend(customParseFormat);

async function create({
  name,
  description,
  date,
  responsibleId,
}: TaskCreate): Promise<void> {
  const dateIsNotValid: boolean = dayjs().isAfter(
    dayjs(date, "DD/MM/YYYY"),
    "day"
  );

  if (dateIsNotValid) throw unprocessableContentError(["Data inválida"]);

  await taskRepository.create({
    name,
    description,
    date: new Date(dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD")),
    responsibleId,
  });
}

async function toogleTask({ id }: TaskId): Promise<void> {
  const task = await taskRepository.findById({ id });

  if (!task) throw taskNotFound();

  await (!task.status
    ? taskRepository.updateStatusDone({ id })
    : taskRepository.updateStatusUndone({ id }));
}

async function closeTask({ id }: TaskId): Promise<void> {
  const task = await taskRepository.findById({ id });

  if (!task) throw taskNotFound();

  await taskRepository.deleteTaskById({ id });
}

async function listAll() {
  return await taskRepository.findAll();
}

export default { create, toogleTask, closeTask, listAll };
