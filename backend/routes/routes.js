import express from 'express';
import { addNewToDo, getAllTodos, toggleTodoDone } from '../controller/todo-controller.js';

const routes = express.Router();

routes.post('/todos', addNewToDo);
routes.get('/todos', getAllTodos);
routes.get('/todos/:id', toggleTodoDone);

export default routes;