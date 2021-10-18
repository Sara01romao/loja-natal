import { Link } from "react-router-dom";
import {MdAccountCircle, MdShoppingCart} from "react-icons/md"
import { DivHeader } from "./styles";

 export default function Header(){
     return(
         <div>
                <DivHeader>
                    <nav>
                        <Link to="/" className="logo">Logo</Link>
                        <ul>
                            <li><Link><MdAccountCircle/>Minha Conta</Link></li>
                            <li>
                                <Link>
                                    <div className="count">
                                        <MdShoppingCart/>
                                        <p>0</p>
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