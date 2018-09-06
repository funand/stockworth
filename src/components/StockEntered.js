import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Chart from './Chart';

import { setSymbol, getChartData, getName } from '../actions/chart';

class StockEntered extends React.Component{
    
    constructor(props) { 
        super(props);
        this.state = {
            symbol: "K"
        };
    }

    componentDidMount() {
        //console.log('check');
        // this.props.getChartData(this.state.symbol);
        this.props.getName('TSLA');
    }


    handleChange = (e) => {
        const symbol = e.target.value;
        this.setState({symbol});
        this.props.setSymbol(symbol);
    }

    updateStockInfo = (e) => {
        this.props.getChartData(this.state.symbol);
    }

    render(){
        return(
            <div>
                <Header />
                <form>
                        Enter stock symbol: 
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.symbol}/> 
                        <button type="button" onClick={(e)=> this.updateStockInfo(e)}>Submit</button>
                    </form>
                    {
                        // this.state.symbolChanging && <div>Loading ... </div>
                        console.log(this.props.chartData)
                    }
                    {
                        this.props.chartData &&
                        <Chart chartData={this.props.chartData} />
                    }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {  
    return{
        symbol: state.chart.symbol,
        chartData: state.chart.chartData
    }; 
}

const mapDispatchToProps = (dispatch) => ({
    setSymbol: (symbol) => dispatch(setSymbol(symbol)),
    setChart: (chartData) => dispatch(setChart(chartData)),
    getChartData: (symbol) => dispatch(getChartData(symbol)),
    getName: (symbol) => dispatch(getName(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockEntered);