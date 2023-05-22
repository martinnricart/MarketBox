import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/navBar";
import ItemListContainer from "./Componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./Componentes/ItemCount/ItemCount";
import Item from "./Componentes/Item/Item";
import { CartProvider } from "./context/cartContext";
import Cart from "./Componentes/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <p></p>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>Esta pagina no existe</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
