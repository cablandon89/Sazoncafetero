import {useState} from 'react';
import ProductCard from "../product/ProductCard.jsx";

import "../../styles/ProductBar.css";

const ProductBar = () => {
  //abrir o cerrar menu resp
 /* const [ocMenu, setOcMenu] = useState(false);
  
  const openMenu = () => {
    setOcMenu(!ocMenu);  
  }*/
  
  return (
    <section id="ProductBar">
      <h3>Productos destacados</h3>
      <div className="contenedor">
        <ProductCard description="Bandeja Paisa" amount="100" img="https://placehold.it/200x200" stock="10"></ProductCard>
        <ProductCard description="Mondongo" amount="200" img="https://placehold.it/200x200" stock="10"></ProductCard>
        <ProductCard description="Sancocho" amount="300" img="https://placehold.it/200x200" stock="10"></ProductCard>
        <ProductCard description="Trucha al ajillo" amount="200" img="https://placehold.it/200x200" stock="10"></ProductCard>
      </div>
    </section>
  )
}
export default ProductBar;