import { getFirestore, doc, getDoc, collection, getDocs } from  "firebase/firestore"



export const getCollection = async (collections) =>{
    const db = getFirestore();
    const itemsCollection = collection(db, collections);
    const result = await getDocs (itemsCollection);
    return result.docs.map((doc) => ({id: doc.id, ...doc.data() }))
    
};
