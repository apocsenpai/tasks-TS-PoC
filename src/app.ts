import express, { json, Request, Response } from "express";
import { handleApplicationErrors } from "./middlewares/errors.middleware.js";
import routes from "@/routes";

const app = express();

app
  .use(json())
  .get("/health", (req: Request, res: Response) => res.send("Okay"))
  .use(routes)
  .use(handleApplicationErrors);

const PORT: number = 5000;
app.listen(PORT, () => console.log(`Server listening in PORT: ${PORT}`));
