import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Nav, NavItem} from 'react-bootstrap/lib/';

const NavBar = () => {
  // return (
  //   <Nav bsStyle="pills" stacked>
  //     navItems.map(({navItem}) => {
  //       <NavItem href={navItem.href}>{navItem.name}</NavItem>
  //     })
  //   </Nav>
  // )

  return (
    <Col md={3}>
      <Nav bsStyle="pills" stacked md={3}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/history">History</Link></NavItem>
        <NavItem><Link to="/login">Login</Link></NavItem>
      </Nav>
    </Col>
  )
}

export default NavBar;
