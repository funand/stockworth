import React, { Component } from 'react';

const styles ={
    textAlign: 'center',
    backgroundColor: "black",
    color: "white",
    top: "0",
    width: "100%",
    border: "1px solid black"
}

export class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles}>
            <h1>StockWorth: {this.props.companyName} </h1> 
            {console.log(this.props.companyName)}
            </div>
        );
    }
}

export default Header;
