import herramientas from './herramientas.json'
import React, { useEffect, useState } from 'react'

const Galeria = () => {
    const [herramientas] = useState([])

    useEffect(() => {
        fetch(herramientas)
            .then(response => response.json())
            .catch(error => console.error(error));
    }
    )
    
    return(
        <div>
            <h1>{herramientas}</h1>
        </div>
    ) 
}

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(herramientas)
        }, 500)
    })
}



export const getProductosById = (productosId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(herramientas.find(prod=> prod.id === productosId))
        },500 )
    })
}