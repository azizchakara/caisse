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
            <li className="nav-item"></li>
          </ul>
        </nav>
      </div>
    );
  }
}
