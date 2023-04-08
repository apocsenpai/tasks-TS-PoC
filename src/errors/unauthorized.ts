import { ApplicationError } from "@/utils/protocols/ApplicationError";

export const unauthorizedError = (): ApplicationError => ({
  name: "UnaunauthorizedError",
  message: "Permission denied mothafocka",
});
