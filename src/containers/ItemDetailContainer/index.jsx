import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import './styles.css';
import { products } from '../../data/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    console.log(productId);

    useEffect(()=>{

        const getProducts = async() => {

            try {
                const response = products.find(product=>product.id===productId);
                setProductDetail(response);
            }catch(error){
                alert(error);
            }

        }
        getProducts();

    },[productId])
    console.log(productDetail);

  return(
    <div className='ItemDetailContainer'>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer;

//const response = products.find(product => product.id === product);

/* const getProducts = async() => {

    try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        setProductDetail(data);
    }catch(error){
        alert(error);
    }

} */