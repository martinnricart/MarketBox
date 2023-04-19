import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import ItemListContainer from './Componentes/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <p></p>
     
      <ItemListContainer bienvenida={'¡Bienvenido a MarketBox!'}/>
      
    </div>
  );
}

export default App;

