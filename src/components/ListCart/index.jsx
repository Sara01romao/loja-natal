
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { ItemCart } from "./styled";

export default function ListCart(){
    const {myCart} = useContext(CartContext)
    return(
        <div>
             {myCart.map((p)=>{
                    return(
                        <ItemCart key={p.id}>
                            <img src={p.img} alt={p.name} />

                            <div className="txtCart">
                                <h3>{p.name}</h3>
                                <p>R$ {p.price.toFixed(2)} <small>{p.type}</small></p>
                            </div>

                            <div className="qtdItem">
                                <button>-</button>
                                <p>{p.qtd}</p>
                                <button>+</button>
                            </div>

                            <button>Remover</button>

                        </ItemCart>
                    )
                })}
        </div>
    )
}