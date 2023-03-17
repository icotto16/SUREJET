import React from 'react';
import JetList from '../components/JetList';
import JetBookingForm from '../components/JetBookingForm';

const HomePage = () => {
  return (
    <div>
      <h1>Private Jet Booking Service</h1>
      <div>
        <h2>Available Jets</h2>
        <JetList />
      </div>
      <div>
        <h2>Book a Jet</h2>
        <JetBookingForm />
      </div>
    </div>
  );
};

export default HomePage;
