import React from 'react';

export default class PH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ph: 0
    }
  }

  //some function that updates ph and includes setState

  render() {
    return (
      <div className="ph">
        <div className="col-md-8 offset-md-2 ph-area">
          <h2>pH</h2>
          <p>{this.state.ph}</p>
        </div>
      </div>
    )
  }
}
