import React from 'react';
import PH from './dashboard/ph.jsx';
import EC from './dashboard/ec.jsx';
import OS from './dashboard/os.jsx';
import Temp from './dashboard/temp.jsx';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-area">
        <div className="col-md-6"><PH /></div>
        <div className="col-md-6"><EC /></div>
        <div className="col-md-6"><OS /></div>
        <div className="col-md-6"><Temp /></div>
      </div>
    )
  }
}
