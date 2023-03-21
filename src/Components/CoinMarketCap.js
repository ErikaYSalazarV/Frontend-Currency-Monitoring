import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);
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
    const prices = [BNB.quote.USD.price,BTC.quote.USD.price, ETH.quote.USD.price,USDT.quote.USD.price]
    return (
      <div className='barChart'>
      <h1>Crypto Prices</h1>
      <Bar
        data={{
          labels: ["Binance Coin", "Bitcoin", "Ethereum", "Tether"],
          datasets: [
            {
              label: "Price in USD",
              data: Object.values(prices),
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              pointBackgroundColor: "rgba(75,192,192,1)",
              pointBorderColor: "#fff",
              pointBorderWidth: 1,
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(75,192,192,1)",
              pointHoverBorderWidth: 2,
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: "Precios de criptomonedas en USD",
          },
          scales: {
            y:
              {
                ticks: {
                  beginAtZero: true,
                },
              },
          },
        }}
      />
    </div>
    );
  }
}

export default CoinMarketCap
