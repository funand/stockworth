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

    render() {
        return (
            <div style={styles}>
                <h1 >StockWorth</h1>
            </div>
        );
    }
}

export default Header;
