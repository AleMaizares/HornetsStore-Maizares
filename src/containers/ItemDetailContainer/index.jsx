import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import './styles.css';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    useEffect(()=>{

        const getProducts = async() => {

            try {
                const response = await fetch("https://fakestoreapi.com/products/1");
                const data = await response.json();
                setProductDetail(data);
            }catch(error){
                alert(error);
            }

        }
        getProducts();

    },[])

  return(
    <div className='ItemDetailContainer'>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer;

//const response = products.find(product => product.id === product);