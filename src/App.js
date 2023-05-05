import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import ItemListContainer from './Componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './Componentes/ItemCount/ItemCount';
import Item from './Componentes/Item/Item';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <p></p>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId " element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Esta pagina no existe</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

