import logo from './logo.svg';
import './App.css';
import { Search } from './search/search.component';
import { BattleCard } from './battleCard/BattleCard';

function App() {
  return (
    <div className="App">
      <Search/>
      <BattleCard/>
    </div>
  );
}

export default App;
