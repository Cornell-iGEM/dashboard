import React from 'react';
import SensorComponent from './sensorComponent.jsx';

export default class EC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ec: 0
    }
  }

  //some function that updates ec and includes setState

  render() {
    return (<SensorComponent type="EC"/>);
  }
}
