import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Orderitem from "./OrderActions/Orderitem";
import { getOrders } from "./OrderActions/OrderActions";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
    $(function () {
      $("#example1").DataTable();
    });
  }

  render() {
    const { orders } = this.props.order;
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Orders</h1>
                  <br />
                  <Link
                    to="addorder"
                    className="btn btn-lg btn-info float-right mb-2"
                  >
                    Add Order
                  </Link>
                  <table
                    id="example1"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Order Date</th>
                        <th>Order Number</th>
                        <th>Total</th>
                        <th>Client</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <Orderitem key={order.id} order={order} />
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

Orders.propTypes = {
  order: PropTypes.object.isRequired,
  getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps, { getOrders })(Orders);
