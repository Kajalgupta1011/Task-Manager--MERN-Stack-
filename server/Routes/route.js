import express from "express";
import {AddTodoControl, GetAllTodoControl, DoneTodoToggle, updateTodoControl, deleteTodoControl} from "../Controller/TodoControl.js";

const route = express.Router();

route.post('/todos', AddTodoControl)
route.get('/todos', GetAllTodoControl)
route.get('/todos/:id', DoneTodoToggle)
route.put('/todos/:id', updateTodoControl)
route.delete('/todos/:id', deleteTodoControl)
export default route;

