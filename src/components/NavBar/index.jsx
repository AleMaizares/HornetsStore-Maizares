import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navContainer'>
        <nav className='navMain'>
            <Link to="/" className='linkImg'>
                <img src="images/hornets.png" className='navImg' alt="logoHornets"></img>
            </Link>
            <ul className='navList'>
                <li><Link to="/" className='link_nav'>Home</Link></li>
                <li><Link to="/category/camisetas" className='link_nav'>T-shirts</Link></li>
                <li><Link to="/category/pantalones" className='link_nav'>Shorts</Link></li>
                <li><Link to="/category/zapatillas" className='link_nav'>Sneakers</Link></li>
                <li><Link to="/category/gorras" className='link_nav'>Caps</Link></li>
            </ul>
            <Link to="/cart" className='linkSvg_cart'>
                <CartWidget/>
            </Link>
        </nav>
    </div>
  )
}

export default NavBar;