//import {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom';
//Estilos
import "./styles/App.css";
import "./styles/header.css";
import "./styles/Cart.css";
//Iconos
import "./fontello/css/fontello.css"


import Header from "./components/header.jsx";
import Banner from "./components/banner/Banner.jsx";
import ProductBar from "./components/product/ProductBar.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";


function App() {
  const productos = [
    {
      id: 1,
      name: 'Bandeja Paisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      amount: 300,
      img: 'https://placehold.it/500x500',
      stock: 5,
    },
    {
      id: 2,
      name: 'Mondongo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      amount: 200,
      img: 'https://placehold.it/500x500',
      stock: 7,
    },
    {
      id: 3,
      name: 'Sancocho',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      amount: 100,
      img: 'https://placehold.it/500x500',
      stock: 10,
    },
    {
      id: 4,
      name: 'Trucha al ajillo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      amount: 300,
      img: 'https://placehold.it/500x500',
      stock: 3,
    }
  ]
  
   /*product ?
       
     
       <ProductDetail product={product}/> :
       <>
        <br/><br/><br/>
        <p>Cargando producto...</p>
       </>*/
  
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Banner/>
          <ProductBar productos={productos}/>
        </Route>
        <Route path="/carta">
          <ProductBar productos={productos}/>
        </Route>
        <Route path="/detalle/:id?">
          <ProductDetail products={productos}/>
        </Route>
        <Route path="*">
          <Banner/>
          <ProductBar productos={productos}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
