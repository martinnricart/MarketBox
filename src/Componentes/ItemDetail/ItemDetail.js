import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,nombre,imagen,categoria,descripcion,precio,stock,}) => {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" />
      <div className="card-body">
      <p className="infoStock">
                        Stock Disponible: {stock}
                    </p>
                    <p className="infoPrecio">
                        Precio: ${precio}
                    </p>
                    <p className="infoCategoria">
                        Categoria: {categoria}
                    </p>
                    <p className="infoDescripcion">
                        {descripcion}
                    </p>
        <p className="card-text">
        </p>
      </div>
      <ItemCount initial={1} stock={stock} onAdd={(cantidad) =>console.log('Cantidad agregada: ',cantidad)}/>
    </div>
  );
};

export default ItemDetail;
