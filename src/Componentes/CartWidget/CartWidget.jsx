import carrito from './assets/carrito.png'
import './carrito.css'

const CartWidget = () =>{
    return(
        
        <div class="cantidadCarrito"> 
            <img src={carrito} alt="carrito"/> 0 productos          
        </div>
    )
}

export default CartWidget