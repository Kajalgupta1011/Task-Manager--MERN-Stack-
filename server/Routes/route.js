import express from "express";
import {AddTodoControl, GetAllTodoControl, DoneTodoToggle, updateTodoControl} from "../Controller/TodoControl.js";

const route = express.Router();

route.post('/todos', AddTodoControl)
route.get('/todos', GetAllTodoControl)
route.get('/todos/:id', DoneTodoToggle)
route.put('/todos/:id', updateTodoControl)
export default route;

