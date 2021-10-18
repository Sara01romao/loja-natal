import Routes from './routes';
import './App.css';
import CartProvider from './contexts/cart';



function App() {
  return (
    <CartProvider>
      <div className="App">
      
      <Routes/>
        

      </div>
    </CartProvider>
  );
}

export default App;
