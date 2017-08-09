import React from 'react';
var d3 = require('d3');
//import 'isomorphic-fetch';
import SensorGraph from './sensorGraph.jsx';

export default class SensorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: [this.props.initial_value]};
        this.value = [this.props.initial_value];
    };

    componentDidMount(){
        //this.setState({value: [this.props.initial_value]});
        let api_location = window.location.href + "data/1/" + this.props.name;
        var self = this;
        this.timerID = setInterval(
            () =>  fetch(api_location)
                .then((response) =>{
                    response.json().then((data) => {
                        this.value = [data.data];
                        this.setState({value: [data.data]});
                        console.log("data in parent:", data.data, new Date());

                    });
                }),
            1000
        );
    };
    componentWillUnmount(){
        clearInterval(this.timerID);
    }



    //some function that updates os and includes setState

    render() {
        return (
            <div className={this.props.name+"-area"}>
                <div className="col-md-8 offset-md-2">
                    <h2 className="data-type">{this.props.type} </h2>
                    <h2 className="data-value">{parseFloat(this.state.value).toFixed(2)} <span className="units">{this.props.unit}</span></h2>
                    <SensorGraph {...this.props} value={this.value}/>
                    <svg id={this.props.name+"-chart"} ref={(elem) => { this.svg = elem; }}>
                    </svg>
                </div>
            </div>
        )
    }
}