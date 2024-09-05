import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FarmerProfile from './components/FarmerProfile';
import BuyerProfile from './components/BuyerProfile';
import Contracts from './components/Contracts';
import Messages from './components/Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
