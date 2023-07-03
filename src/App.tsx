import './App.css';

import { Game } from './game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Board Game</h1>
      </header>

      <body className="App-body">
        <Game width={15} height={8} />
      </body>

      <footer className="App-footer">
        <span className="footer-span">Copyright @PLR</span>
      </footer>
    </div>
  );
}

export default App;
