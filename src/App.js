import Routes from './routes';
import './App.css';
import CartProvider from './contexts/cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="bodyApp">
          <Routes/>
          <ToastContainer autoClose={2000} /> 
             
        </div>
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;
