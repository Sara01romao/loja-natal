
import ListCart from "../../components/ListCart";
import Total from "../../components/Total";
import { SectionCart } from "./styles";

export default function Cart(){
   
    return(
        
        <SectionCart>
            <div className="listCart">
            <ListCart/>
            </div>
    
            <div className="total">
                <Total/>
            </div>
        </SectionCart>
       
    )
}