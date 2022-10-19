import React from 'react';
import './styles.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock){
            setCount(count+1);
        }
        else{
            alert("Sin stock suficiente");
        }
    }

    const handleLess = () => {
        if(count===initial){
        }
        else{
            setCount(count-1);
        }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    return(
        <div className='countContainer'>
        <div className='countButtons'>
            <button className=' countButton' onClick={handleLess}><AiOutlineMinus/></button>
            <p className='countCounter'>{count}</p>
            <button className=' countButton' onClick={handleAdd}><AiOutlinePlus/></button>
        </div>
        <button className='buttonAgregar' onClick={addCart}>Continuar</button>
    </div>
  )
}

export default ItemCount;