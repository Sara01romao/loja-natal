
import {productsData} from '../../constants/constants'

export default function Cards(){

function addCart(produto) {
 
    console.log(produto)
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