import React from 'react';
import CoinMarketCap from './CoinMarketCap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
        {/* Barra de Navegación*/}
        <Router>
          <nav id='menu' style={{ scrollBehavior: 'smooth' }}>
              <h4 alt='logo' class='logo'>CMA</h4>
              <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#crypto'>Cryptocurrencies</a></li>
                <li><a href='#NASDAQ'>Currencies from NASDAQ</a></li>
              </ul>
          </nav>
        </Router>
        {/* Seccion Home*/}
        <section id="home">
        <div className='background'>
            <div className='container'>
            <div className='titles'>
                <h1>
                    CURRENCY<br/>
                    MONITORING<br/>
                    APP
                </h1>
                <h2>
                This is an application that monitors the value of some <br/> 
                currencies from NASDAQ and cryptocurrencies
                </h2>
            </div>
            <div className='image'>
                <img src={require('./investment.png')} width="300" height="300" />
            </div>
        </div>
        </div>
        {/* Seccion Cryptos*/}
        </section>
        <section id="crypto">
        <h1 style={{ textAlign: 'center' }}>Cryptocurrencies</h1>
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', padding: '10px' }}>
            <CoinMarketCap/>
            </div>
            <div style={{ width: '50%', padding: '10px' }}>
            <CoinMarketCap/>
            </div>
        </div>
        </section>
        {/* Seccion Stock */}
        <section id="NASDAQ">
        <h1 style={{ textAlign: 'center' }}>Currencies from NASDAQ</h1>
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', padding: '10px' }}>
            <CoinMarketCap/>
            </div>
            <div style={{ width: '50%', padding: '10px' }}>
            <CoinMarketCap/>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Homepage;
