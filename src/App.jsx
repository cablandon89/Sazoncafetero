//Estilos
import "./styles/App.css";
import "./styles/header.css";
import "./styles/Cart.css";
//Iconos
import "./fontello/css/fontello.css"


import Header from "./components/header.jsx";
import ProductBar from "./components/product/ProductBar.jsx";


function App() {
  return (
    <>
     <Header/>
     <ProductBar/>

    </>
  );
}

export default App;
