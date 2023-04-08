import { ApplicationError } from "@/utils/protocols/ApplicationError";

export const taskNotFound = (): ApplicationError => ({
  name: "TaskNotFound",
  message: "Task not found",
});
