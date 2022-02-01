import '../styles/App.scss';
import Game from './Game';
import Pieces from './Pieces';
import Rules from './Rules';

import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        Cuidado con Grogu!
        <nav>
          <ul>
            <li>
              <Link to="/rules">Reglas del juego</Link>
            </li>
            <li>
              <Link to="/pieces">Fichas</Link>
            </li>
            <li>
              <Link to="/game">Juego</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/* <Route path="/" element={<div>Hola</div>}> */}
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
        <Route path="/pieces" element={<Pieces />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
