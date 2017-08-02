import React from 'react';
import {Col} from 'react-bootstrap/lib/';

export default class OS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: 0
    }
  }

  //some function that updates os and includes setState

  render() {
    return (
      <div className="os-area">
        <Col sm={8} offset={2}>
          <h2>OS</h2>
          <p>{this.state.os}</p>
        </Col>
      </div>
    )
  }
}
