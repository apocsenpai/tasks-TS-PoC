import { QueryResult } from "pg";
import { ResponsibleCreate } from "../utils/protocols/Responsible";
import responsibleRepository from "../repositories/responsible.repository";
import { userAlreadyExists } from "@/errors";

async function create({
  name
}: ResponsibleCreate): Promise<QueryResult<any>> {

  const {rowCount} = await responsibleRepository.findByName({name});

  if(rowCount) throw userAlreadyExists();

  return responsibleRepository.create({ name });
}

export default { create };
