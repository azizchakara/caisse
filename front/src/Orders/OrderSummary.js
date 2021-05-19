import React, { Component } from "react";
import $ from "jquery";

const OrderSummary = (props) => {
  let total = 0;
  /*<button onClick={this.printReceipt}>Print Receipt</button>
  /*printReceipt() {
    window.print();
  }
  */
  const onSelect = () => {};

  let billDetail = Object.keys(props.orders).map((order) => {
    if (props.orders[order] > 0 && props.orders[order] != undefined) {
      //console.log('[orderSummary] props.orders',props.orders);
      //console.log("[orderSummary] props.details", props.details);
      total += props.orders[order] * props.details[order];
      return (
        <li className="orderline" onSelect={props.onSelectLi}>
          <span className="product-name" order-name={order}>
            {order}
          </span>
          <span className="price">
            {props.orders[order] * props.details[order]}
          </span>
          <br />
          <em className="quantity">{props.orders[order]}</em>
          <span> </span>Units at {props.details[order]} / Units
        </li>
      );
    }
  });

  let totalAmount = (
    <div class="summary clearfix">
      <div class="line">
        <div class="entry total">
          <span class="badge">Total: </span>
          <span class="value">{total} Dh</span>
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
};

export default OrderSummary;
