import React from 'react';
import PH from './graphs/ph.jsx';
import EC from './graphs/ec.jsx';
import OS from './graphs/os.jsx';
import Temp from './graphs/temp.jsx';

export default class Graphs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="graphs">
        <div className="col-md-8 offset-md-2"><PH /></div>
        <div className="col-md-8 offset-md-2"><EC /></div>
        <div className="col-md-8 offset-md-2"><OS /></div>
        <div className="col-md-8 offset-md-2"><Temp /></div>
      </div>
    )
  }
}
