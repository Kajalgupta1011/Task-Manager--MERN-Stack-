import React from 'react';
import { FILTERS } from '../../Redux/Actions/type';
// import DeleteImage from '../../Assets/delete-without-bg.png'
// import taskList from '../../Assets/task-list.png'
// import list from '../../Assets/write.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, filterToggle } from '../../Redux/Actions/api';

// This component renders the filter sidebar
function FilterComponent({currentFilter}) {
    
    const tasks = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const removeDoneTodos = () => {
        tasks.forEach(({ status, _id }) => {
            if (status) {
                dispatch(deleteTask(_id));
            }
        })
    }
    return (
        <div className='filter_sidebar'>
            <ul>
            {FILTERS.map(filter => (
                    <li
                        key={filter}
                        onClick={() => dispatch(filterToggle(filter))} // Dispatch the action when clicked
                        className={filter === currentFilter ? 'filter activeFilter' : 'filter'}
                    >
                        {filter}
                    </li>
                ))}
                <div>

                {
                    tasks.some(task => task.status) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null    
                }
            </div>
            </ul>
        </div>
    )
}
export default FilterComponent