
import { useContext } from 'react'
import { productsData } from '../../constants/constants'
import { CartContext } from '../../contexts/cart'
import { Card, DivCards } from './styled';


export default function Cards(){
    let {count, setCount} = useContext(CartContext);
    let {myCart, setMyCart} = useContext(CartContext);
    let {total, setTotal} = useContext(CartContext);


    function addCart(produto) {
        pushCart(produto);
        calcTotal();
        calcCount();
      
    }

    function pushCart(produto){
        const inCart= myCart.find((p) =>(p.id===produto.id))
        if(!inCart){
            produto.qtd=1
            myCart.push(produto)
            
        }else{      
            produto.qtd++
        }

       produto.totalItem= produto.qtd * produto.price;
        
       setMyCart(myCart)
       
    }
   
    function calcTotal(){
        total = myCart.reduce((acumulador, item) =>{
            return acumulador += item.totalItem
        },0)
        
        setTotal(total)
    }
      
   

    function calcCount() {
        count = myCart.reduce((acc, item) =>{
            return acc+=item.qtd
        }, 0);
    
        setCount(count);
    }
    
  
    return(
        <DivCards>
             {productsData.map((p)=>{
                return(
                <Card key={p.id}>
                    <img src={p.img} alt={p.name}/>
                  
                    <div className="txtCard">
                        <p>{p.name} <small>{p.type}</small></p>
                        
                        <h3>R$ {p.price.toFixed(2)} </h3>
                    </div>
                    
                    <button onClick={()=> addCart(p)}> Adicionar ao carrinho</button>
                </Card>
                )
            })}
        </DivCards>
    )
}