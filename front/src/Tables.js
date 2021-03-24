import React, { Component } from "react";
import { connect } from "react-redux";
import { getClients } from "./Actions/ClientActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Clientitem from "./Actions/Clientitem";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

class Tables extends Component {
  componentDidMount() {
    this.props.getClients();
    $(function () {
      $("#example1").DataTable();
    });
  }

  render() {
    const { clients } = this.props.client;
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Clients</h1>
                  <br />
                  <Link
                    to="addclient"
                    className="btn btn-lg btn-info float-right mb-2"
                  >
                    Add Client
                  </Link>
                  <table
                    id="example1"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Adress</th>
                        <th>Orders</th>
                        <th>Code Client</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <Clientitem key={client.id} client={client} />
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
Tables.propTypes = {
  client: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client,
});

export default connect(mapStateToProps, { getClients })(Tables);
