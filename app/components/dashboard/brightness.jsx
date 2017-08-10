import React from 'react';
import SensorComponent from './sensorComponent.jsx';
var x_map = function(x){
    return (x) / (255) * 200
};
export default class Brightness extends React.Component {
    constructor(props) {
        super(props);

        this.new_props = {
            type: "brightness",
            name: "brightness",
            x: x_map,
            initial_value: 120,
            unit: ""
        };
    };

    //some function that updates temp and includes setState

    render() {
        return (<SensorComponent {...this.new_props}/>);

    }
}
