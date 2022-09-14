import React from 'react';
import './styles.css';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div className='detail'>
        <img src={product.image} alt=""/>
        <div className='detail-info'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <ItemCount stock={15} initial={1}/>
        </div>
    </div>
  )
}

export default ItemDetail;