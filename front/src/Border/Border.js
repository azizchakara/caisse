import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../categoryActions/CategoryActions";
import { getProducts } from "../ProductActions/ProductActions";
import $ from "jquery";
import "./Border.css";
import OrderSummary from "../Orders/OrderSummary";
class Border extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
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
    console.log("hello");
    $("#result").value += value;
  }
  onClick(e) {
    let value = e.target.value;
    let oldOrders = this.state.orders;
    let categoryId = e.target.getAttribute("data-categoryId");
    $("ul li").each(function () {
      if ($(this).attr("data-categoryId") === categoryId) {
        $("[data-categoryId=" + categoryId + "]").css("display", "block");
        $("div img").each(function () {
          if ($(this).attr("data-categoryId") === categoryId) {
            let productName = $(this).attr("data-productName");
            if (!oldOrders[productName]) {
              oldOrders[productName] = 0;
            }
          }
        });
        console.log(oldOrders);
      } else if ($(this).attr("data-categoryId") !== categoryId) {
        //$(this).css("display", "none");
        $("div[data-categoryId=" + $(this).attr("data-categoryId") + "]").css(
          "display",
          "none"
        );
      }
    });

    $("div span").each(function () {
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
    const oldOrders = this.state.orders;
    const oldCount = oldOrders[productName];
    oldOrders[productName] = oldCount + 1;
    let totalArray = [];
    console.log(oldOrders);

    let productArray = {
      name: productName,
      quantity: oldOrders[productName],
      //price: productPrice * oldOrders[productName],
    };
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
    //this.props.createOrder(newOrder, this.props.history);
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
                    <h4 className="card-text">This Order Is Empty</h4>
                    <div class="order-container">
                      <OrderSummary orders={this.state.orders} />
                    </div>
                  </div>
                </div>
                <div className="border">
                  <div className="first-row">
                    <input
                      type="text"
                      name="result"
                      className="col-6"
                      id="result"
                      value=""
                      placeholder="Result"
                      readOnly
                    />
                    <input
                      type="submit"
                      className="col-6"
                      defaultValue="Payment"
                      onClick={this.clearScreen}
                      id="submit"
                    />
                  </div>
                  <div className="second-row">
                    <input
                      type="button"
                      className="col-3"
                      value={1}
                      onClick={this.onClick}
                      id="one"
                    />
                    <input
                      type="button"
                      value={2}
                      className="col-3"
                      onClick={this.onClick}
                      id="two"
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={3}
                      id="three"
                      onClick={this.onClick}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="+"
                      onClick={this.onClick}
                    />
                  </div>
                  <div className="third-row">
                    <input
                      type="button"
                      className="col-3"
                      value={4}
                      id="four"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={5}
                      id="five"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={6}
                      id="six"
                      onClick={this.onClick}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="Price"
                      onClick={this.onClick}
                    />
                  </div>
                  <div className="fourth-row">
                    <input
                      type="button"
                      className="col-3"
                      value={7}
                      id="seven"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={8}
                      id="eight"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={9}
                      id="nine"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      defaultValue="Clear"
                      onClick={this.onClick}
                    />
                  </div>
                  <div className="fifth-row">
                    <input
                      className="col-3"
                      type="button"
                      value="/"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value={0}
                      id="zero"
                      onClick={this.onClick}
                    />
                    <input
                      type="button"
                      className="col-3"
                      value="."
                      onClick={this.onClick}
                    />
                    <input
                      className="col-3"
                      type="button"
                      value="="
                      onClick={this.onClick}
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
                        style={{ display: "none" }}
                      >
                        <div className="card rounded">
                          <div className="card-image">
                            <span className="badge bg-warning badg">
                              ${product.price}
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
                              <p className="desc">{product.price}Dh</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
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
  //productsCategory: state.productCategory,
});

export default connect(mapStateToProps, { getCategories, getProducts })(Border);
