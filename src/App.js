import React from 'react';
import './App.css';
import WertNFTWidget from './components/WertNFTWidget';

const App = () => {
  const apiKey = 'your-wert-api-key';

  return (
    <div className="App">
      <h1>Wert NFT Module Widget</h1>
      <WertNFTWidget apiKey={apiKey} />
    </div>
  );
};

export default App;
