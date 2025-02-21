import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Sequelize } from 'sequelize-typescript';
import Task from "./task.model";

const app: Express = express();
const port = 3000;

app.use(cors<Request>());

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'test',
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
    title: 'my title 1',
    materia: 'naturales',
  })
  res.send({ msg : 'ok' });
});

app.get('/tasks/', async (req: Request, res: Response) => {
  const tasks = await Task.findAll()
  res.send({ data : tasks });
});

app.listen(port, () => {
  sequelize.sync().catch(console.error);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});