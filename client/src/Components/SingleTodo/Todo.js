import React, { useState } from 'react';
import './Todo.css';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { todoToggle } from '../../Redux/Actions/api';
import { useDispatch } from 'react-redux';
function Todo({ task }) {
    const [done, setDone] = useState(false);
    const dispatch = useDispatch()
    return (
        <li className='task_item'>
            <span>{task.data}</span>
            <span className='task_icons'> <EditIcon/> <DeleteOutlineIcon /> {done ? <RemoveDoneIcon onClick={()=>dispatch(todoToggle(task._id))}/> : <DoneAllIcon onClick={()=>dispatch(todoToggle(task._id))}/>}</span>
        </li>
    )
}

export default Todo