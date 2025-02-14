import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/integer", (req: Request, res: Response) => {
  res.send(1);
});

app.get("/string", (req: Request, res: Response) => {
  res.send("Carlos");
});

app.get("/boolean", (req: Request, res: Response) => {
  res.send(true);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});