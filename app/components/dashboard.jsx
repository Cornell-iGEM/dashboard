import React from 'react';
import PH from './ph.jsx';
import EC from './ec.jsx';
import OS from './os.jsx';
import Temp from './temp.jsx';

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
