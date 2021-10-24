
import ListCart from "../../components/ListCart";
import { SectionCart } from "./styles";

export default function Cart(){
   
    return(
        <SectionCart>
            <div className="listCart">
               <ListCart/>
            </div>
           

            <div>
                total
            </div>
        </SectionCart>
    )
}