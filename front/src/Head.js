import React, { Component } from "react";

export default class Head extends Component {
  render() {
    return (
      <div>
        <thead>
          <tr className="headings">
            <th></th>
            <th className="column-title">Code Client</th>
            <th className="column-title">First Name </th>
            <th className="column-title">Last Name </th>
            <th className="column-title">Adresse </th>
            <th className="column-title">Year </th>
            <th className="column-title">Email </th>
            <th className="column-title">Phone </th>
            <th className="column-title no-link last">
              <span className="nobr">Action</span>
            </th>
          </tr>
        </thead>
      </div>
    );
  }
}
