import { QueryResult } from "pg";
import { ResponsibleCreate } from "../utils/protocols/Responsible";
import responsibleRepository from "../repositories/responsible.repository";
import { userAlreadyExists, userNotFound } from "@/errors";
import jwt from "jsonwebtoken";
import { AuthToken } from "@/utils/protocols/AuthToken";
import secretJwtHash from "@/utils/constants/secret";

async function create({ name }: ResponsibleCreate) {
  const result = await responsibleRepository.findByName({ name });

  if (result) throw userAlreadyExists();

  return responsibleRepository.create({ name });
}

async function signin({ name }: ResponsibleCreate): Promise<AuthToken> {
  const result = await responsibleRepository.findByName({ name });

  if (!result) throw userNotFound();

  const token = jwt.sign({ name }, secretJwtHash, { expiresIn: 86400 });

  return { token };
}

export default { create, signin };
