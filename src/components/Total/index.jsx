
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { DivTotal } from "./styles";



export default function Total(){
    const {total} = useContext(CartContext);
    
   
    
    
    return(
        <DivTotal>
            <div className="txtTotal">
                <p>Subtotal</p>
                <p>R$ {total.toFixed(2)}</p>
            </div>

            <div className="txtTotal">
                <p>Entrega</p>
                <p> R$ {total !== 0 ? 10.00.toFixed(2) : 0.00.toFixed(2)}</p>
            </div>

            <div className="txtTotal">
                <p>Total</p>
                <p> R$ {total !== 0 ? (10 + total).toFixed(2) : 0.00.toFixed(2)}</p>
            </div>

            <hr />

            <button>Finalizar Compra</button>
        </DivTotal>
    )
}