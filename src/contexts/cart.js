import { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({children}){
    const [count, setCount] = useState(0);
    const [myCart, setMyCart] = useState([]);
    let [total, setTotal] = useState(0);

    return(
        <CartContext.Provider value ={{count, setCount, myCart, setMyCart, total, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;