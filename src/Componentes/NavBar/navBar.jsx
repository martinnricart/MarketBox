import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {
  return(
      <nav>
<nav className="navbar navbar-expand-lg">
<div className="container-fluid" style={{backgroundColor:'rgb(24,24,24'}}>
  <img src={logo} alt="logo"/> 
  <NavLink to={`/`} className="navbar-brand"> MarketBox</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={`/category/Herramientas`} className="nav-link"> Herramientas</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={`/category/Electronica`} className="nav-link"> Electronica</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={`/category/Jardineria`} className="nav-link"> Jardineria</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={`/category/Electrodomesticos`} className="nav-link"> Electrodomesticos</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={`/category/Vestimenta`} className="nav-link"> Vestimenta</NavLink>
      </li>
      <li clasName="nav-item">
      <NavLink to={`/category/Vehiculos`} className="nav-link"> Vehiculos</NavLink>
      </li>
    </ul>
    <div className="carrito"><CartWidget/>
    </div>
  </div>
</div>
</nav>
      </nav>
  )
}

export default NavBar