import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../categoryActions/CategoryActions";
import { getProducts } from "../ProductActions/ProductActions";
import { getClients } from "../Actions/ClientActions";
import { getTables } from "../TablesActions/TablesActions";
import { createOrder } from "../OrderActions/OrderActions";
import $ from "jquery";
import "./Border.css";
import OrderSummary from "../Orders/OrderSummary";
import { render } from "react-dom";
import initiateState from "../initiateState";
import backspace from "./backspace.png";

class Border extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
    this.props.getClients();
    this.props.getTables();
    //this.props.getOrdersCount()
  }
  constructor() {
    super();
    this.state = initiateState;
    /*this.state = {
      cmdDate: "2021-01-30",
      cmdNum: "1200",
      //cmdNum: props.countOrders
      total: 0,
      valide: false,
      client: {},
      details: [],
      orders: {},
      table: {},
      selected: false,
      showCustomer: false,
      showTable: false,
      showNote: false,
      discount: null,
      qteDetails: [],
      note: "",
    };*/
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Clears the screen on click of C button.
  clearScreen() {
    $("#result").value = "";
  }
  // Displays entered value on screen.
  liveScreen(value) {
    $("#result").value += value;
  }
  onClick(e) {
    let value = e.target.value;
    let oldOrders = this.state.orders;
    let details = this.state.details;
    let categoryId = e.target.getAttribute("data-categoryId");

    $("ul li").each(function () {
      if ($(this).attr("data-categoryId") === categoryId) {
        $("[data-categoryId=" + categoryId + "]").css("display", "block");
        $("div img").each(function () {
          if ($(this).attr("data-categoryId") === categoryId) {
            let productName = $(this).attr("data-productName");
            let productPrice = $(this).attr("data-productPrice");
            if (!oldOrders[productName]) {
              oldOrders[productName] = 0;
            }
            if (!details[productName]) {
              details[productName] = productPrice;
            }
          }
        });
      } else if ($(this).attr("data-categoryId") !== categoryId) {
        //$(this).css("display", "none");
        $("div[data-categoryId=" + $(this).attr("data-categoryId") + "]").css(
          "display",
          "none"
        );
      }
    });
  }
  addProductsHandler = (e) => {
    $("ul li.orderline").each(function () {
      $(this).css("background-color", "");
    });
    this.setState({ selected: true });
    let productName = e.target.getAttribute("data-productName");
    let productId = e.target.getAttribute("data-productId");
    let productPrice = e.target.getAttribute("data-productPrice");
    let oldProducts = this.state.qteDetails;
    console.log("oldProducts", oldProducts);

    /*oldProducts.map((product) => {
      console.log("mapper", product);
    });*/

    const oldOrders = this.state.orders;
    const oldCount = oldOrders[productName];
    oldOrders[productName] = oldCount + 1;

    let productArray = {
      name: productName,
      quantity: oldOrders[productName],
      //price: productPrice * oldOrders[productName],
    };
    this.setState({
      qteDetails: [...oldProducts, productArray],
    });

    console.log("state", this.state);
  };
  onClickButton = (e) => {
    let orderName = $("ul.orderlines")
      .find("li.orderline[selected=selected]")
      .find("span.product-name")
      .attr("order-name");
    $("ul li.orderline").each(function () {
      $(this).css("background-color", "");
    });
    $("ul li.orderline:last-child").css("background-color", "#b8b1b0");
    const oldOrders = this.state.orders;
    oldOrders[orderName] = e.target.value;
    console.log("oldOrders", oldOrders);
    this.setState({ orders: oldOrders });
  };
  onApplyDiscount = (e) => {
    console.log("discount", e.target.value);
    let discountValue = $("#discount").val();
    let orderName = $("ul.orderlines")
      .find("li.orderline[selected=selected]")
      .find("span.product-name")
      .attr("order-name");
    $("ul.orderlines")
      .find("li.orderline[selected=selected]")
      .append(
        "<p id='discount-value'>With a <b>" +
          discountValue +
          "% </b>Discount</p>"
      );
    console.log("orderline selected", orderName);
    const oldDetails = this.state.details;
    /*console.log("details[orderName]", oldDetails[orderName]);
    console.log("discount ", discountValue / 100);
    console.log(
      "discountValue ",
      oldDetails[orderName] * (discountValue / 100)
    );*/
    oldDetails[orderName] = oldDetails[orderName] * (discountValue / 100);
    this.setState({ details: oldDetails });
  };
  onBack = () => {
    console.log("onBack", this.state);
    this.setState({
      showAddOrder: true,
      showBill: false,
      showPriceTag: false,
    });
  };
  onSelectPaymentType = (e) => {
    console.log("onSelectPaymentType", this.state);
    $(".paymentmethods .paymentmethod").each(function () {
      $(this).css("background-color", "");
    });
    $(".paymentmethods .button").each(function () {
      $(this).css("background-color", "");
    });
    $(".paymentmethods .paymentmethod .payment-name").css(
      "background-color",
      ""
    );
    if ((e.target.className = "payment-name")) {
      $(e.target).parent().css("background-color", "#a09191");
    }
    $(e.target).css("background-color", "#a09191");
    this.setState({
      showChange: true,
      showPriceTag: false,
      paymentLines: true,
      paymentLineSelected: $(e.target).text(),
    });
  };
  onSubractFromTotal = (e) => {
    let total = this.state.total;
    let subtractValue = $(e.target).text();
    console.log("subtractValue", subtractValue);
    let oldSubtractValue = this.state.subtractValue;
    let newSubtractValue = subtractValue.concat(oldSubtractValue);
    let result = total - newSubtractValue;
    let change = result < 0 ? result : 0;
    let remaining = result > 0 ? result : 0;
    console.log("result", result);
    //payment-status-remaining
    //payment-status-change
    change != 0
      ? $(".payment-status-change .amount").addClass("highlight")
      : $(".payment-status-change .amount").removeClass("highlight");
    remaining != 0
      ? $(".payment-status-remaining .amount").addClass("highlight")
      : $(".payment-status-remaining .amount").removeClass("highlight");
    this.setState({
      subtractValue: newSubtractValue,
      paymentLines: true,
      paymentLineSelected: "Cash",
      showChange: true,
      showPriceTag: false,
      change: Math.abs(change),
      remaining: Math.abs(remaining),
    });
  };
  uncheckPaymentMethod = () => {
    this.setState({
      showPriceTag: true,
      showChange: false,
      paymentLines: false,
    });
    $(".paymentmethods .button").each(function () {
      $(this).css("background-color", "");
    });
    $(".paymentmethods .paymentmethod .payment-name").css(
      "background-color",
      ""
    );
  };
  onBackspace = () => {
    //Remove css from payment methods
    $(".paymentmethods .paymentmethod").each(function () {
      $(this).css("background-color", "");
    });
    $(".paymentmethods .paymentmethod .payment-name").css(
      "background-color",
      ""
    );
    console.log("onBackspace", this.state);
    this.setState({
      showPriceTag: true,
      showChange: false,
      paymentLines: false,
      subtractValue: "",
    });
  };
  onToPaymentPage = () => {
    console.log("onToPaymentPage");
    let totalValue = $("#total").text();
    this.setState({
      showAddOrder: false,
      showBill: true,
      showPriceTag: true,
      showChange: false,
      total: totalValue,
    });

    //this.props.createOrder(newOrder, this.props.history);
    //this.props.history.push("/addbills");
  };
  onSaveOrder = () => {
    const newOrder = { ...this.state };
    this.setState({
      printBill: true,
      showAddOrder: false,
      showBill: false,
      showChange: false,
      showPriceTag: false,
    });
  };
  onSubmit(e) {
    e.preventDefault();
  }
  onSelectCustomer = (e) => {
    e.preventDefault();
    this.setState({ showCustomer: true });
  };
  onSetCustomer = (client) => {
    this.setState({ client: { id: client.id } });
    $(".customers-table tbody").each(function () {
      $(this).css("background-color", "");
    });
    $("tbody#" + `${client.id}`).css("background-color", "#b8b1b0");
  };
  onSelectTable = (e) => {
    e.preventDefault();
    this.setState({ showTable: true });
  };

  onAddNote = (e) => {
    e.preventDefault();
    this.setState({ showNote: true });
  };
  onShowPriceTag = () => {
    this.setState({ showPriceTag: true });
  };
  onSetTable = (table) => {
    this.setState({ table: { id: table.id } });
    $(".tables-table tbody").each(function () {
      $(this).css("background-color", "");
    });
    $("tbody#" + `${table.id}`).css("background-color", "#b8b1b0");
  };
  /*onSelectClient = (e) => {
    e.preventDefault();
    this.setState({ client: { id: e.target.value } });
  };*/
  render() {
    const { categories } = this.props.categories;
    const { products } = this.props.products;
    const { clients } = this.props.clients;
    const { tables } = this.props.tables;
    return (
      <div className="content-wrapper">
        <div className="">
          {this.state.showAddOrder && (
            <div className="row">
              <div className="col-4">
                <div
                  className="card text-left"
                  style={{
                    overflowY: "scroll",
                    height: "300px",
                    position: "relative",
                    border: "1px solid grey",
                  }}
                >
                  <div className="text-center">
                    <h4 className="text-center">
                      <i class="fas fa-shopping-cart"></i>
                    </h4>
                    {!this.state.selected && (
                      <h4 className="card-text">This Order Is Empty</h4>
                    )}
                    <div class="order-container">
                      <OrderSummary
                        orders={this.state.orders}
                        details={this.state.details}
                        //discount={this.state.discount}
                      />
                    </div>
                  </div>
                </div>
                <div className="border">
                  <div className="first-row">
                    <input
                      type="button"
                      name="customer"
                      className="col-6"
                      id="customer"
                      onClick={this.onSelectCustomer}
                      value="Select Customer"
                      readOnly
                      data-toggle="modal"
                      data-target="#customerModal"
                    />
                    <input
                      type="button"
                      className="col-6"
                      id="table"
                      onClick={this.onSelectTable}
                      value="Select Table"
                      id="table"
                      data-toggle="modal"
                      data-target="#tableModal"
                    />
                  </div>
                  <div className="first-row">
                    <input
                      type="text"
                      className="col-6"
                      onChange={this.onChange}
                      id="discount"
                      placeholder="Discount"
                    />
                    <input
                      type="button"
                      className="col-6"
                      id="apply-discount"
                      value="Apply discount"
                      onClick={this.onApplyDiscount}
                    />
                  </div>
                  <div className="first-row">
                    <input
                      className="col-6"
                      onClick={this.onToPaymentPage}
                      id="submit"
                      value="Go To Payment"
                    />
                    <input
                      type="button"
                      className="col-6"
                      onClick={this.onAddNote}
                      value="Add Note"
                      id="note"
                      data-toggle="modal"
                      data-target="#noteModal"
                    />
                  </div>
                  <div className="second-row">
                    <input
                      type="button"
                      className="col-3"
                      value={1}
                      onClick={this.onClickButton}
                      id="one"
                    />
                    <input
                      type="button"
                      value={2}
                      className="col-3"
                      onClick={this.onClickButton}
                      id="two"
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={3}
                      id="three"
                      onClick={this.onClickButton}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="+"
                      onClick={this.onClickButton}
                    />
                  </div>
                  <div className="third-row">
                    <input
                      type="button"
                      className="col-3"
                      value={4}
                      id="four"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={5}
                      id="five"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={6}
                      id="six"
                      onClick={this.onClickButton}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="Price"
                      onClick={this.onClickButton}
                    />
                  </div>
                  <div className="fourth-row">
                    <input
                      type="button"
                      className="col-3"
                      value={7}
                      id="seven"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={8}
                      id="eight"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={9}
                      id="nine"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      defaultValue="Clear"
                      onClick={this.onClickButton}
                    />
                  </div>
                  <div className="fifth-row">
                    <input
                      className="col-3"
                      type="button"
                      value="/"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={0}
                      id="zero"
                      onClick={this.onClickButton}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value="."
                      onClick={this.onClickButton}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="="
                      onClick={this.onClickButton}
                    />
                  </div>
                  <div className="bottom-buttons" />
                </div>
              </div>
              <div className="col-8">
                <div className="row" id="ads">
                  List of Categories
                  <ul class="nav nav-tabs col-12">
                    {categories.map((category) => (
                      <li
                        class="nav-link active border"
                        aria-current="page"
                        href="#"
                        classname="hover-shadow"
                        onClick={this.onClick}
                        style={{
                          width: 120,
                          margin: 10,
                        }}
                        data-categoryId={category.id}
                        alt={category.categoryName}
                      >
                        {category.categoryName}
                      </li>
                    ))}
                  </ul>
                  {
                    //!this.state.selected &&
                    products.map((product) => (
                      <div
                        className="col-md-2 mt-2"
                        data-productId={product.id}
                        data-productName={product.productName}
                        data-categoryId={product.category.id}
                        data-productPrice={product.price}
                        alt={product.productName}
                        style={{ display: "none", cursor: "pointer" }}
                      >
                        <div className="card rounded">
                          <div className="card-image">
                            <span className="badge bg-warning badg">
                              {product.price} Dh/Units
                            </span>
                            <img
                              className="img-fluid"
                              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/orange-juice-7627168.jpg?webp=true&quality=90&resize=620%2C310"
                              onClick={this.addProductsHandler}
                              data-productId={product.id}
                              data-productName={product.productName}
                              data-categoryId={product.category.id}
                              data-productPrice={product.price}
                              alt={product.productName}
                              id={product.category.id}
                            />
                          </div>
                          <div className="card-body text-center">
                            <div className="ad-title m-auto">
                              <p className="desc">{product.productName}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                {this.state.showCustomer && (
                  <div
                    class="modal fade"
                    id="customerModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="customerModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Select Customer Modal
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-12">
                              <table class="table customers-table">
                                <thead class="thead-dark">
                                  <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                {clients.map((client) => (
                                  <tbody id={client.id}>
                                    <td>
                                      {client.firstName} {client.lastName}
                                    </td>
                                    <td>{client.email}</td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() =>
                                          this.onSetCustomer(client)
                                        }
                                      >
                                        Set Customer
                                      </button>
                                    </td>
                                  </tbody>
                                ))}
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.showTable && (
                  <div
                    class="modal fade"
                    id="tableModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="tableModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Select Table Modal
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-12">
                              <table class="table tables-table">
                                <thead class="thead-dark">
                                  <tr>
                                    <th scope="col">Table Number</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                {tables.map((table) => (
                                  <tbody id={table.id}>
                                    <td>{table.id}</td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => this.onSetTable(table)}
                                      >
                                        Set Table
                                      </button>
                                    </td>
                                  </tbody>
                                ))}
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.showNote && (
                  <div
                    class="modal fade"
                    id="noteModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="noteModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-12">
                              <textarea></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {this.state.showBill && (
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <div className="screen-content">
                  <div class="top-content">
                    <div class="button back" onClick={this.onBack}>
                      <i class="fa fa-angle-double-left fa-fw"></i>
                      <span class="back_text">Back</span>
                    </div>
                    <div class="top-content-center">
                      <h1>Payment</h1>
                    </div>
                    <div class="button next" onClick={this.onSaveOrder}>
                      <span class="next_text">Validate</span>
                      <i class="fa fa-angle-double-right fa-fw"></i>
                    </div>
                  </div>
                  <div class="main-content">
                    <div className="left-content">
                      <div className="paymentmethods-container">
                        {this.state.paymentLines && (
                          <div class="paymentlines">
                            <div class="paymentline selected">
                              <div class="payment-name">
                                {this.state.paymentLineSelected}
                              </div>
                              <div class="payment-amount">
                                {this.state.subtractValue}
                              </div>
                              <div
                                aria-label="Delete"
                                title="Delete"
                                class="delete-button"
                                onClick={this.uncheckPaymentMethod}
                              >
                                <i class="fa fa-times-circle"></i>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="paymentmethods">
                          <div
                            className="button paymentmethod"
                            onClick={this.onSelectPaymentType}
                          >
                            <div className="payment-name">Cash</div>
                          </div>
                          <div
                            className="button paymentmethod"
                            onClick={this.onSelectPaymentType}
                          >
                            <div className="payment-name">Bank</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-content">
                      <section class="paymentlines-container">
                        {this.state.showChange && (
                          <div class="payment-status-container">
                            <div>
                              <div class="payment-status-remaining">
                                <span class="label">Remaining</span>
                                <span class="amount">
                                  {this.state.remaining} DH
                                </span>
                              </div>
                              <div class="payment-status-due">
                                <span class="label">Total Due</span>
                                <span>{this.state.total} DH</span>
                              </div>
                            </div>
                            <div>
                              <div class="payment-status-change">
                                <span class="label">Change</span>
                                <span class="amount">
                                  {this.state.change} DH
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {this.state.showPriceTag && (
                          <div class="paymentlines-empty">
                            <div class="total">{this.state.total} DH</div>
                            <div class="message">
                              {" "}
                              Please select a payment method.{" "}
                            </div>
                          </div>
                        )}
                      </section>
                      <div className="payment-buttons-container">
                        <section className="payment-numpad">
                          <div className="numpad">
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              1
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              2
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              3
                            </button>
                            <br />
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              4
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              5
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              6
                            </button>
                            <br />
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              7
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              8
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onSubractFromTotal}
                            >
                              9
                            </button>
                            <br />
                            <button className="input-button number-char">
                              +/-
                            </button>
                            <button className="input-button number-char">
                              0
                            </button>
                            <button
                              className="input-button number-char"
                              onClick={this.onBackspace}
                            >
                              <img
                                src={backspace}
                                width="24"
                                height="21"
                                alt="Backspace"
                              />
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.printBill && (
          <div className="row">
            <div className="default-view">
              <div className="pos-receipt-container">
                <div class="pos-receipt">
                  <br />
                  <div class="pos-receipt-contact">
                    <div>leukea</div>
                    <div>luke.belmar5@gmail.com</div>
                    <div class="cashier">
                      <div>--------------------------------</div>
                      <div>Served by luke belmar</div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="orderlines">
                    {Object.keys(this.state.orders).forEach((order) => (
                      <div>
                        cccc
                        <div>{order}</div>
                        <span></span>
                        <div class="pos-receipt-left-padding">
                          {this.state.orders[order]} x Price
                          <span class="price_display pos-receipt-right-align">
                            Total price of the product
                          </span>
                        </div>
                      </div>
                    ))}

                    <div>Whiteboard Pen</div>
                    <span></span>
                    <div class="pos-receipt-left-padding">
                      3 x 1.20
                      <span class="price_display pos-receipt-right-align">
                        3.60
                      </span>
                    </div>
                    <div>
                      Desk Organizer
                      <span class="price_display pos-receipt-right-align">
                        5.10
                      </span>
                    </div>
                    <span></span>
                    <div>Monitor Stand</div>
                    <span></span>
                    <div class="pos-receipt-left-padding">
                      3 x 3.19
                      <span class="price_display pos-receipt-right-align">
                        9.57
                      </span>
                    </div>
                    <div>Small Shelf</div>
                    <span></span>
                    <div class="pos-receipt-left-padding">
                      2 x 2.83
                      <span class="price_display pos-receipt-right-align">
                        5.66
                      </span>
                    </div>
                  </div>
                  <div class="pos-receipt-right-align">--------</div>
                  <br />
                  <div class="pos-receipt-amount">
                    {" "}
                    TOTAL <span class="pos-receipt-right-align">23.93 DH</span>
                  </div>
                  <br />
                  <br />
                  <div>
                    Cash<span class="pos-receipt-right-align">122.00</span>
                  </div>
                  <br />
                  <div class="pos-receipt-amount receipt-change">
                    {" "}
                    CHANGE <span class="pos-receipt-right-align">98.07 DH</span>
                  </div>
                  <br />
                  <div>
                    Exonere de TVA VENTES
                    <span class="pos-receipt-right-align">0.00</span>
                  </div>
                  <div>
                    {" "}
                    Total Taxes{" "}
                    <span class="pos-receipt-right-align">0.00 DH</span>
                  </div>
                  <div class="before-footer"></div>
                  <div class="after-footer"></div>
                  <br />
                  <div class="pos-receipt-order-data">
                    <div>Order 00001-001-0001</div>
                    <div>05/22/2021 13:59:32</div>
                  </div>
                </div>
              </div>
              <div class="actions">
                <h1>Click down below to receive your receipt?</h1>
                <div class="buttons">
                  <div class="button print">
                    <i class="fa fa-print"></i> Print Receipt{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.category,
  products: state.product,
  clients: state.clients,
  tables: state.tables,
  //countOrders: state.count
});

export default connect(mapStateToProps, {
  createOrder,
  getCategories,
  getProducts,
  getClients,
  getTables,
  //getOrdersCount()
})(Border);
