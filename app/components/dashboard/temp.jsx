import React from 'react';
import SensorComponent from './sensorComponent.jsx';

export default class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0
    }
  }

  //some function that updates temp and includes setState

  render() {
    return (<SensorComponent type="Temp"/>);

  }
}
