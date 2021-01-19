import {useState,useEffect} from 'react';

import ProductCard from "../product/ProductCard.jsx";
import {getFirestore} from '../../db';
import "../../styles/ProductBar.css";

const ProductBar = () => {
  //State para esperar los productos
  const [products, setProducts] = useState([]);
  const db = getFirestore();
  
  const llamado = () => {
    db.collection('productos').where("outstanding", "==", true).get()
    .then(docs => {
      let arr = [];
      docs.forEach(doc => {
        arr.push({id: doc.id, data: doc.data()})
      })
      setProducts(arr);
    })
    .catch(e => console.log(e));
  };
  
  useEffect(() => {
    llamado();
  }, [])
  return (
    <section id="ProductBar">
      {
        products.length ?
          <>
            <h3>Productos destacados</h3>
            <div className="contenedor">
             {
                products.map(product => 
                  <ProductCard key={product.id} id={product.id} product={product.data} ></ProductCard>
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