import React from 'react';
import { Shop } from '../../context/ShopProvider';
import './styles.css';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";
import { GiBroom } from "react-icons/gi";


const Cart = () => {
    const {cart, removeItem, clearCart, total} = useContext(Shop);
    console.log(cart);
    const importeTotal = total();
    console.log(importeTotal);
    return (
        <div className='contains'>
            <table>
                <thead>
                    <tr>
                        <th><h3>Producto:</h3></th>
                        <th><h3>Nombre:</h3></th>
                        <th><h3>Cantidad:</h3></th>
                        <th><h3>Precio:</h3></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length ? cart.map(item => {
                            return(
                            <tr key={item.id}>
                                <th><img width="70px" src={item.imgUrl} alt={item.alt}/></th>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>${item.price}</th>
                                <th>
                                    <button className='deleteProduct' onClick={()=>removeItem(item)}><AiOutlineClose/>Eliminar</button>
                                </th>
                            </tr>)
                        })
                    : <tr>
                        <th></th>
                        <th></th>
                        <th className='vacio'>
                            <h3>Carrito Vacío</h3>
                            <p>(Sin ningun producto)</p>
                        </th>
                      </tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>
                            <Link className='keepBuying' to="/"><BsFillArrowLeftCircleFill/>Seguir Comprando...</Link>
                        </th>
                        <th></th>
                        <th>
                            <button className='clearCart' onClick={clearCart}>Limpiar Carrito<GiBroom/></button>
                        </th>
                    </tr>
                </tfoot>
            </table>
            <div className='total'>
                <h2>Total:</h2>
                <p>${importeTotal}</p>
                <button className='finishBuying'>Finalizar Compra<AiOutlineCheck/></button>
            </div>
        </div>
    )
}

export default Cart;