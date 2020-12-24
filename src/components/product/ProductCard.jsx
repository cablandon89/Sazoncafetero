import {useState} from 'react';

const ProductCard = ({name, amount, img, stock}) => {
  //Agregar contador de productos
  const [valueAdd, setValueAdd] = useState(1);
  
  const restar = () => {
    if(valueAdd > 1){
      setValueAdd(valueAdd -1)         
    } 
  }
  
  const sumar = () => {
    if(valueAdd < stock){
      setValueAdd(valueAdd +1)         
    } 
  }
  return (
    <article>
      <img src={img} alt="product"/>
      <h4>{name}</h4>
      <h5>$ {amount} COP</h5>
      <div className="agregar">
        <i className="icon-minus" onClick={restar}/><input type="text" value={valueAdd} readOnly/><i className="icon-plus" onClick={sumar}/>
      </div>
      <button className="addToCart">Agregar al carrito</button>
    </article> 
  )
}

export default ProductCard;