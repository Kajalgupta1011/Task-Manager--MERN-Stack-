import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data:{
        type: String,
        require: true
    },
    status:{
        type: Boolean,
        default : false
    },
    timestamp:{
        type: Date,
        default: Date.now()
    }
})

const todo =  mongoose.model('todo', todoSchema);
export default todo;