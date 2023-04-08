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

export default { create };
