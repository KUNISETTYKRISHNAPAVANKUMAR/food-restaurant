import React, { useState } from 'react'

export let CardContext=React.createContext()
const CartProvider = ({children}) => {
    let [cartList,setCartList]=useState([])
  return (
    <CardContext.Provider value={{cartList,setCartList}}>
        {children}
    </CardContext.Provider>
  )
}

export default CartProvider