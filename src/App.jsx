import {useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//Estilos
import "./styles/App.css";
import "./styles/header.css";
import "./styles/Cart.css";
//Iconos
import "./fontello/css/fontello.css"
//Componentes
import Header from "./components/header.jsx";
import Banner from "./components/banner/Banner.jsx";
import ProductBar from "./components/product/ProductBar.jsx";
import Carta from "./components/menu/Menu.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/checkout";
import Tracking from "./components/tracking";
import Contact from "./components/contact";
//Store - context
import {Store} from './store';


function App() {
  
  
  const [data, setData] = useState({
    items:[],
    id:[],
    cantidades:[],
    total:0
  });
  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Banner/>
            <ProductBar/>
          </Route>
          <Route path="/carta">
            <Carta/>
          </Route>
          <Route path="/detalle/:id?">
            <ProductDetail/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/pago">
            <Checkout/>
          </Route>
          <Route path="/rastreo">
            <Tracking/>
          </Route>
          <Route path="/contacto">
            <Contact/>
          </Route>
          <Route path="*">
            <Banner/>
            <ProductBar/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
