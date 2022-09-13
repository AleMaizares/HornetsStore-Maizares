import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className='detail-container'>
        <h1>{product.title}</h1>
        <img src={product.image} alt="caca" width={250}/>
    </div>
  )
}

export default ItemDetail;