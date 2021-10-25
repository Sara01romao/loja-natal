
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { ItemCart } from "./styled";

export default function ListCart(){
    let {count, setCount} = useContext(CartContext);
    let {myCart, setMyCart} = useContext(CartContext);
    let {total, setTotal} = useContext(CartContext);

    function add(produto){
        produto.qtd++
        produto.totalItem= produto.qtd * produto.price;
        
        setMyCart(myCart);
        calcTotal();
        calcCount();
        
    }

    function removeQtd(produto){
        
        if(produto.qtd>1){
            produto.qtd--;
            produto.totalItem= produto.qtd * produto.price;
        }
        setMyCart(myCart);
        calcTotal();
        calcCount();
    }


    function calcTotal(){
        total = myCart.reduce((acumulador, item) =>{
            return acumulador += item.totalItem
        },0)
        
        setTotal(total)
    }


    function calcCount() {
        count = myCart.reduce((acc, item) =>{
            return acc +=item.qtd
        }, 0);
    
        setCount(count);
    }

    function remove(produto){
        let newlist = myCart.filter((p) =>{
            return (p.id !== produto.id)
        })

        myCart = newlist

        setMyCart(myCart)
        calcTotal();
        calcCount();
    
        console.log(newlist);
    }
     

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
                                <button onClick={() => removeQtd(p)}>-</button>
                                <p>{p.qtd}</p>
                                <button onClick={() => add(p)}>+</button>
                            </div>

                            <button onClick={() =>remove(p)}>Remover</button>

                        </ItemCart>
                    )
                })}
        </div>
    )
}