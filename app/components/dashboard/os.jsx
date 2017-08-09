import React from 'react';
import SensorComponent from './sensorComponent.jsx';

export default class OS extends React.Component {
  constructor(props) {
      super(props);

  };
    render() {
        return (<SensorComponent type="OS"/>);
    }

}
