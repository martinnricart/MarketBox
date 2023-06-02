import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import { BarLoader } from 'react-spinners';

const ItemListContainer = ({ bienvenida }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(
                  collection(db, "items"),
                  where("categoria", "==", categoryId)
              )
            : collection(db, "items");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);
    return productos.length > 0 ? (
        <ItemList productos={productos}/>
        ) : (
            <BarLoader className="spinner" color="#000000" size={50}/>
          );
    };

export default ItemListContainer;





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
