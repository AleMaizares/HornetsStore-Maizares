import React from 'react';
import './styles.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const {addItem} = useContext(Shop);

    const addCart = (quantity) => {
        setQty(quantity);
    }

    const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave)
        navigate('/cart');
    }

    return (
        <div className='detail'>
            <img src={product.imgUrl} alt={product.alt}/>
            <div className='detail-info'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {!qty ? (
                    <div className='detailSelection'>
                        <h3>${product.price}</h3>
                        <span>({product.stock} disponibles)</span>
                        <ItemCount stock={product.stock} initial={1} onAdd={addCart}/>
                    </div>
                ) : (
                    <div className='detailContinue'>
                        <h3>Total:</h3>
                        <p>${product.price * qty}</p>
                        <button className='agregarAlCarrito' onClick={handleFinish}>Agregar al Carrito</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;