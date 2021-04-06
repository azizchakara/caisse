import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import { connect } from "react-redux";
import {
  getProductByCategory,
  getProducts,
} from "../ProductActions/ProductActions";
import { createOrder } from "../OrderActions/OrderActions";
import {
  getCategories,
  createCategory,
} from "../categoryActions/CategoryActions";
import { Link } from "react-router-dom";
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
      cmdDate: "2021-01-30",
      cmdNum: "912",
      total: "120000",
      valide: false,
      client: {
        id: 4,
      },
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
    let productId = e.target.getAttribute("data-productId");
    let oldProducts = this.state.products;
    let productArray = { id: productId };
    //add checker for duplicate entries
    /*const mapped = oldProducts.map((obj, index) => obj.id);
    const filtered = mapped.filter(
      (type, index) => mapped.indexOf(type) === index
    );*/
    const oldOrders = this.state.orders;
    const oldCount = oldOrders[productName];
    oldOrders[productName] = oldCount + 1;
    this.setState({
      orders: oldOrders,
      products: [...oldProducts, productArray],
    });
    //console.log(this.state.orders);
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.orders);
    const newOrder = {
      //bill: this.state.bill,
      client: this.state.client,
      cmdDate: this.state.cmdDate,
      cmdNum: this.state.cmdNum,
      //orders: this.state.orders,
      products: this.state.products,
      total: this.state.total,
      valide: this.state.valide,
    };
    console.log(newOrder);
    this.props.createOrder(newOrder, this.props.history);
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
              <form onSubmit={this.onSubmit}>
                <div class="row">
                  <div class="col">
                    <div className="form-group">
                      <p className="lead">List of categories</p>
                      {categories.map((category) => (
                        <img
                          src={logo}
                          classname="hover-shadow"
                          onClick={this.onClick}
                          style={{
                            width: 120,
                            margin: 10,
                          }}
                          data-categoryId={category.id}
                          alt={category.categoryName}
                        />
                      ))}
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
                            {product.productName} - ${product.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="col">
                    <p className="lead">Order Summary</p>
                    <OrderSummary orders={this.state.orders} />
                    <br></br>
                    <input type="submit" className="btn btn-info mr-2 " />
                  </div>
                </div>
              </form>
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
  createOrder,
  getCategories,
  getProducts,
  //getProductByCategory,
})(AddOrders);
