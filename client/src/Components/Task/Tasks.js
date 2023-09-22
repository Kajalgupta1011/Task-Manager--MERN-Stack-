import React, { useEffect } from 'react';
import noResults from '../../Assets/no-results-found.png'
import './Tasks.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '../../Redux/Actions/api';
import Todo from '../SingleTodo/Todo';
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../../Redux/Actions/type';
import FilterComponent from '../Filter/FilterComponent';

function Task() {
  const dispatch = useDispatch();
  const storedTodos = useSelector(state => state.todos);
  const currentFilter = useSelector(state => state.currentFilter);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  // Create a filtered list of tasks based on the current filter
  const filteredTodos = () => {
    if (currentFilter === ALL_TODOS) {
      return storedTodos;
    } else if (currentFilter === ACTIVE_TODOS) {
      return storedTodos.filter(task => !task.status);
    } else if (currentFilter === DONE_TODOS) {
      return storedTodos.filter(task => task.status);
    }
  };

  return (
    <>
      <div className='filters_all'>
        <FilterComponent currentFilter={currentFilter}/>
      </div>
      <div className={`task-container ${filteredTodos().length === 0 ? "empty-container" : ""}`}>
        {filteredTodos().length > 0 ? (
          <ul>
            {filteredTodos().map((task) => (
              <Todo
                key={task._id}
                task={task}
              />
            ))}
          </ul>
        ) : (
          <img src={noResults} alt="No results found" />
        )}
      </div>
    </>
  );
}

export default Task;
