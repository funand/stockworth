import React, {Component} from 'react';
export class UserInput extends React.Component{
    constructor(props){
        super(props);
        this.handleSymbol = this.handleSymbol.bind(this);
    }

    handleSymbol(e){
        const sign= e.target.value;
        this.setState({symbol: sign});
        this.props.symbol = sign;
    }

}