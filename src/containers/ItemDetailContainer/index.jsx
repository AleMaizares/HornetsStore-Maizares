import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    useEffect(()=>{

        const getProducts = async() => {

            try {
                const response = await fetch("https://fakestoreapi.com/products/3");
                const data = await response.json();
                setProductDetail(data);
            }catch(error){
                alert(error);
            }

        }
        getProducts();

    },[])

  return(
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer;

//const response = products.find(product => product.id === product);