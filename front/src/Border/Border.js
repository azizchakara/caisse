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
class Border extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
    this.props.getClients();
    this.props.getTables();
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
      selected: false,
      showCustomer: false,
      showTable: false,
      discount: null,
      qteDetails: [],
    };
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
  };
  onSelectLi = (e) => {
    console.log("hello");
  };
  onClickButton = (e) => {
    let orderName = $("ul li.orderline:last-child")
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
    let orderName = $("ul li.orderline:last-child")
      .find("span.product-name")
      .attr("order-name");
    const oldDetails = this.state.details;
    console.log("details[orderName]", oldDetails[orderName]);
    console.log("discount ", discountValue / 100);
    console.log(
      "discountValue ",
      oldDetails[orderName] * (discountValue / 100)
    );
    //let priceAfterDiscount = oldDetails[orderName] * (discountValue / 100);
    oldDetails[orderName] = oldDetails[orderName] * (discountValue / 100);
    this.setState({ details: oldDetails });
  };
  onSubmit(e) {
    e.preventDefault();
    //console.log(this.state.orders);
    const newOrder = {
      //bill: this.state.bill,
      client: this.state.client,
      cmdDate: this.state.cmdDate,
      cmdNum: this.state.cmdNum,
      //qteDetails: this.state.qteDetails,
      details: this.state.qteDetails,
      total: this.state.total,
      valide: this.state.valide,
      table: this.state.table,
    };
    console.log("details", newOrder);
    this.props.createOrder(newOrder, this.props.history);
    //this.props.history("/addbills");
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
        <div className="container">
          <form onSubmit={this.onSubmit}>
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
                        clicked={this.onSelectLi}
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
                      type="submit"
                      className="col-12"
                      //onClick={this.clearScreen}
                      id="submit"
                      value="Go To Payment"
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
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.category,
  products: state.product,
  clients: state.clients,
  tables: state.tables,
  //productsCategory: state.productCategory,
});

export default connect(mapStateToProps, {
  createOrder,
  getCategories,
  getProducts,
  getClients,
  getTables,
})(Border);
