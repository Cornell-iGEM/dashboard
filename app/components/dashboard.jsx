import React from 'react';
import PH from './ph.jsx';
import EC from './ec.jsx';
import OS from './os.jsx';
import Temp from './temp.jsx';
import {Col} from 'react-bootstrap/lib/';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-area">
        <Col md={6}><PH /></Col>
        <Col md={6}><EC /></Col>
        <Col md={6}><OS /></Col>
        <Col md={6}><Temp /></Col>
      </div>
    )
  }
}
