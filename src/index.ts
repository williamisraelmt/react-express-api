import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/arreglo", (req: Request, res: Response) => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Teléfono", precio: 500 },
    { id: 3, nombre: "Tablet", precio: 300 },
  ];
  res.send({ productos });
});


app.get("/numero", (req: Request, res: Response) => {
  const numero = Math.floor(Math.random() * 100);
  res.send({ numeroAleatorio: numero });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});