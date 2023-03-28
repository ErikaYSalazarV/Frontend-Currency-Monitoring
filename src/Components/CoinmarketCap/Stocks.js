import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Stockschart } from './Stockschart';

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
    fetch('http://127.0.0.1:5000/v1/stocks', {
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
    const Microsoft = []
    const AMD = []
    const Google = []
    const Apple = []

    const allMicrosoftdata = []
    const allAMDdata = []
    const allGoogledata = []
    const allAppledata = []

    const time = []

    console.log(this.state.data)
    for(var i=0; i< this.state.data.length; i++){
      Microsoft.push(this.state.data[i].Microsoft.price)
      AMD.push(this.state.data[i].AMD.price)
      Google.push(this.state.data[i].Google.price)
      Apple.push(this.state.data[i].Apple.price)
      if(this.state.data[i].datetime !== null){
        var timest = new Date(this.state.data[i].datetime).toLocaleString(
            "en-US",
              {
                day: "2-digit",
                year: "numeric",
                month: "2-digit"
              }
            )
      }
      else{
        var timest = new Date(this.state.data[i].Microsoft.datetime).toLocaleString(
            "en-US",
              {
                day: "2-digit",
                year: "numeric",
                month: "2-digit"
              }
            )
      }
      
      time.push(timest)
      allMicrosoftdata.push({"timestamp":timest,"data":this.state.data[i].Microsoft});
      allAMDdata.push({"timestamp":timest,"data":this.state.data[i].AMD});
      allGoogledata.push({"timestamp":timest,"data":this.state.data[i].Google});
      allAppledata.push({"timestamp":timest,"data":this.state.data[i].Apple});
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
        <Stockschart allData={allMicrosoftdata} data={Microsoft} time={time} dates={removeDuplicates(time)} name="Microsoft"></Stockschart>
        </Carousel.Item>
        <Carousel.Item>
        <Stockschart allData={allAMDdata} data={AMD} time={time} name="AMD"  dates={removeDuplicates(time)}></Stockschart>
        </Carousel.Item>
        <Carousel.Item>
        <Stockschart allData={allGoogledata} data={Google} time={time} name= "Google" dates={removeDuplicates(time)}></Stockschart>
        </Carousel.Item>
        <Carousel.Item>
        <Stockschart allData={allAppledata} data={Apple} time={time} name="Apple" dates={removeDuplicates(time)}></Stockschart>
        </Carousel.Item>
      </Carousel>
    </div>
    
    );
  }
}

export default CoinMarketCap
