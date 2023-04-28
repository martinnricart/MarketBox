import { useState } from "react";
import './ItemCount.css'

const ItemCount=({stock, initial, onAdd}) =>{
    const[cantidad, setCantidad] = useState(initial)

    const sumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const restar = () => {
        if (cantidad > 1){
            setCantidad(cantidad-1)
        }
    }

 return(
    <div className="contador">
        <div className="controles">
            <button className="btnSumar" onClick={sumar}>+</button>
            <h4 className="numero">{cantidad}</h4>
            <button className="btnRestar" onClick={restar}>-</button>
        </div>
        <div>
            <button className="btnAgregar" onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito </button>
        </div>
     </div>   
 )   
}


export default ItemCount