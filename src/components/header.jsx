import {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCart from "../components/cart/itemcart.jsx";

const Header = () => {
  //abrir o cerrar menu resp
  const [ocMenu, setOcMenu] = useState(false);
  //Abrir o cerrar el carrito
  const [ocCart, setOcCart] = useState(false);
  
  const openMenu = () => {
    setOcMenu(!ocMenu);  
  }
  
  const openSide = () => {
    setOcCart(!ocCart);
  }
  
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
          <a href="#" onClick={openSide}><i className="icon-basket carrito"/> Carrito <sup className="badge">&nbsp; 1 &nbsp;</sup> </a>
        </nav>
        {/* Sidebar */}
        <div className={`sidebar ${ocCart ? 'sidebar_open' : 'sidebar_close'}`} >
          <button onClick={openSide} className="">Cerrar &times;</button>
          <a href="#" className="">Articulo </a>
        </div>
      </div>
    </header>
  )
}
export default Header;