import React, { Component } from 'react';

const styles ={
    textAlign: 'center'
}

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Stock Worth"
        }
    }

    render() {
        return (
            <div>
                <h1 style={styles}>{this.state.title}</h1>
            </div>
        );
    }
}

export default Header;
