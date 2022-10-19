import React from 'react';
import Item from '../Item';
import './styles.css';
import {PulseLoader} from 'react-spinners';

const ItemList = ({products}) => {
    return(
        <div className='Products'>
            {products.length ? products.map(product => {
                return <Item key={product.id} product={product}/>
            })
            :
            <div className='loadingDiv'>
                <PulseLoader color={'#fff'} size={40}/>
                <h2>Loading...</h2>
            </div>
            }
        </div>
    )
}

export default ItemList;