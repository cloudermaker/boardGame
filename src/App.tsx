import './App.css';

import { Game } from './game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Board Game</h1>
      </header>

      <div className="App-body">
        <Game />
      </div>

      <footer className="App-footer">
        <span className="footer-span">Copyright @PLR</span>
      </footer>
    </div>
  );
}

export default App;
