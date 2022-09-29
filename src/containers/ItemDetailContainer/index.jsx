import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import './styles.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    console.log(productId);

    useEffect(()=>{

        (async() => {

            try {
                const docRef = doc(db, "Products", productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProductDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                    console.log("No such document!");
                }
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

/* const response = await fetch('/mocks/products.json');
const products = await response.json();
const productoElejido = products.find(producto => producto.id === productId);
setProductDetail(productoElejido); */