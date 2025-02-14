import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/Estudiantes", (req: Request, res: Response) => {

  const Estudiantes = [
    {id: 1, Nombre: "Maria", Curso: "5to", P1: 80, P2: 71, P3: 78, P4: 84},
    {id: 2, Nombre: "Jacob", Curso: "4to", P1: 79, P2: 80, P3: 98, P4: 87},
    {id: 3, Nombre: "Pablo", Curso: "3ro", P1: 97,  P2: 100, P3: 90, P4: 100},
  ];
  
  res.send({ Estudiantes });
});

app.get("/numero", (req: Request, res: Response) => {
  const numero = Math.floor(Math.random() * 100);
  res.send({ numeroAleatorio: numero });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});