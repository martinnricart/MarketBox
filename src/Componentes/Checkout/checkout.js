import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, query, where, collection, addDoc, documentId, writeBatch, Timestamp} from 'firebase/firestore'
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import './checkout.css'
import { ClockLoader } from 'react-spinners';




const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    
    const { cart, precioTotal, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, email, confirmEmail}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    nombre, telefono, email, confirmEmail
                },
                items: cart,
                total: precioTotal(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'items')

            const productsAddesFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddesFromFirestore

            docs.forEach(doc =>{
                const dataDoc =  doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection (db, 'orders')
                
                const orderAdded = await addDoc(orderRef, objOrder)
                
                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error('Hay productos que estan fuera de stock :/')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
                
}

if (loading) {
    return (
      <div className="spinner-container"> Se esta generando su orden.. 
        <ClockLoader color="#FFBE57" size={50} />
      </div>
    );
  }

if(orderId){
    return <h3 className="confirmacion">Se envio un Email con la confirmacion de la compra ✓. 
        <p></p>
        <h2 className="orden">El id de su orden es: {orderId}.</h2>
        <p></p>
        <h3 className="gracias">¡Gracias por tu compra!</h3>
        <p></p>
        
    <Link to ='/' className='botonTienda'>Volver a la tienda </Link>
    </h3>
}

return(
    <div>
        <h1 className="checkout">Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
)
}

export default Checkout