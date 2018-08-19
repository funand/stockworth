import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            chartData : props.chartData
            }
    }

    componentWillReceiveProps(props){
        this.setState({chartData: props.chartData});
    }

    render(){
        return (
            <div>
                <Line 
                    data={this.state.chartData} />
            </div>

        );
    }
}


export default Chart
