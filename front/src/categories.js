import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getCategories } from "./categoryActions/CategoryActions";
import Categoryitem from "./categoryActions/Categoryitem";

class categories extends Component {
  componentDidMount() {
    this.props.getCategories();
    $(function () {
      $("#example1").DataTable();
    });
  }
  render() {
    const { categories } = this.props.category;
    return (
      <div className="content-wrapper">
        <div>
          <div className="container">
            <div className="projects">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="display-4 text-center">Categories</h1>
                    <br />
                    <Link
                      to="addcategory"
                      className="btn btn-lg btn-info float-right mb-2"
                    >
                      Add New Category
                    </Link>
                    <table
                      id="example1"
                      class="table table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>Category Name</th>

                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <Categoryitem key={category.id} category={category} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
categories.propTypes = {
  category: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getCategories })(categories);
