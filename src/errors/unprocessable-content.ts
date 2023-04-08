import { ApplicationError } from "@/utils/protocols/ApplicationError";

export const unprocessableContentError = (details: string[]): ApplicationError => ({
  name: "UnprocessableContentError",
  message: "Invalid Data",
  details
});
