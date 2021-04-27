import React, { Component } from "react";

const OrderSummary = (props) => {
  console.log(props);

  /*<button onClick={this.printReceipt}>Print Receipt</button>
  /*printReceipt() {
    window.print();
  }
  */

  let totalAmount = () => {
    return (
      <div class="summary clearfix">
        <div class="line">
          <div class="entry total">
            <span class="badge">Total: </span>
            <span class="value">00.00 DH</span>
          </div>
        </div>
      </div>
    );
  };
  let amount = (
    <div class="summary clearfix">
      <div class="line">
        <div class="entry total">
          <span class="badge">Total: </span>
          <span class="value">00.00 DH</span>
        </div>
      </div>
    </div>
  );

  let billDetail = Object.keys(props.orders).map((order) => {
    if (props.orders[order] > 0) {
      console.log(props.orders);
      return (
        <ul class="orderlines">
          <li class="orderline">
            <span class="product-name">
              {order}
              <span> </span>
            </span>
            <span class="price">{props.orders[order]}</span>
            <ul class="info-list">
              <li class="info">
                <em>{props.orders[order]}</em>
                <span> </span>Units at 5.10 DH / Units
              </li>
            </ul>
          </li>
        </ul>
      );
    }
  });
  return (
    <div className="order">
      {billDetail}
      <hr />
      {amount}
    </div>
  );
};

export default OrderSummary;
