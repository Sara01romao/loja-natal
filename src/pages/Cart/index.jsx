
import ListCart from "../../components/ListCart";
import Total from "../../components/Total";
import { SectionCart } from "./styles";

export default function Cart(){
   
    return(
        
        <SectionCart>
            <h1>Meu Carrinho</h1>
            <div className="containerList">
                <div className="listCart">
                    <ListCart/>
                </div>
        
                <div className="total">
                    <Total/>
                </div>
            </div>
        </SectionCart>
       
    )
}