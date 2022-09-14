import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div className='Product'>
        <h3 className='titleProduct'>{product.name}:</h3>
        <img src={product.imgUrl} alt={product.alt} className='imgProduct'/>
        <h4 className='priceProduct'>${product.preice}</h4>
        <button className='buttonProduct'>
            <Link to="/detail">Ver detalle del Producto</Link>
        </button>
    </div>
  )
}

export default Item;