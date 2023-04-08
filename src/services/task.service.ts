import { TaskCreate } from "../utils/protocols/Task";
import dayjs from "dayjs";
import taskRepository from "../repositories/task.repository";
import { QueryResult } from "pg";

async function create({
  name,
  description,
  date,
}: TaskCreate): Promise<QueryResult<any>> {
  const dateIsNotValid: boolean = dayjs().isAfter(dayjs(date), "day");

  if (dateIsNotValid) throw new Error();

  return taskRepository.create({ name, description, date });
}

export default { create };
