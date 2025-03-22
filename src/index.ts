import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Sequelize } from 'sequelize-typescript';
import Task from "./models/task.model";
import path from 'path';

const app: Express = express();
const port = 3000;

/**
 *  Permite que las peticiones web puedan acceder a la carpeta /public para acceder a "archivos estáticos", que generalmente
 *  son archivos .js, .css, .png, .jpeg, .gif, .ico, etc
 */
app.use('/static', express.static(path.join(__dirname, '../public')));
/**
 * Le dice a ExpressJS la ubicación de las vistas .html de manera que todas las vistas se puedan importar solo por su nombre.
 */
app.set('views', __dirname + '/views');
/**
 *  Permite que las rutas de Express puedan retornar vistas .html en vez de objetos JSON.
 */
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(cors<Request>());
app.use(express.json());

/**
 * Inicializa la conexión a la base de datos.
 */
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

/**
 * En vez de acceder al archivo .html directamente, estamos utilizando el servicio de NodeJS y ExpressJS
 * para acceder al mismo. En este caso, entraríamos a esta ruta http://localhost:3000/ver-tareas/
 */
app.get('/', async (req: Request, res: Response) => {
  res.render('index.html');
});

app.get('/ver-tareas/', async (req: Request, res: Response) => {
  res.render('ver-tareas.html');
});

// TODO: Aquí deben agregar las demás rutas /crear-tarea/, etc, etc

/**
 * API se refiere a "application programming interface", generalmente se utiliza este prefijo en las rutas
 * para indicar que estas realizan operaciones para devolver datos, no devuelven ninguna "vista"
 */
app.post('/api/tasks/', async (req: Request, res: Response) => {
  await Task.create({
    description: req.body.description,
    date: new Date(req.body.date),
    complete: false,
  })
  res.send({ msg : 'inserted' });
});

app.post('/api/tasks/', async (req: Request, res: Response) => {
  await Task.create({
    description: req.body.description,
    date: new Date(req.body.date),
    complete: false,
  })
  res.send({ msg : 'inserted' });
});

app.get('/api/tasks/', async (req: Request, res: Response) => {
  const tasks = await Task.findAll({
    order: [
      ['complete', 'ASC'],
      ['date', 'DESC']
    ]
  })
  res.send({ data : tasks });
});

app.get('/api/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.findByPk(req.params.id)
  
  res.send({ data : tasks });
});

app.put('/api/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.update({
    description: req.body.description,
    date: new Date(req.body.date),
    complete: req.body.complete
   }, 
   { 
     where: { id: req.params.id } 
   })
 res.send({ msg : "actualizado" });
});

app.delete('/api/tasks/:id', async (req: Request, res: Response) => {
  const tasks = await Task.destroy({
    where: { id: req.params.id }
  })
  res.send({ msg : "eliminado" });
});

app.listen(port, () => {
  sequelize.sync().catch(console.error);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});