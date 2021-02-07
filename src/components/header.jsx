import {useState, useContext, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import ItemCart from "../components/cart/itemcart.jsx";
import {Store} from '../store';
const Header = () => {
  //abrir o cerrar menu resp
  const [ocMenu, setOcMenu] = useState(false);
  //Abrir o cerrar el carrito
  const [ocCart, setOcCart] = useState(false);
  
  //Sumar el array de cantidades 
  const sumatoria = (a,b)=>a+b;
  const [data, setData] = useContext(Store);
  const openMenu = () => {
    setOcMenu(!ocMenu);  
  }
  
  const openSide = () => {
    setOcCart(!ocCart);
  }
  
  const retirarProducto = (item) => {
    console.log(data.items[item]);
  }
  
  const history = useHistory();
  const goCart = () => {
    setOcCart(false);
    history.push("/pago");
  }
  
  useEffect(() =>{
    retirarProducto();
  });
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
 
  return (
    <header>
      <div className="contenedor" >
        <h1><i className="icon-food"/>Sazón cafetero</h1>
        <label className="icon-menu">
          <input type="checkbox" className="menu-bar" onClick={openMenu} />
        </label>
        <nav className={`menu ${ocMenu ? 'menuopen' : 'menuclose'}`} >
          <Link to="/"><i className="icon-home"/> Inicio</Link>
          <Link to="/carta"><i className="icon-doc-text"/> Carta</Link>
          <Link to="/rastreo"><i className="icon-motorcycle"/> Rastrear mi pedido</Link>
          <Link to="/contacto"><i className="icon-contacts"/> Contacto</Link>
          <a href="#" onClick={(data.cantidades.length > 0) ? openSide : null}><i className="icon-basket carrito"/> Carrito {(data.cantidades.length > 0) ? <span className="badge">{data.cantidades.reduce(sumatoria)}</span> : ''} </a>
        </nav>
        {/* Sidebar Menu */}
        <div className={`sidebar ${ocCart ? 'sidebar_open' : 'sidebar_close'}`} >
          <button onClick={openSide} className="">Cerrar <i className="icon-cancel"/></button>
           <div>{
              data.items.map((item,index) => 
                <div className="itemCart" key={index}>
                 
                  <img src={`/assets/img/${data.id[index]}.jpg`} alt="img" width="50px" height="50px"/>
                  <p>{item.name}</p>
                  <p>x &nbsp; {data.cantidades[index]}</p>
                  <p> = &nbsp; {formatterPeso.format(data.cantidades[index] * item.amount)}</p>
                  {/*<i type="button" onClick={retirarProducto(index)} className="icon-cancel"></i>*/} 
                </div>            
              )
            }</div>
           <div className="itemCart"><p>Total: {formatterPeso.format(data.total)}</p></div>
          <button onClick={goCart} className="">Terminar la compra</button>
        </div>
      </div>
    </header>
  )
}
export default Header;