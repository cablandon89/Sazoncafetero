import {useEffect, useState} from "react";

//Estilos
import "./styles/App.css";
import "./styles/header.css";
import "./styles/Cart.css";
//Iconos
import "./fontello/css/fontello.css"


import Header from "./components/header.jsx";
import ProductBar from "./components/product/ProductBar.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";


function App() {
  const [product, setProduct] = useState(null);
  const Detail = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 3,
        name: "Sancocho",
        img: "https://placehold.it/500x300",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        amount: 100,
        stock: 10
      });
    }, 2000);
  });
  
  useEffect(() => {
    Detail.then(response => setProduct(response));
  }, []);
  return (
    <>
     <Header/>
     {
       product ?
       <ProductDetail product={product}/> :
       <>
        <br/><br/><br/>
        <p>Cargando producto...</p>
       </>
     }
     

    </>
  );
}

export default App;
