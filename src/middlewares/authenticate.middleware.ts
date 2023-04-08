import { unauthorizedError } from "@/errors";
import responsibleRepository from "@/repositories/responsible.repository";
import secretJwtHash from "@/utils/constants/secret";
import { ResponsibleCreate } from "@/utils/protocols/Responsible";
import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

async function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) throw unauthorizedError();

  const authorizationParts = authorization.split(" ");
  if (authorizationParts.length !== 2) throw unauthorizedError();

  const [schema, token] = authorizationParts;
  if (schema !== "Bearer") throw unauthorizedError();

  jwt.verify(
      token,
      secretJwtHash,
      async (error, decoded) => {
        try {
          if (error) throw unauthorizedError();

          const { name } = decoded as ResponsibleCreate;

          const {
            rows: [user],
          } = await responsibleRepository.findByName({ name });

          if (!user) throw unauthorizedError();

          res.locals.user = user;
          next();
        } catch (error) {
          next(error);
        }
      }
    );


}

export default authenticate;
