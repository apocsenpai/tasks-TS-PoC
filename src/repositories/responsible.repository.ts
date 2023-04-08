import connection from "../configs/db";
import { QueryResult } from "pg";
import { ResponsibleCreate } from "../utils/protocols/Responsible";

async function create({ name }: ResponsibleCreate): Promise<QueryResult<any>> {
  return connection.query(
    `
        INSERT INTO responsibles (name)
        VALUES ($1)
    `,
    [name]
  );
}

async function findByName({ name }: ResponsibleCreate): Promise<QueryResult<ResponsibleCreate>>{
  return connection.query(
    `
        SELECT name FROM responsibles WHERE name = $1
      `,
    [name]
  );
}

export default { create, findByName };