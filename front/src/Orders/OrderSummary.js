import React, { Component } from "react";
import $ from "jquery";
import { findDOMNode, render } from "react-dom";
import { bindActionCreators } from "redux";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /*<button onClick={this.printReceipt}>Print Receipt</button>
  printReceipt() {
    window.print();
  }
  */

  onClick(e) {
    $("ul li.orderline").each(function () {
      $(this).css("background-color", "");
      $(this).removeAttr("selected");
    });
    $(e.target).css("background-color", "#b8b1b0");
    $(e.target).attr("selected", "selected");
  }

  render() {
    let total = 0;
    let billDetail = Object.keys(this.props.orders).map((order) => {
      if (
        this.props.orders[order] > 0 &&
        this.props.orders[order] != undefined
      ) {
        //console.log('[orderSummary] props.orders',props.orders);
        //console.log("[orderSummary] props.details", props.details);
        total += this.props.orders[order] * this.props.details[order];
        return (
          <li className="orderline" onClick={this.onClick} key={order.id}>
            <span className="product-name" order-name={order}>
              {order}
            </span>
            <span className="price">
              {this.props.orders[order] * this.props.details[order]} Dh
            </span>
            <br />
            <em className="quantity">{this.props.orders[order]}</em>
            <span> </span>Units at {this.props.details[order]} Dh/ Units
          </li>
        );
      }
    });

    let totalAmount = (
      <div class="summary clearfix">
        <div class="line">
          <div class="entry total">
            <span class="badge">Total: </span>
            <span class="value" id="total">
              {total}
            </span>{" "}
            Dh
          </div>
        </div>
      </div>
    );
    return (
      <div className="order">
        <ul class="orderlines">{billDetail}</ul>
        <hr />
        {totalAmount}
      </div>
    );
  }
}

export default OrderSummary;
