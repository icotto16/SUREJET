import React, { useState, useEffect } from 'react';

const JetList = () => {
  const [jets, setJets] = useState([]);

  useEffect(() => {
    // Fetch jet data from your smart contract and set the jets state
    // You'll need to use web3.js or ethers.js to interact with your smart contracts
  }, []);

  return (
    <div>
      <h3>Available Jets</h3>
      <ul>
        {jets.map((jet, index) => (
          <li key={index}>
            {jet.name} - {jet.capacity} passengers - ${jet.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JetList;
