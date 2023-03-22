import express from 'express';
import { addNewToDo, getAllTodos } from '../controller/todo-controller.js';

const routes = express.Router();

routes.post('/todos', addNewToDo);
routes.get('/todos', getAllTodos);

export default routes;