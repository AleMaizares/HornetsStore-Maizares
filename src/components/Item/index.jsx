import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/detail/${product.id}`);
    }

  return (
    <div className='Product'>
        <h3 className='titleProduct'>{product.name}:</h3>
        <img src={product.imgUrl} alt={product.alt} className='imgProduct'/>
        <h4 className='priceProduct'>${product.price}</h4>
        <button className='buttonProduct' onClick={handleNavigate}>Ver detalle del Producto</button>
    </div>
  )
}

export default Item;