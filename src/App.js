
import './App.css';

import {productsData} from './constants/constants'

function addCart(produto) {
 
  console.log(produto)
}

function App() {
  return (
    <div className="App">
      {productsData.map((p)=>{
        return(
          <div key={p.id}>
            <img src={p.img} alt={p.name}/>
            <p>{p.name}</p>
            <h2>R$ {p.price.toFixed(2)}</h2>
            <button onClick={()=> addCart(p)}>Adiconar ao carrinho</button>
          </div>
        )
      })}

      

    </div>
  );
}

export default App;
