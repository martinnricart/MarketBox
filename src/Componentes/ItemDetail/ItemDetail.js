import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/cartContext";


const ItemDetail = ({id,nombre,imagen,categoria,descripcion,precio,stock,}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  const { addItem } = useContext(CartContext)


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {id, nombre, precio, imagen, descripcion}

    addItem(item, quantity)
  };


  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="img"/>
      <div className="card-body">
        <p className="infoStock">Stock Disponible: {stock}</p>
        <p className="infoPrecio">Precio: ${precio}</p>
        <p className="infoCategoria">Categoria: {categoria}</p>
        <p className="infoDescripcion">{descripcion}</p>
      </div>
      <footer className="ItemFooter">
        {
          quantityAdded > 0 ? (
              <Link to ='/cart' className='terminarCompra'>Terminar Compra</Link>
          ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
      )
      }
      </footer>
    </div>
  );
};

export default ItemDetail;
