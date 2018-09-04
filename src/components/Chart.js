import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={{width:"90%", height:"70%"}}>
                <Line data={this.props.chartData}/>
            </div>

        );
    }
}


export default Chart;
