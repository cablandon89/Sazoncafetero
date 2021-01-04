import {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import "../../styles/ProductDetail.css";

const ProductDetail = ({products}) => {
  const {id} = useParams();
  const history = useHistory();
  var product = [];
  if(id == undefined){
    product = products[0]
  }else{
    product = products[id-1]
  }
  
  const [valueAdd, setValueAdd] = useState(1);
  const [buttonBuy, setButtonBuy] = useState(false);
  
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
  
  const addToCart = () => {
    setButtonBuy(true);
  }
  
  const goCart = () => {
    history.push("/cart");
  }
  
  return (
    <section id="ProductDetail">
      <h3>Detalle del producto</h3>
      <div className="contenedor">
         <div className="detail">
           <img src={product.img} alt=""/>
         </div>
         <div className="detail">
           <p><b>Nombre:</b> {product.name}</p>
           <p><b>Descripción:</b> {product.description}</p>
           <p><b>Precio:</b> {product.amount}</p>
           <p><b>Cantidad disponible:</b> {product.stock}</p>
           <p><div className="agregar">
            <i className="icon-minus" onClick={restar}/><input type="text" value={valueAdd} readOnly/><i className="icon-plus" onClick={sumar}/>
           </div></p>
           <p><button className="addToCart" onClick={addToCart}>Agregar al carrito</button></p>
           <p><button className={`addToCart ${buttonBuy ? 'show' : 'hide'}`} onClick={goCart}>Terminar la compra</button></p>
         </div>
      </div>
      <h3>Platos recomendados</h3>
    </section>
  )
}
export default ProductDetail;