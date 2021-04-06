import React, { Component } from "react";

const OrderSummary = (props) => {
  console.log(props);

  /*<button onClick={this.printReceipt}>Print Receipt</button>
  /*printReceipt() {
    window.print();
  }
  */

  return Object.keys(props.orders).map((order) => {
    if (props.orders[order] > 0) {
      //console.log(props.orders);
      return (
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">{order}</div>
            <div>{props.orders[order]}</div>
            <i class="fas fa-plus"></i>
            <i class="fas fa-minus"></i>
          </li>
        </ol>
      );
    }
  });
};

export default OrderSummary;
