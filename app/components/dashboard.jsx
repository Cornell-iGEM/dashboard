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
      <div className="dashboard">
        <div className="col-md-6 data ph-area"><PH /></div>
        <div className="col-md-6 data ec-area"><EC /></div>
        <div className="col-md-6 data os-area"><OS /></div>
        <div className="col-md-6 data temp-area"><Temp /></div>
      </div>
    )
  }
}
