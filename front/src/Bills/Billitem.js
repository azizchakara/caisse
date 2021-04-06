import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteBill } from "../BillsActions/BillsActions";
class Billitem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteBill(id);
  };

  render() {
    const { bill } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{bill.billDate}</td>
        <td className="a-center ">{bill.billNumber}</td>
        <td className="a-center ">{bill.total}</td>
        <td className="a-center ">{bill.type}</td>
        <td>
          <Link to={`/updatebill/${bill.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, bill.id)}> Delete </Link>
          <br />
          <Link to={`/bill/${bill.id}`}>Print</Link>
        </td>
      </tr>
    );
  }
}
Billitem.propTypes = {
  deleteBill: PropTypes.func.isRequired,
};

export default connect(null, { deleteBill })(Billitem);
