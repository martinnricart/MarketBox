const Item = ({id,nombre,imagen,precio,stock}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="itemImagen"/>
            </picture>
            <section>
                <p className="infoStock">
                    Stock Disponible: {stock}
                </p>
                <p className="infoPrecio">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="itemFooter">
                <button className="itemDetalle"> Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item