import React, { useState } from 'react';
import {
  getJetCharterL2Instance,
  getWireTransferTokenL2Instance,
  getL2GatewayInstance,
  getSigner,
  toWei,
} from './contracts';

const JetBookingForm = ({ jets }) => {
  const [selectedJet, setSelectedJet] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJet) return;

    const jet = jets.find((j) => j.id === parseInt(selectedJet));
    if (!jet) return;

    const signer = await getSigner();
    const wireTransferTokenL2Instance = await getWireTransferTokenL2Instance();
    const l2GatewayInstance = await getL2GatewayInstance();

    // Approve L2 Gateway to transfer tokens for the booking
    const approvalAmount = toWei(jet.price);
    await wireTransferTokenL2Instance.connect(signer).approve(l2GatewayInstance.address, approvalAmount);

    // Initiate the withdrawal for the booking
    await l2GatewayInstance.connect(signer).initiateWithdrawal(approvalAmount);
  };

  return (
    <div>
      <h3>Book a Jet</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jet">Select a Jet:</label>
        <select id="jet" onChange={(e) => setSelectedJet(e.target.value)}>
          <option value="">--Please choose a
