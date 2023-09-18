import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Search from './Components/Search/Search';
import Task from './Components/Task/Task';
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Task />
    </div>
  );
}

export default App;
