import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="main-header navbar navbar-expand navbar-white navbar-light"
          style={{ height: "30px" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
            <Link to="dashboard" className="nav-link">
              Home
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
