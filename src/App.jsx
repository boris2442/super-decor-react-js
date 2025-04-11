
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Avis from './pages/Avis';
// autres imports...

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* Ici ton header, navbar ou autre */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/avis' element={<Avis/>}/>
        {/* autres routes */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
