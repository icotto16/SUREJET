import React, { useState, useEffect } from 'react';
import { getJetCharterL2Instance, toEther } from './contracts';

const JetList = () => {
  const [jets, setJets] = useState([]);

  useEffect(() => {
    const fetchJetData = async () => {
      const jetCharterL2Instance = await getJetCharterL2Instance();
      const totalJets = await jetCharterL2Instance.totalSupply();

      let jetList = [];
      for (let i = 1; i <= totalJets; i++) {
        const charterData = await jetCharterL2Instance.charterData(i);
        jetList.push({
          id: i,
          ...charterData,
          price: toEther(charterData.price),
        });
      }
      setJets(jetList);
    };

    fetchJetData();
  }, []);

  return (
    <div>
      <h3>Available Jets</h3>
      <ul>
        {jets.map((jet) => (
          <li key={jet.id}>
            {jet.departureLocation} - {jet.arrivalLocation} - {jet.departureTime} - {jet.price} ETH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JetList;
