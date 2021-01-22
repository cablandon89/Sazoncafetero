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
//Store - context
import {Store} from './store';


function App() {
  
  
  const [data, setData] = useState({
    items:[],
    id:[],
    cantidades:[]
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
