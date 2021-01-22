import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../../store';

const Cart = () => {
  const [data, setData] = useContext(Store);
  return (
    <section id="ProductDetail">
      <h3>Confirme la información</h3>
      <div className="contenedor">
        <div>{
          data.items.map((item,index) => 
            <div className="itemCart" key={index}>
              <img src="https://placehold.it/50x50" alt="img"/>
              <p>{item.name}</p>
              <p>x {data.cantidades[index]}</p>
              <i onClick='' className="icon-cancel"></i> 
            </div>            
          )
        }</div>
      </div>
    </section>
  )
}
export default Cart;