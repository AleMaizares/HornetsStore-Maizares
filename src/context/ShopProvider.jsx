import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {

        const productoRepetido = isInCart(item.id);

        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product;
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (itemToRemove) => {
        const deleteItem = cart.filter(product => product !== itemToRemove)
        setCart(deleteItem);
    }

    const clearCart = () => {
        setCart([]);
    }

    const total = () => {
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
        return total;
    }

    

  return (
    <Shop.Provider value={{cart, addItem, removeItem, clearCart, total}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider;