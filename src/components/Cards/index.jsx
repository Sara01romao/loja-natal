
import { useContext } from 'react'
import {productsData} from '../../constants/constants'
import { CartContext } from '../../contexts/cart'


export default function Cards(){
    const {count, setCount} = useContext(CartContext);
    const {myCart, setMyCart} = useContext(CartContext);

    function addCart(produto) {
       setCount(count+1)


       let temCart= myCart.find((p) =>(p.id==produto.id))
        if(!temCart){
            myCart.push(produto)
        }else{
            
        }
       setMyCart(myCart)
        console.log(myCart)
    }

    
  
    return(
        <div>
             {productsData.map((p)=>{
                return(
                <div className="card" key={p.id}>
                    <img src={p.img} alt={p.name}/>
                    <p>{p.name}</p>
                    <h2>R$ {p.price.toFixed(2)}</h2>
                    <button onClick={()=> addCart(p)}>Adiconar ao carrinho</button>
                </div>
                )
            })}
        </div>
    )
}