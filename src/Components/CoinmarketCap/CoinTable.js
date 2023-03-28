import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

function CoinTable(props) {
    var {allBNB,allBTC,allETH,allUSDT} = props
    allBNB = allBNB.slice(allBNB.length-6,allBNB.length-1);
    allBTC = allBTC.slice(allBTC.length-6,allBTC.length-1);
    allETH = allETH.slice(allETH.length-6,allETH.length-1);
    allUSDT = allUSDT.slice(allUSDT.length-6,allUSDT.length-1);
    var arraWithAllData = []
    for(var i=0;i<5;i++){
        arraWithAllData.push([Math.round(allBNB[i].data.quote.USD.price),Math.round(allBTC[i].data.quote.USD.price),Math.round(allETH[i].data.quote.USD.price),Math.round(allUSDT[i].data.quote.USD.price)]);
    }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Binance Coin</th>
          <th>Bitcoin</th>
          <th>Ethereum</th>
          <th>Tether</th>
        </tr>
      </thead>
      <tbody>
      {
        arraWithAllData.map((item,index)=> 
        <tr>
            <td>{index+1}</td>
            {item.map(i => <td>{i}</td>)}
        </tr>
        )
      }
      </tbody>
    </Table>
  );
}

export default CoinTable;