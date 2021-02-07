import {useState} from 'react';

import {Store} from '../../store';
import {getFirestore} from '../../db';

import "../../styles/Tracking.css";

const Tracking = () => {
  const db = getFirestore();
  
  const [pedido, setPedido] = useState(null);
  const [id, setId] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const medioPago = ['','Tarjeta debito PSE','Tarjeta de crédito','Pago contraentrega'];
  const buscarPedido = (e) => {
    setMensaje('Buscando');
    e.preventDefault();
    var docp = db.collection("pedidos").doc(id);
    docp.get().then(function(doc){
      if(doc.exists){
        setMensaje('');
        setPedido(doc.data());
      }else{
        setMensaje('Producto no encontrado');
      }
    }).catch(function(error) {
      console.log("No se pudo obtener el producto", error);
      setMensaje('Producto no encontrado');
    });
  }
  
  const completarid = (e) => {
    setId(e.target.value);
  }
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
 return (
    <section id="Tracking">
     <h3>Rastrear mi pedido</h3>
     <div className="contenedor">
        <form onSubmit={buscarPedido}>
          <input type="text" name="id" onChange={completarid} value={id} placeholder="Ingrese el número de seguimiento"/>
          <button type="submit" >Buscar</button>
        </form>
         
     </div>
     <div class="contenedor">
       { 
          pedido != null ?
            <>
            <h3>Detalle del pedido</h3>
            <table width="100%" >
              <tr><th align="right" width="50%">Usuario:</th><td>{pedido.user.nombres}</td></tr>
              <tr><th align="right">Dirección:</th><td>{pedido.user.direccion}</td></tr>
              <tr><th align="right">Email:</th><td>{pedido.user.email}</td></tr>
              <tr><th align="right">Teléfono:</th><td>{pedido.user.tel}</td></tr>
              <tr><th align="right">Medio de pago:</th><td>{medioPago[pedido.user.mediopago]}</td></tr>
            </table>
            <table width="100%">
             <tr align="left"><th></th><th>Producto</th><th>Cantidad</th><th>Subtotal</th></tr>
            {
              pedido.prod.map((item,index) =>  
                <tr><td align="center"><img src={`/assets/img/${item.id}.jpg`} alt="img" width="50px" height="50px"/></td><td>{item.name}</td><td>{item.quantity}</td><td>{formatterPeso.format(item.subtotal)}</td></tr>
              )
            }
            <tr><th colspan="3" align="right">Total</th><td>{formatterPeso.format(pedido.total)}</td></tr>
            </table>
            
            </>
          :
            <h4>{mensaje}</h4>
       }
     </div>
     
    </section>
  )
}
export default Tracking;