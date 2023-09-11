import express from "express";
import {AddTodoControl} from "../Controller/AddTodoControl.js";

const route = express.Router();

route.post('/todos', AddTodoControl)
export default route;