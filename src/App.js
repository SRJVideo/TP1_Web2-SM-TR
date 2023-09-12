import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Carousel from './components/Carousel';
import Tableau from './components/Tableau';
import Calendrier from './components/Calendrier';
import Convertisseur from './components/Convertisseur';
import Crypto from './components/Crypto';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/about" element={<Carousel />} />
              <Route path="/contact" element={<Tableau />} />
              <Route path="/contact" element={<Calendrier />} />
              <Route path="/contact" element={<Convertisseur />} />
              <Route path="/contact" element={<Crypto />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;