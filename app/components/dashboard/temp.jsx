import React from 'react';
import SensorComponent from './sensorComponent.jsx';

var x_map = function(x){
    return (x-22) / (30-22) * 200
};
export default class Temp extends React.Component {
    constructor(props) {
        super(props);
        this.new_props = {
            type: "Temp",
            name: "temp",
            x: x_map,
            initial_value: 25,
            unit: "°C",
            graph_type: this.props.graph_type
        };
    };

    //some function that updates temp and includes setState

    render() {
        return (<SensorComponent {...this.new_props}/>);

    }
}
