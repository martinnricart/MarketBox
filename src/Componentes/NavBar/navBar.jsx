import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
const NavBar = () => {
    return(
        <nav>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid" style={{backgroundColor: 'rgb(24, 24, 24)'}}>
    <img src={logo} alt="logo"/> 
    <a class="navbar-brand" href="."  >MarketBox</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href=".">Herramientas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Electronica</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Vestimenta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Vehiculos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Electrodomesticos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=".">Jardineria</a>
        </li>
      </ul>
      <div class="carrito"><CartWidget/>
      </div>
    </div>
  </div>
</nav>
        </nav>
    )
}

export default NavBar