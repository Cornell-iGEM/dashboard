import React from 'react';
import {Col} from 'react-bootstrap/lib/';

export default class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0
    }
  }

  //some function that updates temp and includes setState

  render() {
    return (
      <div className="temp-area">
        <Col sm={8} offset={2}>
          <h2>Temp</h2>
          <p>{this.state.temp}</p>
        </Col>
      </div>
    )
  }
}
