import React from 'react';
import DeleteImage from '../../Assets/delete-without-bg.png'



function FilterComponent() {
    return (
        <div className='filter_sidebar'>
            <ul>
                <li>
                    <span>Active Tasks</span>
                    <img src={DeleteImage} />
                </li>
                <li>
                    <span>Completed Tasks</span>
                </li>
                <li>
                    <span>Deleted Tasks</span>
                </li>
            </ul>

        </div>
    )
}

export default FilterComponent