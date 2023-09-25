import React, { useState } from 'react';
import { FILTERS } from '../../Redux/Actions/type';
import Modal from 'react-modal';
// import DeleteImage from '../../Assets/delete-without-bg.png'
// import taskList from '../../Assets/task-list.png'
// import list from '../../Assets/write.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, filterToggle } from '../../Redux/Actions/api';
import CustomModal from '../Modal/CustomModal';

// This component renders the filter sidebar
function FilterComponent({ currentFilter }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [selectValue, setSelectValue] = useState('')

    const tasks = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const removeDoneTodos = () => {

        setIsModalOpen(false);

        tasks.forEach(({ status, _id }) => {
            if (status) {
                dispatch(deleteTask(_id));
            }
        })
    }

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setSelectValue(selectedValue);
        if (selectedValue === 'Remove Done Todos') {
            removeDoneTodos();
        } else {
            dispatch(filterToggle(selectedValue));
        }
    }
    return (
        <div className='filter_sidebar'>
            {/* <ul>
                {FILTERS.map(filter => (
                    <li
                        key={filter}
                        onClick={() => dispatch(filterToggle(filter))} // Dispatch the action when clicked
                        className={filter === currentFilter ? 'filter activeFilter' : 'filter'}
                    >
                        {filter}
                    </li>
                ))}
                {
                    tasks.some(task => task.status) ? (
                        <li
                            onClick={removeDoneTodos}
                            className="filter clear"
                        >Remove Done Todos</li>
                    ) : null
                }
            </ul> */}

            <select
                value={selectValue}
                onChange={handleChange}
                className='select-filter'
            >
                {FILTERS.map(filter => (
                    <option
                        key={filter}
                        value={filter}
                        className={filter === currentFilter ? 'filter activeFilter' : 'filter'}
                    >
                        {filter}
                    </option>
                ))}
                
            </select>
            {tasks.some(task => task.status) && (
                    <button
                    className='filter clear'
                    onClick={openModal}
                    >
                        Remove Done Todos
                    </button>
                )}
                <CustomModal
                isOpen={isModalOpen}
                onRequestClose={closeModal} // Close the modal
                onConfirm={removeDoneTodos} // Perform the action when confirmed
            />
        </div>
    )
}
export default FilterComponent