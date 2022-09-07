import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { products } from '../../data/products';
import './styles.css';
import ItemList from '../../components/ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        (async() => {
            const obtenerProductos = new Promise((accept, reject) => {
                setTimeout(() => {
                    accept(products)
                },3000);
            })
            try{
                const response = await obtenerProductos;
                setProductos(response);
            } catch (error) {
                console.log(error);
            }
        })()

    },[])

  return(
    <div className='containerProducts'>
        <ItemList products={productos}/>
    </div>
  )
}
export default ItemListContainer;