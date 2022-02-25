import { React, createContext, useState } from "react";


export const cartContext = createContext({})

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
const [err, setErr] = useState(false);
const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const addCart = (data) => {
    if (userInfo != null) {
        const item = {id: data.id, name: data.name}
      setCart([...cart, item])
      localStorage.setItem('cartConst', cart)
    } else {
      setErr(true);
    }
  }
    return (
        <cartContext.Provider value={{cart, err, addCart }}>
            {children}
        </cartContext.Provider>
    )
}