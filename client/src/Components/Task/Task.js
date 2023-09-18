import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '../../Redux/Actions/api'; // Correct the import path

function Task() {
  const dispatch = useDispatch();
  const storedTodos = useSelector(state => state.todos);
  
  useEffect(() => {
    dispatch(getAllTodo()); // Use getAllTodo as a function
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {
        storedTodos.map((task)=>{
          return(
            <div key={ task._id }>
              {task.data}
            </div>
          )
        })
      }
    </>
  );
}

export default Task;
