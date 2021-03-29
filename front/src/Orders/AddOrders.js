import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import { connect } from "react-redux";
import {
  getProductByCategory,
  getProducts,
} from "../ProductActions/ProductActions";
import {
  getCategories,
  createCategory,
} from "../categoryActions/CategoryActions";
import classnames from "classnames";
import logo from "./juce.png";
import OrderSummary from "./OrderSummary";

class AddOrders extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }
  constructor() {
    super();

    this.state = {
      products: [],
      orders: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    //this.setState({ [e.target.name]: e.target.value });
  }
  onClick(e) {
    let categoryId = e.target.getAttribute("data-categoryId");
    let oldOrders = this.state.orders;
    //this.props.getProductByCategory(e.target.getAttribute("data-categoryId"));
    $("div.column img").each(function () {
      if ($(this).attr("data-categoryId") === categoryId) {
        let productName = $(this).attr("data-productName");

        $(this).attr("data-categoryId", categoryId).css("display", "block");
        $("span").attr("datacategorId", categoryId).css("display", "block");

        if (!oldOrders[productName]) {
          oldOrders[productName] = 0;
        }
      } else if ($(this).attr("data-categoryId") !== categoryId) {
        $(this).css("display", "none");
        $("span").css("display", "none");
      }
    });
    $("div.column span").each(function () {
      if ($(this).attr("data-categoryId") === categoryId) {
        $(this).attr("data-categoryId", categoryId).css("display", "block");
      } else if ($(this).attr("data-categoryId") !== categoryId) {
        $(this).css("display", "none");
      }
    });
  }
  addProductsHandler = (e) => {
    let productName = e.target.getAttribute("data-productName");
    const oldOrders = this.state.orders;
    const oldCount = oldOrders[productName];
    oldOrders[productName] = oldCount + 1;
    this.setState({ orders: oldOrders });
    //console.log(this.state.orders);
  };

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { categories } = this.props.categories;
    const { products } = this.props.products;
    const { orders } = this.state;
    return (
      <div className="content-wrapper">
        <div>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <p className="lead text-center">Add New Order</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <ul class="list-group">
                        {categories.map((category) => (
                          <li
                            className="list-group-item"
                            data-categoryId={category.id}
                            onClick={this.onClick}
                          >
                            {category.categoryName}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="row">
                      {products.map((product) => (
                        <div className="column">
                          <img
                            src={logo}
                            style={{
                              width: 100,
                              margin: 10,
                              display: "none",
                            }}
                            classname="hover-shadow"
                            onClick={this.addProductsHandler}
                            data-productId={product.id}
                            data-productName={product.productName}
                            data-categoryId={product.category.id}
                            alt={product.productName}
                            id={product.category.id}
                          />
                          <span
                            style={{ display: "none", textAlign: "center" }}
                            data-productId={product.id}
                            data-productName={product.productName}
                            data-categoryId={product.category.id}
                          >
                            ${product.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <OrderSummary orders={this.state.orders} />
                    <a
                      href="/ordersummary"
                      className="btn btn-info btn-block mt-4"
                    >
                      Continue to payment
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state,
  categories: state.category,
  products: state.product,
  //productsCategory: state.productCategory,
});
export default connect(mapStateToProps, {
  getCategories,
  getProducts,
  //getProductByCategory,
})(AddOrders);
