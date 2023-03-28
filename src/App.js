import React from 'react';
import CoinMarketCap from './Components/CoinmarketCap/CoinMarketCap';
import Stocks from './Components/CoinmarketCap/Stocks';
import "./CSS/CoinMarketCap.css"
function App() {
  return (
    <div>
      <CoinMarketCap/>
      <Stocks />
      
    </div>
  );
}

export default App;

