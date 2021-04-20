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
import { getTables } from "../TablesActions/TablesActions";
import { getClients } from "../Actions/ClientActions";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "./juce.png";
import OrderSummary from "./OrderSummary";

class AddOrders extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
    this.props.getTables();
    this.props.getClients();
  }
  constructor() {
    super();
    this.state = {
      cmdDate: "2021-01-30",
      cmdNum: "1200",
      total: "22789",
      valide: false,
      client: {},
      details: [],
      orders: {},
      table: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
    let productPrice = e.target.getAttribute("data-productPrice");
    let oldProducts = this.state.details;

    //add checker for duplicate entries
    /*const mapped = oldProducts.map((obj, index) => obj.id);
    const filtered = mapped.filter(
      (type, index) => mapped.indexOf(type) === index
    );*/
    const oldOrders = this.state.orders;
    const oldCount = oldOrders[productName];
    oldOrders[productName] = oldCount + 1;
    let totalArray = [];

    let productArray = {
      name: productName,
      quantity: oldOrders[productName],
      //price: productPrice * oldOrders[productName],
    };

    //console.log(productArray);
    this.setState({
      details: [...oldProducts, productArray],
    });
  };

  onSubmit(e) {
    e.preventDefault();
    //console.log(this.state.orders);
    const newOrder = {
      //bill: this.state.bill,
      client: this.state.client,
      cmdDate: this.state.cmdDate,
      cmdNum: this.state.cmdNum,
      //orders: this.state.orders,
      details: this.state.details,
      total: this.state.total,
      valide: this.state.valide,
      table: this.state.table,
    };
    console.log(newOrder);
    this.props.createOrder(newOrder, this.props.history);
  }
  onSelectTable = (e) => {
    e.preventDefault();
    this.setState({ table: { id: e.target.value } });
  };
  onSelectClient = (e) => {
    e.preventDefault();
    this.setState({ client: { id: e.target.value } });
  };
  render() {
    const { categories } = this.props.categories;
    const { products } = this.props.products;
    const { orders } = this.state;
    const { tables } = this.props.tables;
    const { clients } = this.props.clients;
    console.log(clients);
    return (
      <div className="content-wrapper">
        <div>
          <div className="register">
            <div class="container">
              <div class="row">
                <div class="col">
                  <p className="lead">List of Clients</p>
                  <select
                    className="form-control"
                    aria-label="Default select"
                    onChange={this.onSelectClient}
                  >
                    <option selected>Open this select menu</option>
                    {clients.map((client) => (
                      <option value={client.id}>
                        {client.firstName} {client.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p className="lead">List of Tables</p>
                  <select
                    className="form-control"
                    aria-label="Default select"
                    onChange={this.onSelectTable}
                  >
                    <option selected>Table N:</option>
                    {tables.map((table) => (
                      <option value={table.id}>{table.tablenum}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
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
                            data-productPrice={product.price}
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
  orders: state.orders,
  tables: state.tables,
  clients: state.clients,
  //productsCategory: state.productCategory,
});
export default connect(mapStateToProps, {
  createOrder,
  getCategories,
  getProducts,
  getTables,
  getClients,
  //getProductByCategory,
})(AddOrders);
