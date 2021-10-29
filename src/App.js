import Routes from './routes';
import './App.css';
import CartProvider from './contexts/cart';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <CartProvider>
      <div className="App">
      
      <Routes/>
      <ToastContainer autoClose={2000} /> 

      </div>
    </CartProvider>
  );
}

export default App;
