import React from 'react';
import {Nav, NavLink} from 'reactstrap';
//import './scripts/NavbarScript';

class Navbar extends React.Component {
  render() {
    return (
      <Nav className="fixed-top navbar navbar-toggleable-md navbar-inverse">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink href="/" className="navbar-brand">Navbar</NavLink>
        <div className="navbar-brand">$header-color $title-color</div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink href='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/element">
                Element
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/table">
                Table
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    )
  }
};
export default Navbar;
