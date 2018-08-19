import React, { Component } from 'react';
// import './App.css';
import { Header } from './Header';
import Chart from './Chart';
import {getStock} from './Promise';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state={ symbol: props.symbol,
                 chartData: {}
                };

    // this.handleChande = this.handleChande.bind(this);

  }
  // componentWillReceiveProps(props){
  //   this.setState({symbol: props.symbol});
  // }
  componentDidMount(){
    getStock(this.state.symbol).then((data)=>{
      this.getChart(data);
    });
  }

  getChart(data){
  
      const times=[];
      if (data.trades){
        data.trades.forEach(element => {

          // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.
          var date = new Date(element.timestamp*1000);
          // Hours part from the timestamp
          var hours = date.getHours();
          // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();
          // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();

          // Will display time in 10:30:23 format
          var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

          times.push(formattedTime);  
        });
      }
      const prices = [];
      if (data.trades){

        data.trades.forEach(element => {
            prices.push(element.price);  
        });
      }
      const companyName = data.quote.companyName;
      
      this.setState({chartData: 
        {
                  labels: ["times", "pd","po"],
                  datasets: [
                      {
                        label: companyName,
                        data: [6,7,2,9,0,4],
                        borderColor: "green", 
                        fill: false                   
                        }
                  ],
          }
        });
  }
  
  // handleChande(e){
  //   const  newSymbol = e.target.value;
  //   this.setState({symbol: newSymbol});
  //   this.componentDidMount();
  // }

  // shouldComponentUpdate(nextSymbol){
  //   if(nextSymbol === this.state.symbol){
  //     return false;
  //   }
  //   else
  //   return true;
  // }

  render() {
    return(
      <div>
      <Header />
      {<Chart chartData={this.state.chartData} />}
      </div>
    )  
  }
}

export default App; 
