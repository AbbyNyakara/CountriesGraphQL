import React from 'react';
import Countries from './pages/Countries.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Navbar />
      <Countries />
    </div>
  )
}

export default App
