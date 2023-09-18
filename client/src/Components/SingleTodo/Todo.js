import React from 'react';
import './Todo.css';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
function Todo({ task }) {
    return (
        <li className='task_item'>
            <span>{task.data}</span>
            <span className='task_icons'><DeleteOutlineIcon /> <EditIcon/></span>
        </li>
    )
}

export default Todo