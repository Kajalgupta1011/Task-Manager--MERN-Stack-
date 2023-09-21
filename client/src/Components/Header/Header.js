import React from 'react';
import titleImage from '../../Assets/planning-list.png'
import './Header.css';
function Header() {
  return (
    <>
    <h1 className='main-heading center-txt reset-margin'>
      
        <img className='heading_image' src={titleImage} />
      
      Task Manager
    </h1>
    </>
  )
}

export default Header;
