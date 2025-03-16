import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Sequelize } from 'sequelize-typescript';
import Task from "./task.model";

const app: Express = express();
const port = 3000;

app.use(cors<Request>());

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'tareas',
  username: 'root',
  password: 'root1234',
  host: 'localhost',
  port: 3306,
  models: [Task],
  define: {
    underscored: true,
  },
});

app.post('/tasks/', async (req: Request, res: Response) => {
  await Task.create({
    description: 'blablablabla',
    date: new Date(),
    complete: true,
  })
  res.send({ msg : 'inserted' });
});

app.get('/tasks/', async (req: Request, res: Response) => {
  const tasks = await Task.findAll()
  res.send({ data : tasks });
});

app.get('/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.findByPk(req.params.id)
  res.send({ data : tasks });
});

app.put('/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.update({
    complete: false 
   }, 
   { 
     where: { id: req.params.id } 
   })
 res.send({ msg : "actualizado" });
});

app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.destroy({
    where: { id: req.params.id }
  })
  res.send({ msg : "eliminado" });
});

app.get("/entero", (Req: Request, res: Response) => { Response.send(1) });
app.get("/caracter", (Req: Request, res: Response) => { Response.send('a') });
app.get("/boolean", (Req: Request,res: Response) => { Response.send(true) });
app.get("/date", (Req: Request, res: Response) => { Response.send('03/02/2025') });

app.listen(port, () => {
  sequelize.sync().catch(console.error);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});