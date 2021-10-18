import { useState, createContext } from "react";

export const CartContext =createContext({});

function CartProvider({children}){
    const [count, setCount] =useState(0);
    const [myCart, setMyCart] = useState([]);

    return(
        <CartContext.Provider value={{count, setCount, myCart, setMyCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;