import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, imagen, categoria, descripcion, precio, stock}) =>{
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
                    <p className="infoCategoria">
                        Categoria: {categoria}
                    </p>
                    <p className="infoDescripcion">
                        {descripcion}
                    </p>
                </section>
                <footer className="itemFooter">
                    <ItemCount initial={1} stock={stock} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}/>
                </footer>
            </article>
        )
    }

export default ItemDetail