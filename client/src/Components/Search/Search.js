import React, { useState } from 'react'

function Search() {
  const[textTask, setTextTask] = useState();
 
  const onSubmitTask = () =>{

  }
  const onInputChange = (e) =>{
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
