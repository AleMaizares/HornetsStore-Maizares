import React from 'react';
import './styles.css';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({title, price}) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad ${cantidad} al carrito`);
    }
  return (
    <div className='containerProduct'>
        <h3 className='titleProduct'>{title}</h3>
        <img src="camisetahornets.png" alt="camisetaHornets" className='imgProduct'/>
        <h4 className='priceProduct'>{price}</h4>
        <ItemCount stock={15} initial={1} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;