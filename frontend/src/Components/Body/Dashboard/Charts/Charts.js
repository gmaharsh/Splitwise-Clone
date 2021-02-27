import React, { useEffect, useState } from 'react';
import './Charts.css';
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";



function Charts({ data }) {
    console.log(data)
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([])
    useEffect(() => {
        setOptions({
        chart: {
          
                type: 'bar',
                height: 10
          },
          datfill: {
          colors: [ '#E91E63', '#9C27B0']
        },


              plotOptions: {
                bar: {
                  borderRadius: 25,
                  horizontal: true,
                }
              },
              xaxis: {
                categories: ['June'],
              },
              grid: {
                // xaxis: {
                //   lines: {
                //     show: true
                //   }
                // }
              },
              yaxis: {
                reversed: true,
                axisTicks: {
                  // show: true
                }
          }
        })
    setSeries([
        {
          data: [400]
        }
      ])
    },[])
    


    // console.log("From Charts:-", data)
    return (
        <div className="charts">
          <div className="dashboard__accounts">
            <div className="dashboard__owe">
              <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
    )
}

export default Charts
