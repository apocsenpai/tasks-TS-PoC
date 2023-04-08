import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { unprocessableContentError } from "@/errors";

export function validateSchema(schema: Joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((e) => e.message);

      throw unprocessableContentError(errors);
    }

    next();
  };
}
