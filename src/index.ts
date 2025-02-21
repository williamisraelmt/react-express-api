import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 4000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({"test" : "test"});
});

app.get("/entero", (req: Request, res: Response) => { res.send ({ entero: 8}) });
app.get("/caracter", (req: Request, res: Response) => { res.send ({caracter:'a'}) });
app.get("/boolean", (req: Request,res: Response) => { res.send({boolean: true}) });
app.get("/date", (req: Request, res: Response) => { res.send({date:'03/02/2025'}) });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});