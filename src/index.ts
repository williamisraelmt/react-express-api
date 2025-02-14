import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({"test" : "test"});
});

app.get("/entero", (Req: Request, res: Response) => { Response.send(1) });
app.get("/caracter", (Req: Request, res: Response) => { Response.send('a') });
app.get("/boolean", (Req: Request,res: Response) => { Response.send(true) });
app.get("/date", (Req: Request, res: Response) => { Response.send('03/02/2025') });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});