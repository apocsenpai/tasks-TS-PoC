import { TaskCreate } from "../utils/protocols/Task";
import { tasks, responsibles } from "@/configs/db";

async function create({ name, description, date, responsibleId }: TaskCreate) {
  return tasks.create({
    data: {
      name,
      description,
      date,
      responsible_id: responsibleId,
    },
  });
}

async function findById({ id }) {
  return tasks.findUnique({ where: { id } });
}

async function updateStatusDone({ id }) {
  return tasks.update({
    data: {
      status: true,
    },
    where: {
      id,
    },
  });
}

async function updateStatusUndone({ id }) {
  return tasks.update({
    data: {
      status: false,
    },
    where: {
      id,
    },
  });
}

async function deleteTaskById({ id }) {
  return tasks.delete({
    where: {
      id,
    },
  });
}

async function findAll() {
  return responsibles.findMany({
    select: {
      name: true,
      _count: {
        select: {
          tasks: true,
        },
      },
    },
  });
}

export default {
  create,
  findById,
  updateStatusDone,
  updateStatusUndone,
  deleteTaskById,
  findAll,
};
