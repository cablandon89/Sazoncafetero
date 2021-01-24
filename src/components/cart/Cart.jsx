import {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Store} from '../../store';

const Cart = () => {
  const [data, setData] = useContext(Store);
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
  
  const history = useHistory();
  const goCheckout = () => {
    history.push("/pago");
  }
  
  return (
    <section id="ProductDetail">
      <h3>Confirme la información</h3>
      <div className="contenedor">
       
        <div>{
          data.items.map((item,index) => 
            <div className="itemCartV" key={index}>
              <img src={`/assets/img/${data.id[index]}.jpg`} alt="img" width="100px" height="100px"/>
              <p>{item.name}</p>
              <p>x &nbsp; {data.cantidades[index]}</p>
              <p>&nbsp; = &nbsp; {formatterPeso.format(data.cantidades[index] * item.amount)}</p>
            </div>            
          )
        }</div>
        <div className="itemCartV"><p><b>Total: {formatterPeso.format(data.total)}</b></p></div>
        <button onClick={goCheckout} className="checkout">Finalizar compra</button>
      </div>
    </section>
  )
}
export default Cart;