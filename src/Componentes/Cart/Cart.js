import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart=() =>{
    const{ cart, clearCart, totalQuantity, precioTotal} = useContext(CartContext)
    console.log(cart)
    if (totalQuantity === 0 ){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${precioTotal}</h3>
            <h3>Cantidad: {totalQuantity}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to= '/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart