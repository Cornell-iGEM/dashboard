import React from 'react';
import {Col} from 'react-bootstrap/lib/';

export default class PH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ph: 0
    }
  }

  render() {
    return (
      <div className="pH-area">
        <Col sm={8} offset={2}>
          <h2>pH</h2>
          <p>{this.state.ph}</p>
        </Col>
      </div>
    )
  }
}
