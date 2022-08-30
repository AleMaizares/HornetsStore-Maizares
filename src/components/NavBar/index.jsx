import React from 'react';
import './styles.css';

const NavBar = () => {
  return (
    <div>
        <nav className='navMain'>
            <a href="/" className='linkImg'>
                <img src="hornets.png" className='navImg' alt="logoHornets"></img>
            </a>
            <ul className='navList'>
                <li><a href="/" className='link_nav'>Home</a></li>
                <li><a href="/" className='link_nav'>Shop</a></li>
                <li><a href="/" className='link_nav'>Contact</a></li>
                <li><a href="/" className='link_nav'>About Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;