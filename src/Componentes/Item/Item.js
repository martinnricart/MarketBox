import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id,nombre,imagen,precio,stock,descripcion,categoria}) =>{
    return(
        <div className="card">
        <div className="card-header">
          {nombre}
        </div>
        <img src={imagen} alt={nombre} className="card-img-top" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Stock Disponible: {stock}</li>
          <li className="list-group-item">Precio: ${precio}</li>
          <li className="list-group-item">{descripcion}</li>
          <li className="list-group-item">Categoria: {categoria}</li>
        </ul>
        <div className="card-body">
        </div>
        <footer>
        <Link to={`/item/${id}`} className="btn btn-warning">Ver Detalle</Link>
        </footer>
      </div>
    )
}

export default Item


{/* <ItemCount initial={1} stock={stock} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}/></footer> */}