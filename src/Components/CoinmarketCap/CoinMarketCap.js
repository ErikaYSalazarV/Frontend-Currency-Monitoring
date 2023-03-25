import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { CryptoChart } from './CryptoChart';

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
    function removeDuplicates(arr) {
      return arr.filter((item,
          index) => arr.indexOf(item) === index);
    }
    //console.log(this.state.data)
    const BNB = []
    const BTC = []
    const ETH = []
    const USDT = []

    const allBNBdata = []
    const allBTCdata = []
    const allETHdata = []
    const allUSDTdata = []

    const time = []
    for(var i=0; i< this.state.data.length; i++){
      BNB.push(this.state.data[i].data.BNB.quote.USD.price)
      BTC.push(this.state.data[i].data.BTC.quote.USD.price)
      ETH.push(this.state.data[i].data.ETH.quote.USD.price)
      USDT.push(this.state.data[i].data.USDT.quote.USD.price)
      var timest = new Date(this.state.data[i].timestamp).toLocaleString(
        "en-US",
          {
            day: "2-digit",
            year: "numeric",
            month: "2-digit"
          }
        )
      time.push(timest)
      allBNBdata.push({"timestamp":timest,"data":this.state.data[i].data.BNB});
      allBTCdata.push({"timestamp":timest,"data":this.state.data[i].data.BTC});
      allETHdata.push({"timestamp":timest,"data":this.state.data[i].data.ETH});
      allUSDTdata.push({"timestamp":timest,"data":this.state.data[i].data.USDT});
    }
    console.log(removeDuplicates(time))
    return (
      /*<div className='cryptos'>
        <CryptoChart allData={allBNBdata} data={BNB} time={time} dates={removeDuplicates(time)} name="Binance Coin"></CryptoChart>
        <CryptoChart allData={allBTCdata} data={BTC} time={time} name="Bitcoin"  dates={removeDuplicates(time)}></CryptoChart>
        <CryptoChart allData={allETHdata} data={ETH} time={time} name= "Ethereum" dates={removeDuplicates(time)}></CryptoChart>
        <CryptoChart allData={allUSDTdata} data={USDT} time={time} name="Tether" dates={removeDuplicates(time)}></CryptoChart>
      </div>*/
    <div className='cryptos'>
      <Carousel variant='dark' wrap='false' slide='false' interval={null}>
        <Carousel.Item>
        <CryptoChart allData={allBNBdata} data={BNB} time={time} dates={removeDuplicates(time)} name="Binance Coin"></CryptoChart>
        </Carousel.Item>
        <Carousel.Item>
        <CryptoChart allData={allBTCdata} data={BTC} time={time} name="Bitcoin"  dates={removeDuplicates(time)}></CryptoChart>
        </Carousel.Item>
        <Carousel.Item>
        <CryptoChart allData={allETHdata} data={ETH} time={time} name= "Ethereum" dates={removeDuplicates(time)}></CryptoChart>
        </Carousel.Item>
        <Carousel.Item>
        <CryptoChart allData={allUSDTdata} data={USDT} time={time} name="Tether" dates={removeDuplicates(time)}></CryptoChart>
        </Carousel.Item>
      </Carousel>
    </div>
    
    );
  }
}

export default CoinMarketCap
