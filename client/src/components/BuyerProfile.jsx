import React, { useState } from 'react';
import axios from 'axios';

function BuyerProfile() {
  const [profile, setProfile] = useState({ name: '', email: '' });

  const fetchProfile = async () => {
    // Fetch profile data from the backend
    const response = await axios.get('/api/buyer-profile');
    setProfile(response.data);
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Buyer Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Add more profile fields as needed */}
    </div>
  );
}

export default BuyerProfile;
