import React from 'react';
import './styles.css';

const ItemListContainer = ({greeting, price}) => {
  return (
    <div className='containerProduct'>
        <h3 className='titleProduct'>{greeting}</h3>
        <img src="camisetahornets.png" alt="camisetaHornets" className='imgProduct'/>
        <h4 className='priceProduct'>{price}</h4>
        <button className='buttonAgregar'>Agregar</button>
    </div>
  )
}

export default ItemListContainer;