import { TaskCreate } from "../utils/protocols/Task";
import dayjs from "dayjs";
import taskRepository from "../repositories/task.repository";
import { unprocessableContentError } from "@/errors";

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

export default { create };
