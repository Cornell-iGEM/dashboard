import React from 'react';

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
      <div className="ec-area">
        <div className="col-md-8 offset-md-2">
          <h2>EC</h2>
          <p>{this.state.ec}</p>
        </div>
      </div>
    )
  }
}
