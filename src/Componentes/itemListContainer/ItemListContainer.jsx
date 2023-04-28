import { useState, useEffect } from "react"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ bienvenida }) => {
    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect(() => {
        getProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    
    return(
        <div className="card">
             <img src="" className="card-img-top" alt=""></img>
        <div className="card-body" >{<ItemList productos={productos}/>}
          <p className="card-text"></p>
        </div>
      </div>
    ) 
}

export default ItemListContainer
