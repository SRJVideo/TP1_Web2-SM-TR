import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import MonCarousel from './components/MonCarousel';
import Tableau from './components/Tableau';
import Calendrier from './components/Calendrier';
import Convertisseur from "./components/convertisseur/Convertisseur";
import Crypto from './components/Crypto';
import Fibonacci from "./components/Fibonacci/Fibonacci";
import FibonacciWW from './components/FibonacciWebWorkers';
import { Container } from 'react-bootstrap';




function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Container className='navBar'>

            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/carousel" element={<MonCarousel />} />
              <Route path="/tableau" element={<Tableau />} />
              <Route path="/calendrier" element={<Calendrier />} />
              <Route path="/convertisseur" element={<Convertisseur />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/fibonacci" element={<Fibonacci />} />
              <Route path="/fibonacciww" element={<FibonacciWW />} />
            </Routes>
          </Container>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;