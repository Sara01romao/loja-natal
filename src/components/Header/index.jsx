import { Link } from "react-router-dom";
import {MdAccountCircle, MdShoppingCart} from "react-icons/md"
import { DivHeader } from "./styles";
import { CartContext } from "../../contexts/cart";
import { useContext } from "react";

 export default function Header(){
    const {count} = useContext(CartContext);
    const {total} = useContext(CartContext);
     return(
         <div>
                <DivHeader>
                    <nav>
                        <Link to="/" className="logo">Loja</Link>
                        <ul>
                            <li><Link to=""><MdAccountCircle/>Minha Conta</Link></li>
                            <li>
                                <Link to="/cart" >
                                    <div className="count">
                                        <MdShoppingCart/>
                                        <p style={{display: count > 0 ? 'block': 'none'}}>{count}</p>
                                    </div>
                                    R$  {total.toFixed(2)}
                                </Link>
                            </li>
                        </ul>

                        
                    </nav>
               
                </DivHeader>
         </div>
     )
 }