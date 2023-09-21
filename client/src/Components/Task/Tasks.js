import React, { useEffect } from 'react';
// import noResults from '../../Assets/no-results.png';
import noResults from '../../Assets/no-results-found.png'
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
      <div className={`task-container ${storedTodos.length === 0 ? "empty-container" : "" }`}>
      {/* <h2 className='center-txt reset-txt main-heading'>Tasks</h2> */}
      {storedTodos.length > 0 ? 
        <ul>
          {storedTodos.map((task) => {
              return (
                <Todo
                  key={task._id}
                  task={task}
                />
              )
            })
          }
        </ul> : <img src={noResults} />}
      </div>
    </>
  );
}

export default Task;


