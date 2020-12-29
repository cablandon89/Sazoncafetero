import {useState} from 'react';
import {Link} from 'react-router-dom';

const ProductCard = ({product}) => {
  //Agregar contador de productos
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
    <article>
      <Link to={`/detalle/${product.id}`}><img src={product.img} alt="product" width="200px" height="200px"/></Link>
      <h4>{product.name} </h4>
      <h5>$ {product.amount} COP</h5>
      <div className="agregar">
        <i className="icon-minus" onClick={restar}/><input type="text" value={valueAdd} readOnly/><i className="icon-plus" onClick={sumar}/>
      </div>
      <button className="addToCart">Agregar al carrito</button>
      <Link to={`/detalle/${product.id}`}>Detalles</Link>
    </article> 
  )
}

export default ProductCard;