import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getBills } from "./BillsActions/BillsActions";
import Billitem from "./Bills/Billitem";
class Bills extends Component {
  componentDidMount() {
    this.props.getBills();
    $(function () {
      $("#example1").DataTable();
    });
  }
  render() {
    const { bills } = this.props.bill;
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Bills</h1>
                  <br />
                  <Link
                    to="addbills"
                    className="btn btn-lg btn-info float-right mb-2"
                  >
                    Add Bill
                  </Link>
                  <table
                    id="example1"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Bill's Date</th>
                        <th>Bill's Number</th>
                        <th>Totale</th>
                        <th>Type</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((bill) => (
                        <Billitem key={bill.id} bill={bill} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Bills.propTypes = {
  bill: PropTypes.object.isRequired,
  getBills: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bill: state.bill,
});

export default connect(mapStateToProps, { getBills })(Bills);
