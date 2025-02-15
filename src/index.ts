import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(cors<Request>());

app.get("/integer", (req: Request, res: Response) => {
  res.send({integer:1});
});

app.get("/string", (req: Request, res: Response) => {
  res.send({string: "Carlos"});
});

app.get("/boolean", (req: Request, res: Response) => {
  res.send({boolean: true});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});