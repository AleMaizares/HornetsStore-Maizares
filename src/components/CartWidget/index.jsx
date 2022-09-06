import React from 'react';
import './styles.css';
import {BsCart2} from 'react-icons/bs';

export const CartWidget = () => {
    return(
    <div className='conteinerCart'>
        <BsCart2/>
    </div>
  )
}

export default CartWidget;