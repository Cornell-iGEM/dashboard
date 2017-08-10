import React from 'react';
import SensorComponent from './sensorComponent.jsx';

var x_map = function(x){
  return (x-(-2)) / (2-(-2)) * 200
};
export default class EC extends React.Component {
  constructor(props) {
    super(props);
    this.new_props = {
      type: "EC",
      name: "ec",
      x: x_map,
      initial_value:0.4,
      unit: "mV"
    };
  };

  //some function that updates temp and includes setState

  render() {
    return (<SensorComponent {...this.new_props}/>);

  }
}
