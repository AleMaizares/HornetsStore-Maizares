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

    useEffect(()=>{

        (async() => {

            try {
                const docRef = doc(db, "Products", productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProductDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                }
            }catch(error){
                alert(error);
            }

        })();

    },[productId])

  return(
    <div className='ItemDetailContainer'>
        <h3 className='Detail'>Detail:</h3>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer;