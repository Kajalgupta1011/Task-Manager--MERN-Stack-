import React from 'react'

function FilterComponent() {
    return (
        <div className='filter_sidebar'>
            <ul>
                <li>
                    <span>Active Tasks</span>
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