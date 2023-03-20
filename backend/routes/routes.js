import express from 'express';
import { addNewToDo } from '../controller/todo-controller.js';

const routes = express.Router();

routes.post('/todos', addNewToDo);

export default routes;