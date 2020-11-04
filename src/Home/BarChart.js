import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class BarChart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          chartData : {
            labels: ['marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec'],
            datasets: [
              {
      
                data: [
                  15,
                  24,
                  46,
                  70,
                  130
                ],
                backgroundColor: 
                ['#89C7CC',
                '#04738D',
                '#89C7CC',
                '#04738D',
                '#560F0F',

                ]
              }
            ]
          }

      }
  }
    render () {

      return (
        <div className="chart"
        style={{
          width: "600px", 
          height: "400px",
          marginLeft: "100px"
          }}>
            <Bar 
            data={this.state.chartData}
  
            options={{
              title: {
                display: true,
                text:'Ilość obiektów w naszej bazie',
                fontSize: 25
              },
              legend: {
                display: false,
                position: 'right'
              }
            }}
            />
        </div>
      )

    }

}

export default BarChart;