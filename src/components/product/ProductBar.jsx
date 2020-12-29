import {useState,useEffect} from 'react';

import ProductCard from "../product/ProductCard.jsx";

import "../../styles/ProductBar.css";

const ProductBar = ({productos}) => {
  //State para esperar los productos
  const [products, setProducts] = useState([]);
    
  const llamado = new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve(productos);
      }, 2000)
    }else{
      reject('false');
    }
  });
  
  useEffect(() => {
    llamado
      .then(resp => setProducts(resp))
      .catch(error => console.log('No se pudieron cargar los productos'));
  },[])
  
  return (
    <section id="ProductBar">
      {
        products.length ?
          <>
            <h3>Productos destacados</h3>
            <div className="contenedor">
             {
                products.map(product => 
                  <ProductCard key={product.id} product={product} ></ProductCard>
                )
              }

            </div>
          </>:
          <h3>Cargando productos...</h3>
      }
      
    </section>
  )
}
export default ProductBar;