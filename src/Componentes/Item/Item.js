import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"

const Item = ({id,nombre,imagen,precio,stock,descripcion,categoria}) =>{
    return(
        <div className="card">
        <div className="card-header">{nombre}</div>
        <img src={imagen} alt={nombre} className="card-img-top" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{descripcion}</li>
          <li className="list-group-item">Precio: ${precio.toLocaleString()}</li>
          <Link to={`/item/${id}`} className="btnVerDetalle">Ver Detalle</Link>
        </ul>
        
      </div>
    )
}

export default Item


{/* <ItemCount initial={1} stock={stock} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}/></footer> */}