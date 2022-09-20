import React from 'react';
import './styles.css';

const NotFound = () => {
  return (
    <div className='pageError'>
        <img src="/images/error404.jpg" alt="error-404"/>
        <h2>Oops... page not Found !</h2>
    </div>
  )
}

export default NotFound;