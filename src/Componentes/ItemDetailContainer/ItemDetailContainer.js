import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductosById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'



const ItemDetailContainer = () =>{
    const[ producto, setProducto] = useState(null)
    const[ loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProducto(productAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[itemId])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...producto} />
        </div>
    )
}



export default ItemDetailContainer



/* DETALLE DE CADA PRODUCTO DE productos.json


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})

    const {itemId} = useParams()

    useEffect(() => {
        getProductosById(itemId)
            .then(response=>{
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])
    
    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...productos} />
        </div>
    )
}
*/