import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart=() =>{
    const{ cart, clearCart, totalQuantity, precioTotal, removeItem} = useContext(CartContext)
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
            { cart.map (p=>{return(<div> <CartItem key={p.id} {...p}/><button onClick={()=> removeItem (p.id)} className="eliminarProducto">X</button></div>)})}
            <h3>Total: ${precioTotal}</h3>
            <h3>Cantidad total de productos: {totalQuantity}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <p></p>
            <Link to= '/checkout' className="btnCheckout">Checkout</Link>
        </div>
    )
}

export default Cart