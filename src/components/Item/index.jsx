import React from 'react';
import './styles.css';

const Item = ({product}) => {
  return (
    <div className='Product'>
        <h3 className='titleProduct'>{product.name}:</h3>
        <img src={product.imgUrl} alt={product.alt} className='imgProduct'/>
        <h4 className='priceProduct'>${product.preice}</h4>
        <button className='buttonProduct'>Ver detalle del Producto</button>
    </div>
  )
}

export default Item;