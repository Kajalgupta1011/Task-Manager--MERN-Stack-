import express from "express";
import {AddTodoControl, GetAllTodoControl, DoneTodoToggle} from "../Controller/TodoControl.js";

const route = express.Router();

route.post('/todos', AddTodoControl)
route.get('/todos', GetAllTodoControl)
route.get('/todos/:id', DoneTodoToggle)
export default route;

