import express from "express";
import {AddTodoControl, GetAllTodoControl} from "../Controller/TodoControl.js";
const route = express.Router();

route.post('/todos', AddTodoControl)
route.get('/todos', GetAllTodoControl)
export default route;

