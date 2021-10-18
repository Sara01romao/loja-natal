import { Link } from "react-router-dom";
import {MdAccountCircle, MdShoppingCart} from "react-icons/md"
import { DivHeader } from "./styles";
import { CartContext } from "../../contexts/cart";
import { useContext } from "react";

 export default function Header(){
    const {count} = useContext(CartContext)

     return(
         <div>
                <DivHeader>
                    <nav>
                        <Link to="/" className="logo">Loja</Link>
                        <ul>
                            <li><Link to=""><MdAccountCircle/>Minha Conta</Link></li>
                            <li>
                                <Link to="" >
                                    <div className="count">
                                        <MdShoppingCart/>
                                        <p>{count}</p>
                                    </div>
                                    R$ 00,00
                                </Link>
                            </li>
                        </ul>

                        
                    </nav>
               
                </DivHeader>
         </div>
     )
 }