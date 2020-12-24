import {useState,useEffect} from 'react';
import ProductCard from "../product/ProductCard.jsx";

import "../../styles/ProductBar.css";

const ProductBar = () => {
  //State para esperar los productos
  const [products, setProducts] = useState([]);
  const productos = [
    {
      id: 1,
      name: 'Bandeja Paisa',
      amount: 300,
      img: 'https://placehold.it/200x200',
      stock: 5,
    },
    {
      id: 2,
      name: 'Mondongo',
      amount: 200,
      img: 'https://placehold.it/200x200',
      stock: 7,
    },
    {
      id: 3,
      name: 'Sancocho',
      amount: 100,
      img: 'https://placehold.it/200x200',
      stock: 10,
    },
    {
      id: 4,
      name: 'Trucha al ajillo',
      amount: 300,
      img: 'https://placehold.it/200x200',
      stock: 3,
    }
  ]
  
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
  
  //abrir o cerrar menu resp
 /* const [ocMenu, setOcMenu] = useState(false);
  
  const openMenu = () => {
    setOcMenu(!ocMenu);  
    
    <ProductCard description="Bandeja Paisa" amount="100" img="https://placehold.it/200x200" stock="10"></ProductCard>
    <ProductCard description="Mondongo" amount="200" img="https://placehold.it/200x200" stock="10"></ProductCard>
    <ProductCard description="Sancocho" amount="300" img="https://placehold.it/200x200" stock="10"></ProductCard>
    <ProductCard description="Trucha al ajillo" amount="200" img="https://placehold.it/200x200" stock="10"></ProductCard>-->
  }*/
  
  return (
    <section id="ProductBar">
      {
        products.length ?
          <>
            <h3>Productos destacados</h3>
            <div className="contenedor">
             {
                products.map(product => 
                              <ProductCard 
                                key={product.id} 
                                name={product.name} 
                                amount={product.amount} 
                                img={product.img}
                                stock={product.stock}>
                              </ProductCard>
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