import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
  return (
    <div className='navContainer'>
        <nav className='navMain'>
            <a href="/" className='linkImg'>
                <img src="images/hornets.png" className='navImg' alt="logoHornets"></img>
            </a>
            <ul className='navList'>
                <li><a href="/" className='link_nav'>Home</a></li>
                <li><a href="/" className='link_nav'>Shop</a></li>
                <li><a href="/" className='link_nav'>Contact</a></li>
                <li><a href="/" className='link_nav'>About Us</a></li>
            </ul>
            <a href='/' className='linkSvg_cart'>
                <CartWidget/>
            </a>
        </nav>
    </div>
  )
}

export default NavBar;