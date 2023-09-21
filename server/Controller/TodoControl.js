import { request } from "express";
import todo from "../model/Todo.js";

export const AddTodoControl = async (req, res) => {
    // console.log(req.body);

    try {
        const newTodo = await todo.create({
            data: req.body.data,
            timestamp: Date.now()
        })

        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const GetAllTodoControl = async (req, res) => {
    try {
        const allTodos = await todo.find({}).sort({ 'timestamp': -1 })
        return res.status(200).json(allTodos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const DoneTodoToggle = async (req, res) => {
    try {
        const todoReference = await todo.findById(req.params.id);
        const updateTodo = await todo.findOneAndUpdate(
            { _id: req.params.id },
            { status: !todoReference.status }
        )
        await updateTodo.save();
        return res.status(200).json(updateTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateTodoControl = async (req, res) => {
    try {
        
        await todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )
        const updatedTodo = await todo.findById(req.params.id);
        
        return res.status(200).json(updatedTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

