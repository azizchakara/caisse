import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProducts } from "./ProductActions/ProductActions";
import ProductItem from "./ProductActions/ProductItem";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
    $(function () {
      $("#example1").DataTable();
    });
  }
  render() {
    const { products } = this.props.product;
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Products</h1>
                  <br />
                  <Link
                    to="addproduct"
                    className="btn btn-lg btn-info float-right mb-2"
                  >
                    Add Product
                  </Link>
                  <table
                    id="example1"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Product's Name</th>

                        <th>Price</th>
                        <th>Stock</th>
                        <th>CodeBar</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
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
Products.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
