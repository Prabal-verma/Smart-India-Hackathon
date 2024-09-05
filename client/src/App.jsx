// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import FarmerProfile from './components/FarmerProfile'; // Add these imports
import BuyerProfile from './components/BuyerProfile';
import Contracts from './components/Contracts';
import Messages from './components/Messages';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
