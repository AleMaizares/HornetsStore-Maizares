import React from 'react';
import './styles.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const addCart = (quantity) => {
        setQty(quantity);
    }

    console.log(qty);

    const handleFinish = () => {
        navigate('/cart');
    }

    return (
        <div className='detail'>
            <img src={product.imgUrl} alt={product.alt}/>
            <div className='detail-info'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
                <span>({product.stock} disponibles)</span>
                {!qty ? (
                    <ItemCount stock={product.stock} initial={1} onAdd={addCart}/>
                ) : (
                    <button className='finalizarCompra' onClick={handleFinish}>Finalizar Compra</button>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;