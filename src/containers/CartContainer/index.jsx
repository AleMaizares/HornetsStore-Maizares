//React
import {React, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
//Components
import {Shop} from '../../context/ShopProvider';
import ordenGenerada from '../../services/generarOrden';
//Firestore
import {collection, doc, addDoc, updateDoc, getDoc} from "firebase/firestore";
import {db} from "../../firebase/config";
//Icons-react
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {AiOutlineCheck,AiOutlineClose} from "react-icons/ai";
import {GiBroom} from "react-icons/gi";
//Library and Styles
import {BarLoader} from 'react-spinners';
import './styles.css';

const Cart = () => {
    const {cart, removeItem, clearCart, total} = useContext(Shop);

    const [loading, setLoading] = useState(false);

    const handleBuy = async() => {
        setLoading(true);
        const importeTotal = total();

        const orden = ordenGenerada("Alejandro", "alejandromaizares@gmail.com", 3875123456, cart, importeTotal);
        const docRef = await addDoc(collection(db, "orders"), orden);

        cart.forEach(async(productoEnCarrito)=>{
            const productRef = doc(db, "Products", productoEnCarrito.id);

            const productSnap = await getDoc(productRef);

            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity
            });
        })
        setLoading(false);
        alert("Gracias por su compra! Se generó la orden con ID: " + docRef.id);
        clearCart();
    };

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
                                <th>${item.price * item.quantity}</th>
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
                <p>${total()}</p>
                {loading ? (
                    <div>
                        <BarLoader color={'#4e3f96'}/>
                    </div>
                ) : (
                <button className='finishBuying' onClick={handleBuy}>Finalizar Compra<AiOutlineCheck/></button>
                )}
            </div>
        </div>
    )
}

export default Cart;

/*<button onClick={Modal} className='finishBuying'>Ir al Checkout<BsFillArrowRightCircleFill/></button>*/