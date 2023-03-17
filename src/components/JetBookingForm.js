import React, { useState } from 'react';
import {
  getJetCharterL2Instance,
  getWireTransferTokenL2Instance,
  getL2GatewayInstance,
  getSigner,
  toWei,
} from './contracts';
import WertWidgetInitializer from '@wert-io/widget-initializer';

const JetBookingForm = ({ jets }) => {
  const [selectedJet, setSelectedJet] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJet) return;

    const jet = jets.find((j) => j.id === parseInt(selectedJet));
    if (!jet) return;

    const wertWidget = WertWidgetInitializer();
    const paymentData = {
      amount: jet.price, // Set the amount to the jet price
      currency: 'USD', // Set the currency
      // ... any other payment data properties
    };

    // Launch the Wert.io payment widget
    const paymentResult = await wertWidget.launch(paymentData);

    if (paymentResult && paymentResult.status === 'success') {
      const signer = await getSigner();
      const wireTransferTokenL2Instance = await getWireTransferTokenL2Instance();
      const l2GatewayInstance = await getL2GatewayInstance();

      // Approve L2 Gateway to transfer tokens for the booking
      const approvalAmount = toWei(jet.price);
      await wireTransferTokenL2Instance.connect(signer).approve(l2GatewayInstance.address, approvalAmount);

      // Initiate the withdrawal for the booking
      await l2GatewayInstance.connect(signer).initiateWithdrawal(approvalAmount);
    } else {
      console.error('Payment failed');
    }
  };

  return (
    <div>
      <h3>Book a Jet</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jet">Select a Jet:</label>
        <select id="jet" onChange={(e) => setSelectedJet(e.target.value)}>
          <option value="">--Please choose a jet--</option>
          {jets.map((jet) => (
            <option key={jet.id} value={jet.id}>
              {jet.name} - ${jet.price}
            </option>
          ))}
        </select>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default JetBookingForm;
