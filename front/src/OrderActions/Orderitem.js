import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Orderitem extends Component {
  render() {
    const { order } = this.props;
    console.log(order);
    return (
      <tr className="even pointer">
        <td className="a-center ">{order.cmdDate}</td>
        <td className="a-center ">{order.cmdNum}</td>
        <td className="a-center ">{order.total}</td>
      </tr>
    );
  }
}

export default connect(null, {})(Orderitem);
