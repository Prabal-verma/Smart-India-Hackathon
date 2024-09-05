import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Contract Farming Platform</h1>
      <nav>
        <ul>
          <li><Link to="/farmer-profile">Farmer Profile</Link></li>
          <li><Link to="/buyer-profile">Buyer Profile</Link></li>
          <li><Link to="/contracts">Contracts</Link></li>
          <li><Link to="/messages">Messages</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
