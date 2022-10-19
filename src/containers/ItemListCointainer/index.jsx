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
                    setProductos(productosFirebase);
            } catch (error) {
            }
        })()
    },[categoryId])

  return(
    <div className='containerProducts'>
        <h2 className='categoryTitle'>{categoryId}</h2>
        <ItemList products={productos}/>
    </div>
  )
}
export default ItemListContainer;