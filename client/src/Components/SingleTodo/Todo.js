import React, { useState } from 'react';
import './Todo.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import { deleteTask, todoToggle, updateTask } from '../../Redux/Actions/api';
import { useDispatch } from 'react-redux';

function Todo({ task }) {
    const [done, setDone] = useState(false);
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.data);
    
    const dispatch = useDispatch();

    const handleDoneTodo = () => {
        setDone(!done);
        dispatch(todoToggle(task._id));     // Pass task._id as a string
    }
    const handleEditing = () => {
        setEditing(!editing);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setEditing(!editing);
        dispatch(updateTask(task._id, text));
    }
    return (
        <li className = {`task_item ${done ? 'done_todo' : ''}`} >
            <span className={`${editing ? 'hide_data' : ''}`}>{task.data}</span>

            {editing ? (<form onSubmit={handleEditSubmit}>
                <input
                className='edit_input'
                    type='text'
                    value={text} 
                    onChange={(e)=>setText(e.target.value)}/>
            </form>) : ('')}
            <span className='task_icons'>
                {done ? <RemoveDoneIcon onClick={handleDoneTodo}/> : <DoneAllIcon onClick={handleDoneTodo}/>}
                {editing ? <DoneIcon onClick={handleEditSubmit} />: <EditIcon onClick={handleEditing} />}
                <DeleteOutlineIcon onClick={()=> dispatch(deleteTask(task._id))}/>
            </span>
        </li>
    )
}

export default Todo;
