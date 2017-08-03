import React from 'react';

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
        <div className="col-md-8 offset-md-2">
          <h2>Temp</h2>
          <p>{this.state.temp}</p>
        </div>
      </div>
    )
  }
}
