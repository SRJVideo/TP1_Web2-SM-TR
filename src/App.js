import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Carousel from './components/Carousel';
import Tableau from './components/Tableau';
import Calendrier from './components/Calendrier';
import Convertisseur from './components/Convertisseur';
import Crypto from './components/Crypto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/about" element={<Carousel />} />
            <Route path="/tableau" element={<Tableau />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/convertisseur" element={<Convertisseur />} />
            <Route path="/crypto" element={<Crypto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;