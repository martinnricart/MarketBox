import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/navBar";
import ItemListContainer from "./Componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import Cart from "./Componentes/Cart/Cart";
import { useEffect, useState } from "react";
import { getCollection } from "./utils/getFirestore";
import Checkout from "./Componentes/Checkout/checkout";


function App() {
   const [items, setItems] = useState()

   useEffect( ()=> {
    getCollection("items").then((result)=>{
      setItems(result);
    });
  },[]);

  console.log(items)
   
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider >
          <NavBar  />
          <p></p>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Esta pagina no existe</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;




//   useEffect(() =>{
//     const db = getFirestore(); //Conexion hacia la base de datos
  
//     const categoryRef = doc (db, "items","UJ7oMnctEtXYBkBovpKC"); // Doc nos conecta a la collecion y nos trae el item con el id que se paso por parametro
//     getDoc(categoryRef).then((snapshot)=>{ // se consulta a la base de datos la coleccion y el documento (item)
//       if(snapshot.exists()){
//         setItems({id: snapshot.id, ...snapshot.data() });
//       }
//     });
//   }, []);
//   console.log(items);