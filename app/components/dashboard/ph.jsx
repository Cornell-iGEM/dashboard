import React from 'react';
import SensorComponent from './sensorComponent.jsx';

export default class PH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ph: 0
    }
  }

  //some function that updates ph and includes setState

  render() {
      return (<SensorComponent type="pH"/>);
  }
}
