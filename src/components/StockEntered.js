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
        this.props.getName('K');
    }


    handleChange = (e) => {
        const symbol = e.target.value;
        this.setState({symbol});
        this.props.setSymbol(symbol);
    }

    updateStockInfo = (e) => {
        this.props.getChartData(this.state.symbol);
        this.props.getName(this.props.symbol);
    }

    render(){
        return(
            <div>
                <Header companyName={this.props.companyName} />
                <form>
                        Enter stock symbol: 
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.symbol}/> 
                        <button type="button" onClick={(e)=> this.updateStockInfo(e)}>Submit</button>
                </form>
                    {
                        this.props.chartData &&
                        <Chart chartData={this.props.chartData} companyName ={this.props.companyName}/>
                    }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {  
    return{
        symbol: state.chart.symbol,
        chartData: state.chart.chartData,
        companyName: state.chart.companyName
    }; 
}

const mapDispatchToProps = (dispatch) => ({
    setSymbol: (symbol) => dispatch(setSymbol(symbol)),
    setChart: (chartData) => dispatch(setChart(chartData)),
    getChartData: (symbol) => dispatch(getChartData(symbol)),
    getName: (symbol) => dispatch(getName(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockEntered);