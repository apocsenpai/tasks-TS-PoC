import { ApplicationError } from "@/utils/protocols/ApplicationError";

export const userNotFound = (): ApplicationError => ({
  name: "UserNotFound",
  message: "User not found",
});
