function Header() {

    return (
        <header>
          <div className="contenedor" >
            <h1><i className="icon-food"/>Sazón cafetero</h1>
            <label className="icon-menu">
              <input type="checkbox" className="menu-bar" />
            </label>
            <nav className="menu">
              <a href="#"><i className="icon-home"/> Inicio</a>
              <a href="#"><i className="icon-doc-text"/> Carta</a>
              <a href="#"><i className="icon-bullhorn"/> Promociones</a>
              <a href="#"><i className="icon-contacts"/> Contacto</a>
              <a href="#"><i className="icon-basket"/> Carrito</a>
            </nav>
          </div>
      </header>
    )
}
export default Header;