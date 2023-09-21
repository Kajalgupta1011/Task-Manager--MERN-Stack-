import React, { useState } from 'react';
import './Todo.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { todoToggle } from '../../Redux/Actions/api';
import { useDispatch } from 'react-redux';

function Todo({ task }) {
    const [done, setDone] = useState(false);
    const dispatch = useDispatch();

    const handleDoneTodo = () => {
        setDone(!done);
        dispatch(todoToggle(task._id)); // Pass task._id as a string
    }

    return (
        <li className = {`task_item ${done ? 'done_todo' : ''}`} >
            <span>{task.data}</span>
            <span className='task_icons'>
                {done ? <RemoveDoneIcon onClick={handleDoneTodo}/> : <DoneAllIcon onClick={handleDoneTodo}/>}
                <EditIcon />
                <DeleteOutlineIcon />
            </span>
        </li>
    )
}

export default Todo;
