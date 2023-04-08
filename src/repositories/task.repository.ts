import { TaskCreate } from "../utils/protocols/Task";
import connection from "../configs/db";
import { QueryResult } from "pg";

async function create({
  name,
  description,
  date,
  responsibleId,
}: TaskCreate): Promise<QueryResult<any>> {
  return connection.query(
    `
        INSERT INTO tasks (name, description, date, responsible_id)
        VALUES ($1, $2, $3, $4)
    `,
    [name, description, date, responsibleId]
  );
}

async function findById({ id }) {
  return connection.query(
    `
      SELECT id, status FROM tasks WHERE id = $1
  `,
    [id]
  );
}

async function updateStatusDone({ id }) {
  return connection.query(
    `
    UPDATE tasks SET status = true WHERE id = $1
  `,
    [id]
  );
}

async function updateStatusUndone({ id }) {
  return connection.query(
    `
    UPDATE tasks SET status = false WHERE id = $1
  `,
    [id]
  );
}

async function deleteTaskById({ id }) {
  return connection.query(
    `
    DELETE FROM tasks WHERE id = $1
  `,
    [id]
  );
}

async function findAll() {
  return connection.query(
    `
    SELECT r.name,
    COUNT(r.id) as "totalTasks"
    FROM tasks t
    JOIN responsibles r ON r.id = t.responsible_id
    GROUP BY r.id;
  `
  );
}

export default {
  create,
  findById,
  updateStatusDone,
  updateStatusUndone,
  deleteTaskById,
  findAll,
};
