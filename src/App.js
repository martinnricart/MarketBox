import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import ItemListContainer from './Componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './Componentes/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <p></p>
      <ItemListContainer bienvenida={'¡Bienvenido a MarketBox!'} />
      
      <button type="button">Sin Bootstrap</button>
      <button type="button" className="btn btn-primary">Con Bootstrap</button>
    
    </div>
  );
}

export default App;

