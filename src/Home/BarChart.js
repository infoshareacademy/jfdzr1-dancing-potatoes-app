import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class BarChart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          chartData : {
            labels: ['Gdańsk', 'Gdynia', 'Sopot', 'Szczecin', 'Mazury'],
            datasets: [
              {
                label: "Population",
                data: [
                  1234123,
                  434222,
                  553344,
                  545353,
                  765344
                ],
                backgroundColor: 
                ['rgb(145, 143, 71)',
                'rgb(180, 180, 180)',
                'rgb(0, 0, 0)',
                'rgba(255, 99, 71, 0.5)',
                'rgb(106, 90, 205)'

                ]
              }
            ]
          }

      }
  }
    render () {

      return (
        <div className="chart"
        style={{width: "400px", height: "300px"}}>
            <Bar 
            data={this.state.chartData}
  
            options={{
              title: {
                display: true,
                text:'Largest Cities in the world',
                fontSize: 25
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
            />
        </div>
      )

    }

}

export default BarChart;