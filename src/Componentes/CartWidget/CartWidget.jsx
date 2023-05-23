import { useContext } from 'react'
import carrito from './assets/carrito.png'
import './carrito.css'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext);
    
    return(
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='carrito' src={carrito} alt='carrito'></img>
            <h3 className='totalProductos'>{totalQuantity}</h3>
        </Link>
    )
}

export default CartWidget
