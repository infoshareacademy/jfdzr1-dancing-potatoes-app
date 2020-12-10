import React, {Component, useState} from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import {Bar, Line, Pie} from 'react-chartjs-2';
const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'

class BarChart extends Component {
  state = {
    offers: [],
  }

  componentDidMount() {
    fetch(`${DATABASE_URL}/offers.json`)
    .then(response => response.json())
    .then(data => {
      const formattedData = Object.keys(data)
    .map(key => ({
      id: key,
      ...data[key]
    }))
    this.setState({
      offers: formattedData
    })
    })
    
  }

  filteringData(){
    let counter = 0;
    this.state.offers.map((element)=>{
      console.log(element)
      if (element.level == "łatwy")
      {counter++}

    })
    // console.log(counter)
    return counter
    }
  

  constructor(props) {
      super(props);
      this.state = {
          chartData : {
            labels: ['łatwy', 'średni', 'trudny'],
            datasets: [
              {
      
                data: [
                  this.counter,
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
      console.log(this.state.offers)

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