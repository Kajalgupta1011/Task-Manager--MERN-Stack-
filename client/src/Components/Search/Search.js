import React, { useState } from 'react';
import write from '../../Assets/write.png'
import './Search.css';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../Redux/Actions/api';
function Search() {
  const [textTask, setTextTask] = useState();
  const dispatch = useDispatch();
  const onSubmitTask = (e) => {
    e.preventDefault();

    if(textTask === ''){
      alert("Input Cant'be Empty !!!");
      
    }else{
      dispatch(addNewTodo(textTask));
      setTextTask('');
    }
    
  }
  const onInputChange = (e) => {
    setTextTask(e.target.value);
  }
  return (
    <>
      <form className='task_form center-txt' onSubmit={onSubmitTask}>
        <img src={write} />
        <input
          className='input_task'
          placeholder='Enter your new task...'
          type='text'
          onChange={onInputChange}
          value={textTask}
        />
      </form>
    </>
  )
}

export default Search
