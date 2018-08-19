import React, { Component } from 'react';
import { getStock } from '../api/Promise';
import { getChart } from '../api/api';
import Chart from './Chart';

class StockEntered extends React.Component{
    constructor() { 
        super();
        this.state = {
            symbol: "K",
            symbolChanging: false,
            chartData: null
        };
    
      }

    handleChande=(e)=>{
        const symbol = e.target.value;
        this.setState({ symbol });
        //This line should technically be debounced so that we reduce api calls.
        this.updateStockInfo(symbol);
    }

    updateStockInfo = (symbol) => {
        this.setState({ symbolChanging: true });
        getStock(symbol).then((data)=>{
            const chartData = getChart(data);
            this.setState({ ...chartData });
            this.setState({ symbolChanging: false });
        });
    }

    componentDidMount(){
        this.updateStockInfo(this.state.symbol);
    }

    render(){
        return(
            <div>
                <form>
                    Enter stock symbol: 
                    <input type="text"  onChange={(e) => this.handleChande(e)} value={this.state.symbol}/> 
                </form>
                {
                    this.state.symbolChanging && <div>Loading ... </div>
                }
                {
                    !this.state.symbolChanging && this.state.chartData &&
                    <Chart chartData={this.state.chartData} />
                }
            </div>
        )
    }
}

export default StockEntered;