
import { useContext } from 'react'
import {productsData} from '../../constants/constants'
import { CartContext } from '../../contexts/cart'
import { Card, DivCards } from './styled';


export default function Cards(){
    const {count, setCount} = useContext(CartContext);
    const {myCart, setMyCart} = useContext(CartContext);

    function addCart(produto) {
       setCount(count+1)


       const inCart= myCart.find((p) =>(p.id===produto.id))
        if(!inCart){
            produto.qtd=1
            myCart.push(produto)
            
        }else{      
            produto.qtd++
        }
        
       setMyCart(myCart)
       console.log(myCart)
    }

    
  
    return(
        <DivCards>
             {productsData.map((p)=>{
                return(
                <Card key={p.id}>
                    <img src={p.img} alt={p.name}/>
                  
                    <div className="txtCard">
                        <p>{p.name}</p>
                        <small>{p.type}</small>
                        <h3>R$ {p.price.toFixed(2)} </h3>
                    </div>
                    
                    <button onClick={()=> addCart(p)}>{p.qtd} Adicionar ao carrinho</button>
                </Card>
                )
            })}
        </DivCards>
    )
}