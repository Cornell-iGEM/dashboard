import React from 'react';
import SensorComponent from './sensorComponent.jsx';
//TODO: CHANGE ALL OF THESE INTO ONE COMPONENT JESUS

var x_map = function(x){
    return (x-4) / (11-4) * 200
};

export default class PH extends React.Component {
  constructor(props) {
    super(props);
    this.new_props = {
        type: "pH",
        name: "ph",
        x: x_map,
        initial_value:6.8,
        unit: "",
        graph_type: this.props.graph_type
    };
  };

  //some function that updates temp and includes setState

  render() {
    return (<SensorComponent {...this.new_props}/>);

  }
}
