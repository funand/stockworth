import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <div>
                
                <p>Here is some data</p>
                <p> Title: {this.state.title} </p>
            </div>
        );
    }
}

export default Footer;

