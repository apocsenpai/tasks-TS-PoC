import { TaskCreate } from "../utils/protocols/Task";
import connection from "../configs/db";
import { QueryResult } from "pg";

async function create({
  name,
  description,
  date,
}: TaskCreate): Promise<QueryResult<any>> {
  return connection.query(
    `
        INSERT INTO tasks (name, description, date)
        VALUES ($1, $2, $3)
    `,
    [name, description, date]
  );
}

export default { create };
