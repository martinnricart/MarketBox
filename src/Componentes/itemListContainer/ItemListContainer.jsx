import { useState, useEffect } from "react"
import { getProductos, getProductosByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ bienvenida }) =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(()=>{
            setLoading(true)

            const collectionRef = categoryId ? query(collection(db,'productos'), where('category','==', categoryId))
            : collection(db, 'productos')
            
            getDocs(collectionRef)
                .then(response=> {
                    const productsAdapted = response.docs.map(doc =>{
                        const data = doc.data()
                        return {id: doc.id, ...data}
                    })
                    setProductos(productsAdapted)
                })
                .catch(error =>{
                    console.log(error)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }, [categoryId])
        return(
            <div>
                {bienvenida}
                 {productos.map(p=> <ItemList key={productos.id}productos={productos}/>)}
             </div>
        )
}


export default ItemListContainer



/* TRAER PRODUCTOS DE productos.json

const ItemListContainer = ({ bienvenida }) => {
    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    return(
            <div>
                {bienvenida}
                 {<ItemList productos={productos}/>}
             </div>
        )
}
*/
