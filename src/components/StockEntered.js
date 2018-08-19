import React, { Component } from 'react';
import App from './App';

class StockEntered extends React.Component{
    constructor() { 
        super();
        this.state={ symbol: "K"};
    
      }

      handleChande=(e)=>{
        console.log(e.target.value);
        this.setState({symbol : e.target.value});
      }

    render(){
        return(
            <div>
                <form>
                    Enter stock symbol: 
                    <input type="text"  /> 
                    <button onChange={(e) => this.handleChande(e)}> Graph! </button>
                </form>
                <App symbol={this.state.symbol} />
            </div>
        )
    }
}

export default StockEntered;