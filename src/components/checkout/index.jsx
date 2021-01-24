import {useState, useContext} from 'react';
import {Store} from '../../store';
import {getFirestore} from '../../db';
import "../../styles/Checkout.css";
import firebase from 'firebase/app';

const Checkout = () => {
  const db = getFirestore();
  const [data, setData] = useContext(Store);
  const [idPedido, setIdPedido] = useState('');
  const [tarjeta, setTarjeta] = useState(false);
  const [formulario, setFormulario] = useState({
    nombres: '',
    email: '',
    mediopago: '',
    tarjeta: {},
    direccion: '',
    tel: '',
  });
  
  const setDataFormulario = (e) => {
    setFormulario({...formulario, [e.target.name]: e.target.value});
    if(e.target.name == 'mediopago' && e.target.value == "2"){
      setTarjeta(true);
    }else if(e.target.name == 'mediopago' && e.target.value != "2"){
      setTarjeta(false);
    }
  }
  
  const enviarPedido = (e) => {
    e.preventDefault();
    let items = [];
    data.items.map((item,index) => {
      var tmp = {
        name:item.name,
        quantity:data.cantidades[index],
        subtotal:data.cantidades[index] * item.amount,
        id: data.id[index],
      }
      items.push(tmp);
    });
    const compra = {
      total:data.total,
      date:firebase.firestore.Timestamp.fromDate(new Date()),
      prod:items,
      user:formulario
    }
    db.collection('pedidos').add(compra)
    .then(({id}) => {
        setIdPedido(id);
    })
    .catch(e => console.log(e));
  }
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
  
  const inputhide = {
    display: 'none',
  };
  const inputshow= {
    display: 'block',
  };
//  const [idPedido, setIdPedido] = useState('');

  return (
    <section id="Checkout">
     
      <h3>Confirmar compra</h3>
      {
        (idPedido == '')?
          <>
      <div className="contenedor">
        {
          data.items.map((item,index) => 
            <div className="itemCartV" key={index}>
              <img src={`/assets/img/${data.id[index]}.jpg`} alt="img" width="50px" height="50px"/>
              <p>{item.name}</p>
              <p>x &nbsp; {data.cantidades[index]}</p>
              <p>&nbsp; = &nbsp; {formatterPeso.format(data.cantidades[index] * item.amount)}</p>
            </div>            
          )
        }
        <div className="itemCartV">Total: {formatterPeso.format(data.total)}</div>
      </div>
      <h3>Información del pago</h3>
      <div className="contenedor">
        <form onSubmit={enviarPedido}>
          <input type="text" name="nombres" onChange={setDataFormulario} value={formulario.nombres} placeholder="Nombre completo"/>
          <input type="email" name="email" onChange={setDataFormulario} value={formulario.email} placeholder="Correo electronico"/>
          <input type="text" name="direccion" onChange={setDataFormulario} value={formulario.direccion} placeholder="Dirección de entrega"/>
          <input type="number" name="tel" onChange={setDataFormulario} value={formulario.tel} placeholder="Teléfono"/>
          <select name="mediopago" id="" onChange={setDataFormulario} >
            <option value="">Seleccione uno</option>
            <option value="1">Tarjeta debito - PSE</option>
            <option value="2">Tarjeta de crédito</option>
            <option value="3">Pago contraentrega</option>
          </select>
          <input type="text" style={tarjeta?inputshow:inputhide} name="tarjeta" value={formulario.tarjeta[0]} placeholder="Número de tarjeta"/>
          <input type="text" style={tarjeta?inputshow:inputhide} name="vencimiento" value={formulario.tarjeta[1]} placeholder="Vencimiento"/>
          <input type="number" style={tarjeta?inputshow:inputhide} name="cvv" value={formulario.tarjeta[2]} placeholder="CVV" max="999"/>
          <button type="submit">Comprar</button>
        </form>
      </div>
          </>:
        <div className="contenedor">
          <p>Su pedido se realizó de forma correcta, llegará a su casa en un máximo de 40 minutos, su número de seguimiento es {idPedido}</p>
        </div>
        }
    </section>
    );
      
}
export default Checkout;