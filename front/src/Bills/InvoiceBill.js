import React, { Component } from "react";
import { connect } from "react-redux";
import "./invoice.css";
import { getBill } from "../BillsActions/BillsActions";
import { getClient } from "../Actions/ClientActions";
import { getOrder } from "../OrderActions/OrderActions";

class InvoiceBill extends Component {
  componentDidMount() {
    console.log("id ->", this.props.match.params);
    //const { id } = this.props.match.params;
    this.props.getBill(47, this.props.history);
    //this.props.getOrder(bill.order.id, this.props.history);
  }
  render() {
    const { all } = this.props.all;
    //const { bill } = this.props.bill;
    //const { client } = this.props.client;
    //const order = this.props.bill.order;
    console.log("bill", all);
    return (
      <div className="content-wrapper">
        <div className="container px-0">
          <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <span className="text-sm text-grey-m2 align-middle">
                      To:
                    </span>
                    <span className="text-600 text-110 text-blue align-middle">
                      Aziz chakara
                    </span>
                  </div>
                </div>

                <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                  <hr className="d-sm-none" />
                  <div className="text-grey-m2">
                    <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                      Invoice
                    </div>
                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span className="text-600 text-90">ID:</span>
                    </div>
                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span className="text-600 text-90">Issue Date:</span>{" "}
                    </div>
                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span className="text-600 text-90">Status:</span>{" "}
                      <span className="badge badge-warning badge-pill px-25">
                        Paid
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="row text-600 text-white bgc-default-tp1 py-25">
                  <div className="d-none d-sm-block col-1">#</div>
                  <div className="col-9 col-sm-5">Product</div>
                  <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                  <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                  <div className="col-2">Amount</div>
                </div>

                <div className="text-95 text-secondary-d3">
                  <div className="row mb-2 mb-sm-0 py-25">
                    <div className="d-none d-sm-block col-1">1</div>
                    <div className="col-9 col-sm-5">Domain registration</div>
                    <div className="d-none d-sm-block col-2">2</div>
                    <div className="d-none d-sm-block col-2 text-95">$10</div>
                    <div className="col-2 text-secondary-d2">$20</div>
                  </div>

                  <div className="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                    <div className="d-none d-sm-block col-1">2</div>
                    <div className="col-9 col-sm-5">Web hosting</div>
                    <div className="d-none d-sm-block col-2">1</div>
                    <div className="d-none d-sm-block col-2 text-95">$15</div>
                    <div className="col-2 text-secondary-d2">$15</div>
                  </div>

                  <div className="row mb-2 mb-sm-0 py-25">
                    <div className="d-none d-sm-block col-1">3</div>
                    <div className="col-9 col-sm-5">Software development</div>
                    <div className="d-none d-sm-block col-2">--</div>
                    <div className="d-none d-sm-block col-2 text-95">
                      $1,000
                    </div>
                    <div className="col-2 text-secondary-d2">$1,000</div>
                  </div>

                  <div className="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                    <div className="d-none d-sm-block col-1">4</div>
                    <div className="col-9 col-sm-5">Consulting</div>
                    <div className="d-none d-sm-block col-2">1 Year</div>
                    <div className="d-none d-sm-block col-2 text-95">$500</div>
                    <div className="col-2 text-secondary-d2">$500</div>
                  </div>
                </div>

                <div className="row border-b-2 brc-default-l2"></div>

                <div className="row mt-3">
                  <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                    Extra note such as company or payment information...
                  </div>

                  <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                    <div className="row my-2">
                      <div className="col-7 text-right">SubTotal</div>
                      <div className="col-5">
                        <span className="text-120 text-secondary-d1">
                          $2,250
                        </span>
                      </div>
                    </div>

                    <div className="row my-2">
                      <div className="col-7 text-right">Tax (10%)</div>
                      <div className="col-5">
                        <span className="text-110 text-secondary-d1">$225</span>
                      </div>
                    </div>

                    <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                      <div className="col-7 text-right">Total Amount</div>
                      <div className="col-5">
                        <span className="text-150 text-success-d3 opacity-2">
                          $2,475
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <span className="text-secondary-d1 text-105">
                    Merci Pour votre visite
                  </span>
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
  //bill: state.bill,
  //client: state.client,
  //order: state.order,
  //errors: state.errors,
});

export default connect(mapStateToProps, { getBill })(InvoiceBill);
