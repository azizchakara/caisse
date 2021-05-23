import React, { Component } from "react";
import $ from "jquery";
import { findDOMNode, render } from "react-dom";
import { bindActionCreators } from "redux";

class PrintInvoiceBill extends Component {
  constructor(props) {
    super(props);
    //this.onClick = this.onClick.bind(this);
  }
  /*<button onClick={this.printReceipt}>Print Receipt</button>
  printReceipt() {
    window.print();
  }
  */

  render() {
    console.log("props print", this.props.arrayBill);
    let billDetail = Object.values(this.props.arrayBill).map((bill, key) => {
      console.log("key", key, "bill arrat", bill["name"]);
      /*bill.map((index, order) =>
        console.log("index", index, "order", bill["name"])
      );*/
      let priceProduct = bill["name"][1] * bill["name"][2];
      return (
        <div key={key}>
          <div>{bill["name"][0]}</div>
          <span></span>
          <div class="pos-receipt-left-padding">
            {bill["name"][1]} x {bill["name"][2]}
            <span class="price_display pos-receipt-right-align">
              {priceProduct}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div>
        {billDetail}
        <hr />
      </div>
    );
  }
}

export default PrintInvoiceBill;
