import React, { Component } from 'react';
import { getStock } from '../api/Promise';
import { getChart } from '../api/api';
import Header from './Header';
import Chart from './Chart';
import store from '../store/configureStore';

import {connect} from 'react-redux';

import {setSymbol} from '../actions/types';
import {setChart} from '../actions/types';


// class StockEntered extends React.Component{
//     constructor() { 
//         super();
//         this.state = {
//             symbol: "K",
//             symbolChanging: false,
//             chartData: null
//         };
    
//       }

//     handleChande=(e)=>{
//         const symbol = e.target.value;

//         this.setState({ symbol });
//         //This line should technically be debounced so that we reduce api calls.
//         this.updateStockInfo(symbol);
//     }


//     updateStockInfo = (symbol) => {
//         this.setState({ symbolChanging: true });
//         getStock(symbol).then((data)=>{
//             const chartData = getChart(data);
//             this.setState({ ...chartData });
//             this.setState({ symbolChanging: false });
//         });
//     }

//     componentDidMount(){
//         this.updateStockInfo(this.state.symbol);
//     }

//     render(){
//         return(
//             
//             <div>
//                 <Header />
//                     <form>
//                         Enter stock symbol: 
//                         <input type="text"  onChange={(e) => this.handleChande(e)} value={this.state.symbol}/> 
//                     </form>
//                     {
//                         this.state.symbolChanging && <div>Loading ... </div>
//                     }
//                     {
//                         !this.state.symbolChanging && this.state.chartData &&
//                         <Chart chartData={this.state.chartData} />
//                     }
//             </div>
//             
//         )
//     }
// }


// export default StockEntered;

class StockEntered extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            symbol: "K",
            symbolChanging: true,
        };
    
      }

    //       handleChande=(e)=>{
    //     const symbol = e.target.value;
    //     setSymbol(symbol);
    //         //console.log(props.symbol);
    // }


    handleChande=(e)=>{
        const symbol = e.target.value;
        this.setState({symbol});
        this.props.setSymbol(symbol);
    }

    updateStockInfo = (e) => {
        console.log(this.state.symbol);
        const symbol = this.state.symbol;
        this.setState({ symbolChanging: true });
        getStock(symbol).then((data)=>{
            const chartData = getChart(data);
            this.props.setChart({ ...chartData });
            this.setState({ symbolChanging: false });
        });
    }


    // updateStockInfo = () => {
    //     const symbol = this.props.symbol;
    //     this.setState({ symbolChanging: true });
    //     getStock(symbol).then((data)=>{
    //         const chartData = getChart(data);
    //         setSymbol(symbol);
    //         setChart({ ...chartData });
    //         this.setState({ symbolChanging: false });
    //     });
    // }

    // componentDidMount(){
    //    this.updateStockInfo("K");
    //}

    render(){
        return(
            <div>
                <Header />
                <form>
                        Enter stock symbol: 
                        <input type="text" onChange={(e) => this.handleChande(e)} value={this.state.symbol}/> 
                        <button type="button" onClick={(e)=> this.updateStockInfo(e)}>Submit</button>
                    </form>
                    {
                        this.state.symbolChanging && <div>Loading ... </div>
                    }
                    {
                        !this.state.symbolChanging && this.props.chartData &&
                        <Chart chartData={this.props.chartData} />
                    }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {  
    return{
        symbol: state.symbol,
        chartData: state.chartData
    }; 
}

    const mapDispatchToProps = (dispatch) => ({
        setSymbol: (symbol) => dispatch(setSymbol(symbol)),
        setChart: (chartData) => dispatch(setChart(chartData))
    })


export default connect(mapStateToProps, mapDispatchToProps)(StockEntered);