import React, { useEffect } from 'react';
import './Tasks.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '../../Redux/Actions/api'; // Correct the import path
import Todo from '../SingleTodo/Todo';

function Task() {
  const dispatch = useDispatch();
  const storedTodos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getAllTodo()); // Use getAllTodo as a function
  }, []);

  return (
    <>
      <div className='task-container'>
      {/* <h2 className='center-txt reset-txt main-heading'>Tasks</h2> */}
        <ul>
          {
            storedTodos.map((task) => {
              return (
                <Todo
                  key={task._id}
                  task={task}
                />
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Task;


