import {useState, useContext, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';

import {Store} from '../../store';
import {getFirestore} from '../../db';

import "../../styles/ProductDetail.css";

const ProductDetail = () => {
  const db = getFirestore();
  const {id} = useParams();
  
  var docp = db.collection("productos").doc(id);
  const [product, setProduct] = useState(null);
  const [data, setData] = useContext(Store);
  
  const llamado = () => {
    docp.get().then(function(doc){
      if(doc.exists){
        setProduct(doc.data());
      }
    }).catch(function(error) {
      console.log("No se pudo obtener el producto", error);
    });
  };
  
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
  
  const isInCart = (item) => {
    var index = -1;
    for(var i = 0;i<data.items.length;i++){
      if(data.items[i].id == item.id){
        index = i;
      }
    }
    return index;
  }
  
  const addToCart = () => {
    if(isInCart(product) >= 0){
      setData({
        ...data,
        cantidades: [data.cantidades[isInCart(product)] + valueAdd], 
      })
    }else{
      setData({
        ...data, 
        cantidades: [...data.cantidades, valueAdd],
        items: [...data.items, product],
      });
    }
  }
  
  
  
  useEffect(() => {
    llamado();
  }, [])
  
  return (
    <section id="ProductDetail">
     { 
        product != null ?
      <>
      <h3>Detalle del producto</h3>
      <div className="contenedor">
         <div className="detail">
          <img src={`/assets/img/${id}.jpg`} alt="product" width="400px" height="400px"/>
         </div>
         <div className="detail">
           <p><b>Nombre:</b> {product.name}</p>
           <p><b>Descripción:</b> {product.description}</p>
           <p><b>Precio:</b>$ {product.amount} COP</p>
           <p><b>Cantidad disponible:</b> {product.stock}</p>
           <p><div className="agregar">
            <i className="icon-minus" onClick={restar}/><input type="text" value={valueAdd} readOnly/><i className="icon-plus" onClick={sumar}/>
           </div></p>
           <p><button className="addToCart" onClick={addToCart}>Agregar al carrito</button></p>
         </div>
      </div>
      <h3>Platos recomendados</h3>
      </>:
      <h3>Producto no encontrado</h3>
     }
    </section>
  )
}
export default ProductDetail;