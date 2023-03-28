import { Line } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';
import trendlineLinear from 'chartjs-plugin-trendline';
import 'chartjs-plugin-zoom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
Chart.register(...registerables);

export const CryptoChart = (props) => {
    const {allData,data,time,name,className,dates} = props

    const options2 = {
        legend: { display: false },
        title: {
          display: true,
          text: "Precios de criptomonedas en USD",
        },
        scales: {
          x:
            {
              ticks: {
                beginAtZero: true,
              },
            },
        },
        zoom: {
          enabled: true,
        },
        pan: {
          enabled: true,
        },
        elements: {
            point:{
                radius: 0
            }
        }
      }
    const [options, setOptions] = useState(options2); // REMOVED BRACKETS
    const [userData, setUserData] = useState({
        labels: time,
        datasets: [
          {
            label: "Price in USD",
            data: Object.values(data),
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(75,192,192,1)",
            pointHoverBorderWidth: 2,
            trendlineLinear: {
              style: 'rgb(23, 198, 113)',
              lineStyle: 'dotted',
              width: 2,
            }
          },
        ],
      })

      useEffect(()=>{
         setUserData({
            labels: time,
            datasets: [
              {
                label: "Price in USD",
                data: Object.values(data),
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(75,192,192,1)",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(75,192,192,1)",
                pointHoverBorderWidth: 2,
                trendlineLinear: {
                  style: 'rgb(23, 198, 113)',
                  lineStyle: 'dotted',
                  width: 2,
                }
              },
            ],
          })
      },[])
      
    return (
      <>
        <div className="drop-dates">
          
        <h1>{name}</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dates
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {
                dates.map(date =><Dropdown.Item onClick={()=>{setUserData({
                    labels: time.filter(item => item === date),
                    datasets: [
                      {
                        label: "Price in USD",
                        data: Object.values(allData.filter(item => item.timestamp === date).map(item => item.data.quote.USD.price)),
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                        borderColor: "rgba(75,192,192,1)",
                        borderWidth: 2,
                        pointBackgroundColor: "rgba(75,192,192,1)",
                        pointBorderColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(75,192,192,1)",
                        pointHoverBorderWidth: 2,
                        trendlineLinear: {
                          style: 'rgb(23, 198, 113)',
                          lineStyle: 'dotted',
                          width: 2,
                        }
                      },
                    ],
                  })}}>{date}</Dropdown.Item>)
            }
        </Dropdown.Menu>
      </Dropdown>
    </div>  
    <div className="drops">
        <div>
          <Line className="chart"
            data={userData}
            options={options}
          />
        </div>
    </div>
      </>
      
      
    );
}