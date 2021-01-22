import {useState, useContext} from 'react';
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
  const openMenu = () => {
    setOcMenu(!ocMenu);  
  }
  
  const openSide = () => {
    setOcCart(!ocCart);
  }
  
  const retirarProducto = (item) => {
    console.log('retirar producto');
  }
  const history = useHistory();
  const goCart = () => {
    history.push("/cart");
  }
  
  const [data, setData] = useContext(Store);
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
          <a href="#"><i className="icon-bullhorn"/> Promociones</a>
          <a href="#"><i className="icon-contacts"/> Contacto</a>
          <a href="#" onClick={(data.cantidades.length > 0) ? openSide : null}><i className="icon-basket carrito"/> Carrito {(data.cantidades.length > 0) ? <span className="badge">{data.cantidades.reduce(sumatoria)}</span> : ''} </a>
        </nav>
        {/* Sidebar Menu */}
        <div className={`sidebar ${ocCart ? 'sidebar_open' : 'sidebar_close'}`} >
          <button onClick={openSide} className="">Cerrar <i className="icon-cancel"/></button>
           <div>{
              data.items.map((item,index) => 
                <div className="itemCart" key={index}>
                  <img src="https://placehold.it/50x50" alt="img"/>
                  <p>{item.name}</p>
                  <p>x {data.cantidades[index]}</p>
                  <i onClick={retirarProducto(index)} className="icon-cancel"></i> 
                </div>            
              )
            }</div>
           
          <button onClick={goCart} className="">Terminar la compra</button>
        </div>
      </div>
    </header>
  )
}
export default Header;