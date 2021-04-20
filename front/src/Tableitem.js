import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Tableitem extends Component {
  render() {
    const { table } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{table.tableplace}</td>
        <td className="a-center ">{table.tablenum}</td>
        <td>
          <Link to={`/updatetable/${table.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, table.id)}>
            {" "}
            Delete{" "}
          </Link>
        </td>
      </tr>
    );
  }
}

export default connect(null, {})(Tableitem);
