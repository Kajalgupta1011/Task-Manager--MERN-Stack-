import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Search from './Components/Search/Search';
import Task from './Components/Task/Tasks';
function App() {
  return (
    <div className="main-container">
      <div className='container'>
        <div className='header_fix_section'>
          <Header />
          <Search />
        </div>
        <Task />
      </div>

    </div>
  );
}

export default App;
