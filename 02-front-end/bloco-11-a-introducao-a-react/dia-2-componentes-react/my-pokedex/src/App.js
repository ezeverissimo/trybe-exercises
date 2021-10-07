import './App.css';
import Pokemon from './Pokemon.js'
import pokemons from './data.js';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <main className="App">
        <Pokemon data={pokemons}/>
      </main>
    </div>
  );
}

export default App;
