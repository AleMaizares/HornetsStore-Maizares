import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {

        (async() => {
            try {
                const q = categoryId ?
                    query(collection(db, "Products"), where("category", "==", categoryId))
                    :
                    query(collection(db, "Products"));

                    const querySnapshot = await getDocs(q);
                    const productosFirebase = [];
                    querySnapshot.forEach((doc) => {
                        productosFirebase.push({id: doc.id, ...doc.data()})
                    });
                    console.log(productosFirebase);
                    setProductos(productosFirebase);
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

/* const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        (async() => {
            try{
                if(categoryId){
                    const response = await fetch('/mocks/products.json');
                    const productos = await response.json();
                    const productosFIltrados = productos.filter(producto => producto.category === categoryId);
                    setProductos(productosFIltrados);
                }else{
                    const response = await fetch('/mocks/products.json');
                    const productos = await response.json();
                    setProductos(productos);
                }
            } catch (error) {
                console.log(error);
            }
        })()
    },[categoryId]) */