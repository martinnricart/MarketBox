import { addDoc, collection, getFirestore, updateDoc } from "firebase/firestore"

export const createOrder = async ([{nombre, precio, total, id, count, stock, telefono, email}]) => {
    const order = {
        buyer: {nombre: nombre, telefono: telefono, email: email },
        items: [{nombre: nombre, precio: precio}],
        total: total,
    };

    const db = getFirestore();
    const orderCollection = collection(db,"orders");
    

    order.items.map(()=>{
        const stockFinal= stock - count;
        updateStockItems(item.id, stockFinal)
    });

    addDoc(orderCollection, order).then(({ id })=>{
        return id;
    });
};


export const updateStockItems = async (id, stock) =>{
    const db = getFirestore();
    const orderDoc = doc (db,"items", id);
    updateDoc(orderDoc, { stock: stock }).then((result) =>{
        console.log(result)
    });
};



export const updateOrder = async () =>{
    const db = getFirestore
    const orderDoc = doc(db, "orders")
    updateDoc(orderDoc).then((result) =>{
        console.log(result)

    })
}
