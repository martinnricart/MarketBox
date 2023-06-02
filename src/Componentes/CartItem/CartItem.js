import "./CartItem.css";

const CartItem = ({id,nombre,imagen,precio,stock,descripcion,categoria,quantity,}) => {
  return (
    <div
      style={{
        overflow: "auto",
        float: " inline-start",
        width: "50%",
        boxSizing: "border-box",
        padding: "20px",
      }}
    >
      <div class="card mb-3" className="resumenCarrito">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={imagen} class="card-img" alt={nombre} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><span className="subrayado">{nombre}</span></h5>
              <p class="card-text">{descripcion}</p>
              <p class="card-text">
                <small class="text-muted">${precio.toLocaleString()}</small>
              </p>
            </div>
            <p>Cantidad: {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
