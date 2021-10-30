
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { DivTotal } from "./styles";



export default function Total(){
    const {total} = useContext(CartContext);
   
   
    
    
    return(
        <DivTotal>
            <div className="txtTotal">
                <p>Subtotal</p>
                <p>R$ {total}</p>
            </div>

            <div className="txtTotal">
                <p>Entrega</p>
                <p> R$ {total !== 0 ? 10.00 : 0}</p>
            </div>

            <div className="txtTotal">
                <p>Total</p>
                <p> R$ {total !== 0 ? 10 + total : 0}</p>
            </div>

            <button>Finalizar Compra</button>
        </DivTotal>
    )
}