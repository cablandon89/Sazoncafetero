import {useState} from 'react';

import "../../styles/ProductDetail.css";

const ProductDetail = ({product}) => {
  const [valueAdd, setValueAdd] = useState(1);
  
  const restar = () => {
    if(valueAdd > 1){
      setValueAdd(valueAdd -1)         
    } 
  }
  
  const sumar = () => {
    if(valueAdd < product.stock){
      setValueAdd(valueAdd +1)         
    } 
  }
  return (
    <section id="ProductDetail">
      <h3>Detalle del producto</h3>
      <div className="contenedor">
         <div ClassName="detail">
           <img src={product.img} alt=""/>
         </div>
         <div ClassName="detail">
           <p><b>Nombre:</b> {product.name}</p>
           <p><b>Descripción:</b> {product.description}</p>
           <p><b>Precio:</b> {product.amount}</p>
           <p><b>Cantidad disponible:</b> {product.stock}</p>
           <p><div className="agregar">
            <i className="icon-minus" onClick={restar}/><input type="text" value={valueAdd} readOnly/><i className="icon-plus" onClick={sumar}/>
           </div></p>
           <p><button className="addToCart">Agregar al carrito</button></p>
         </div>
      </div>
      <h3>Platos recomendados</h3>
    </section>
  )
}
export default ProductDetail;