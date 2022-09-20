import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import './styles.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    console.log(productId);

    useEffect(()=>{

        (async() => {

            try {
                const response = await fetch('/mocks/products.json');
                const products = await response.json();
                const productoElejido = products.find(producto => producto.id === productId);
                setProductDetail(productoElejido);
            }catch(error){
                alert(error);
            }

        })();

    },[productId])
    console.log(productDetail);

  return(
    <div className='ItemDetailContainer'>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer;