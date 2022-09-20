import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import { products } from '../../data/products';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {

        (async() => {
            try{
                if(categoryId){
                    const response = await fetch('/mocks/products.json');
                    const productos = await response.json();
                    const productosFIltrados = productos.filter(producto => producto.category === categoryId);
                    setProductos(productosFIltrados);
                }
                else{
                    const response = await fetch('/mocks/products.json');
                    const productos = await response.json();
                    setProductos(productos);
                }
            } catch (error) {
                console.log(error);
            }
        })()
    },[categoryId])

  return(
    <div className='containerProducts'>
        <ItemList products={productos}/>
    </div>
  )
}
export default ItemListContainer;