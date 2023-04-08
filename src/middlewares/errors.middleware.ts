import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "@/utils/protocols/ApplicationError";

export function handleApplicationErrors(
  err: ApplicationError,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "UnprocessableContentError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
      message: err.message,
      details: err.details,
    });
  }
  if (err.name === "UserAlreadyExists") {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === "UserNotFound") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}
