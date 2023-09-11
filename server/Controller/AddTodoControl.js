import todo from "../model/Todo.js";

export const AddTodoControl = async (req, res) => {
    // console.log(req.body);

    try{
        const newTodo = await todo.create({
            data: req.body.data,
            timestamp: Date.now()
        })
    
        await newTodo.save();
        res.status(200).json(newTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}