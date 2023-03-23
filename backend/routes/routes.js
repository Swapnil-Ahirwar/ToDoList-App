import express from 'express';
import { addNewToDo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const routes = express.Router();

routes.post('/todos', addNewToDo);
routes.get('/todos', getAllTodos);
routes.get('/todos/:id', toggleTodoDone);
routes.put('/todos/:id', updateTodo);
routes.delete('/todos/:id', deleteTodo)

export default routes;