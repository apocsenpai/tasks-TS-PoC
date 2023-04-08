import { ApplicationError } from "@/utils/protocols/ApplicationError";

export const userAlreadyExists = (): ApplicationError => ({
  name: "UserAlreadyExists",
  message: "User already exists",
});
