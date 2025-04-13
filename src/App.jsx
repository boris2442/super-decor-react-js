
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
import Legale from './pages/Legale';
import Confidentialite from './pages/Confidentialite';
import CGVSection from './pages/CGVSection';
import Remboursement from './pages/Remboursement';
import SeePlusHotel from './pages/SeePlusHotel';
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
        <Route path='/legale' element={<Legale/>}/>
        <Route path='/confidentialite' element={<Confidentialite/>}/>
        <Route path='/cgv' element={<CGVSection/>}/>
        < Route path='remboursement-condition' element={<Remboursement/>}/>
        <Route path='Services/SeePlusHotel' element={<SeePlusHotel/>}/>
        {/* <Route path='/SeePlusCouverts' element={<Services/>}/>
        <Route path='/SeePlusChaises' element={<Services/>}/>
        <Route path='/SeePlusDecoration' element={<Services/>}/>
        <Route path='/SeePlusBaches' element={<Services/>}/>
        <Route path='/SeePlusCuisson' element={<Services/>}/>
        <Route path='/SeePlusSalleMortuaire' element={<Services/>}/>
        <Route path='/SeePlusGenerateur' element={<Services/>}/>
        <Route path='/SeePlusServicesTraiteur' element={<Services/>}/>
        <Route path='/SeePlusMarmites' element={<Services/>}/>
        <Route path='/SeePlusSonnorisation' element={<Services/>}/>
        <Route path='/SeePlusLivraisonEau' element={<Services/>}/> */}
    

        {/* autres routes */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
