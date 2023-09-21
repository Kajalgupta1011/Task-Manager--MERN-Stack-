import React from 'react';
import DeleteImage from '../../Assets/delete-without-bg.png'
import taskList from '../../Assets/task-list.png'
import list from '../../Assets/write.png'



function FilterComponent() {
    return (
        <div className='filter_sidebar'>
            <ul>
                <li>
                    <img src={list} />
                    <span>Active Tasks</span>
                </li>
                <li>
                    <img src={taskList} />
                    <span>Completed Tasks</span>
                </li>
                <li>
                    <img src={DeleteImage} />
                    <span>Deleted Tasks</span>
                </li>
            </ul>

        </div>
    )
}

export default FilterComponent