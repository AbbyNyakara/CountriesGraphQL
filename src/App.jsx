import React from 'react';
import Countries from './pages/Countries.jsx';
import Navbar from './components/Navbar.jsx';
import Country from './pages/Country.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:code" element={<Country />} />
      </Routes>
    </Router>
      
    </div>
  )
};

export default App;
