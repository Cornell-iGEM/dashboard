import React from 'react';

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
        <div className="col-md-8 offset-md-2">
          <h2>OS</h2>
          <p>{this.state.os}</p>
        </div>
      </div>
    )
  }
}
