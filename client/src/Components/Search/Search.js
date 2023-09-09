import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../Redux/Actions/api';
function Search() {
  const [textTask, setTextTask] = useState();
  const dispatch = useDispatch();
  const onSubmitTask = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(textTask));
  }
  const onInputChange = (e) => {
    setTextTask(e.target.value);
  }
  return (
    <>
      <form className='input-form' onSubmit={onSubmitTask}>
        <input
          className='input-task'
          placeholder='Enter your new task...'
          type='text'
          onChange={onInputChange}
        />
      </form>
    </>
  )
}

export default Search
