import React from 'react';

class CoinMarketCap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/v3/coins', {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          data: null,
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.data) {
      return null;
    }

    const { BNB, BTC, ETH, USDT } = this.state.data.data;

    return (
      <div>
        <h1>Datos de Coin Market Cap</h1>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{BNB.symbol}</td>
              <td>{BNB.quote.USD.price}</td>
            </tr>
            <tr>
              <td>{BTC.symbol}</td>
              <td>{BTC.quote.USD.price}</td>
            </tr>
            <tr>
              <td>{ETH.symbol}</td>
              <td>{ETH.quote.USD.price}</td>
            </tr>
            <tr>
              <td>{USDT.symbol}</td>
              <td>{USDT.quote.USD.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoinMarketCap
