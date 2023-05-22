


const CartItem = ({id,nombre,imagen,precio,stock,descripcion,categoria}) =>{
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        width: '100%',
      }}
    >
        <div className="card">
        <div className="card-header">
          {nombre}
        </div>
        <img src={imagen} alt={nombre} className="card-img-top" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: ${precio}</li>
          <li className="list-group-item"> Descripcion:{descripcion}</li>
        </ul>
        <div className="card-body">
        </div>
        </div>
      </div>
    )
}

export default CartItem