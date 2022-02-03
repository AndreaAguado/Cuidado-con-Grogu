import '../styles/App.scss';
import Game from './Game';
import Pieces from './Pieces';
import Rules from './Rules';

import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
        <Route path="/pieces" element={<Pieces />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
