import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

function StocksTable(props) {
    var {Microsof,AMD,Google,Apple} = props
    Microsof = Microsof.slice(Microsof.length-6,Microsof.length-1);
    AMD = AMD.slice(AMD.length-6,AMD.length-1);
    Google = Google.slice(Google.length-6,Google.length-1);
    Apple = Apple.slice(Apple.length-6,Apple.length-1);
    var arraWithAllData = []
    console.log(Microsof);
    for(var i=0;i<5;i++){
        arraWithAllData.push([Math.round(Microsof[i],2),Math.round(AMD[i],2),Math.round(Google[i],2),Math.round(Apple[i],2)]);
    }
  return (
    <Table striped bordered hover variant='dark'> 
      <thead>
        <tr>
          <th>#</th>
          <th>Microsoft</th>
          <th>AMG</th>
          <th>Google</th>
          <th>Apple</th>
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

export default StocksTable;