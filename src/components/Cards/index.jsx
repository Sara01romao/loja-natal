
import { useContext, useState } from 'react'
import { productsData } from '../../constants/constants'
import { CartContext } from '../../contexts/cart'
import { Card, DivCards, NavFilter } from './styled';


export default function Cards(){
    let {count, setCount} = useContext(CartContext);
    let {myCart, setMyCart} = useContext(CartContext);
    let {total, setTotal} = useContext(CartContext);
    const [ordem, setOrdem] = useState('');
    let [lista] = useState([]);


    if(ordem === '1' || ordem === ''){
        lista =productsData.sort((a, b) => a.id -  b.id );
      
        console.log(lista)
    } else if(ordem === '2'){
        console.log("Maior");
        lista =productsData.sort((a, b) =>  b.price - a.price);
       
        console.log(lista)
        
        
    }else if(ordem === '3'){
        lista =productsData.sort((a, b) => a.price - b.price);
       
        console.log(lista)

    }


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
           
           

            <NavFilter>
                <select  value={ordem} onChange={({ target }) => setOrdem(target.value)}>
                    <option disabled value="">Orderna por</option>
                    <option value="1">Todos</option>
                    <option value="2">Maior preço</option>
                    <option value="3">Menor preço</option>
                </select>

                <input type="search" name="" id="" placeholder="Buscar" />
            </NavFilter>
          

             {lista.map((p)=>{
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