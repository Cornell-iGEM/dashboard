import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Nav, NavItem} from 'react-bootstrap/lib/';

const NavBar = () => {
  return (
    <div className="navbar-area">
      <Col md={3}>
        <Nav bsStyle="pills" stacked md={3}>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/history">History</Link></NavItem>
          <NavItem><Link to="/login">Login</Link></NavItem>
        </Nav>
      </Col>
    </div>
  )
}

export default NavBar;
