import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © 2021-2022 <a href="dashboard">Caisse</a>.
          </strong>
          <div className="float-right d-none d-sm-inline-block"></div>
        </footer>
      </div>
    );
  }
}
