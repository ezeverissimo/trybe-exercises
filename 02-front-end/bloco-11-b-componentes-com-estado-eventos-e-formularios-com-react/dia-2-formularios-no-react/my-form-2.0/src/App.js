import Pessoal from './components/Pessoal';
import Profissional from './components/Profissional';
import './App.css';

function App() {
  return (
    <form>
      <Pessoal />
      <Profissional />
      <button>Monta Div</button>
      <button>Limpa Tudo</button>
    </form>
  );
}

export default App;
