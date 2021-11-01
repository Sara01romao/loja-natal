import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";



const Routes =() =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;