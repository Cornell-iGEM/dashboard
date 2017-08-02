import React from 'react';
import {Col} from 'react-bootstrap/lib/';

export default class EC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ec: 0
    }
  }

  //some function that updates ec and includes setState

  render() {
    return (
      <div className="EC-area">
        <Col sm={8} offset={2}>
          <h2>EC</h2>
          <p>{this.state.ec}</p>
        </Col>
      </div>
    )
  }
}
