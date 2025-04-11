
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
// autres imports...

function App() {
  return (
    <div className="App">
      <Navigation/> 
      {/* Ici ton header, navbar ou autre */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
  
        {/* autres routes */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
