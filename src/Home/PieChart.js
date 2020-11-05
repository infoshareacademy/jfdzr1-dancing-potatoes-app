import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class PieChart extends Component {

  constructor(props) {
      super(props);
      this.state = {
          chartData : {
            labels: ['Kajaki jednoosobowe', 'Kajaki Wieloosobowe', 'Rowery wodne', 'Łodzie', 'Łodzie wioślarskie'],
            datasets: [
              {
                label: "Population",
                data: [
                  443,
                  314,
                  256,
                  82,
                  25
                ],
                backgroundColor: 
                ['#89C7CC',
                '#04738D',
                '#89C7CC',
                '#04738D',
                '#F1B71C',
                ]
              }
            ]
          }

      }
  }
    render () {

      return (
        <div className="chart"
        style={{width: "500px", height: "400px"}}>
            <Pie 
            data={this.state.chartData}
  
            options={{
              title: {
                display: true,
                text:'Nasze wypożyczalnie oferują',
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

export default PieChart;