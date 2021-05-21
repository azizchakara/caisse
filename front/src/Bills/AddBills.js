import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBill } from "../BillsActions/BillsActions";
import classnames from "classnames";
import { getOrders } from "../OrderActions/OrderActions";
import "./Bill.css";

class AddBills extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  constructor() {
    super();
    this.state = {
      billDate: "",
      billNumber: "44444",
      type: "",
      order: "",
      errorsbillDate: "",
      errorsbillNumber: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    console.log("ggeg");
    this.setState({ [e.target.name]: e.target.value });
  }
  onSelectOrder = (e) => {
    console.log("what");
    this.setState({ order: { id: e.target.value } });
  };
  onSubmit(e) {
    e.preventDefault();
    const { billDate, billNumber, total, type } = this.state;
    if (billDate === "") {
      this.setState({
        errorsbillDate: " bill's Date field is Required !",
      });
    }
    if (billNumber === "") {
      this.setState({
        errorsbillNumber: " bill's number  field is Required !",
      });
    }
    const newBill = {
      billDate: this.state.billDate,
      billNumber: this.state.billNumber,
      type: this.state.type,
      order: this.state.order,
    };
    console.log(this.state);
    this.props.createBill(newBill, this.props.history);
  }
  render() {
    const { errorsbillDate, errorstype } = this.state;
    const { orders } = this.props.orders;
    return (
      <div className="content-wrapper">
        <div>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <br />
                  <p className="lead text-center">Add Bill</p>
                  <div className="screen-content">
                    <div class="main-content">
                      <div className="left-content">
                        <div class="paymentmethods-container">
                          <div class="paymentlines"></div>
                          <div class="paymentmethods">
                            <div class="button paymentmethod">
                              <div class="payment-name">Cash</div>
                            </div>
                            <div class="button paymentmethod">
                              <div class="payment-name">Bank</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-content">
                        <section class="paymentlines-container">
                          <div class="paymentlines-empty">
                            <div class="total">£ 18.90</div>
                            <div class="message">
                              {" "}
                              Please select a payment method.{" "}
                            </div>
                          </div>
                        </section>
                        <div className="payment-buttons-container">
                          <section className="payment-numpad">
                            <div className="numpad">
                              <button className="input-button number-char">
                                1
                              </button>
                              <button className="input-button number-char">
                                2
                              </button>
                              <button className="input-button number-char">
                                3
                              </button>
                              <br />
                              <button className="input-button number-char">
                                4
                              </button>
                              <button className="input-button number-char">
                                5
                              </button>
                              <button className="input-button number-char">
                                6
                              </button>
                              <br />
                              <button className="input-button number-char">
                                7
                              </button>
                              <button className="input-button number-char">
                                8
                              </button>
                              <button className="input-button number-char">
                                9
                              </button>
                              <br />
                              <button className="input-button number-char">
                                +/-
                              </button>
                              <button className="input-button number-char">
                                0
                              </button>
                              <button className="input-button number-char">
                                .
                              </button>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="date"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsbillDate,
                        })}
                        placeholder="Category Name"
                        name="billDate"
                        onChange={this.onChange}
                      />
                      <p>{errorsbillDate}</p>
                    </div>
                    <div className="form-group">
                      <select
                        onChange={this.onChange}
                        name="type"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorstype,
                        })}
                      >
                        <option selected>Payment Type</option>
                        <option>cheque</option>
                        <option>cash</option>
                      </select>
                      <p>{errorstype}</p>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        onChange={this.onSelectOrder}
                        name="order"
                      >
                        <option key="0" selected>
                          Select an order
                        </option>
                        {orders.map((order) => {
                          return <option key={order.id}>{order.cmdNum}</option>;
                        })}
                      </select>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                      value="Confirm"
                    />
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
AddBills.propTypes = {
  createBill: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  orders: state.order,
});
export default connect(mapStateToProps, { createBill, getOrders })(AddBills);
