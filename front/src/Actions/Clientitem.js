import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteClient } from "../Actions/ClientActions";

class Clientitem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteClient(id);
  };

  render() {
    const { client } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{client.firstName}</td>
        <td className="a-center ">{client.lastName}</td>
        <td className="a-center ">{client.email} </td>
        <td className="a-center ">{client.phone}</td>
        <td className="a-center ">{client.adresse}</td>
        <td className="a-center ">
          <button type="button" class="btn btn-primary">
            Show Orders
          </button>
        </td>
        <td className="a-center ">{client.codeClient}</td>
        <td>
          <Link to={`/updateclient/${client.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, client.id)}>
            {" "}
            Delete{" "}
          </Link>
        </td>
      </tr>
    );
  }
}

Clientitem.propTypes = {
  deleteClient: PropTypes.func.isRequired,
};
export default connect(null, { deleteClient })(Clientitem);
