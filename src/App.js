import logo from './logo.svg';
import './App.css';
import Banner from './composants/Banner';
import Cart from './composants/Cart';
import ShoppingList from './composants/ShoppingList';
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <p> bonjour c'est firas </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
    <Banner /> <Cart /> <ShoppingList />
    </div>
  );
}

export default App;
