import {useState} from 'react';
import ItemCart from "../components/cart/itemcart.jsx";

const Header = () => {
  //abrir o cerrar menu resp
  const [ocMenu, setOcMenu] = useState(false);
  
  const openMenu = () => {
    setOcMenu(!ocMenu);  
  }
  
  return (
    <header>
      <div className="contenedor" >
        <h1><i className="icon-food"/>Sazón cafetero</h1>
        <label className="icon-menu">
          <input type="checkbox" className="menu-bar" onClick={openMenu} />
        </label>
        <nav className={`menu ${ocMenu ? 'menuopen' : 'menuclose'}`} >
          <a href="#"><i className="icon-home"/> Inicio</a>
          <a href="#"><i className="icon-doc-text"/> Carta</a>
          <a href="#"><i className="icon-bullhorn"/> Promociones</a>
          <a href="#"><i className="icon-contacts"/> Contacto</a>
          <a href="#"><i className="icon-basket carrito"/> Carrito <sup className="badge">&nbsp; 8 &nbsp;</sup>
           <div id="myDropdown" className="dropdown-content dropdownclose">
            <ItemCart description="Producto1" amount="3" img="https://placehold.it/50x50"></ItemCart>
          </div>
          </a>
        </nav>
      </div>
    </header>
  )
}
export default Header;