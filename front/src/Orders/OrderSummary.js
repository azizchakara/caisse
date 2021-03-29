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
      console.log(props.orders);
      return (
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">{order}</div>
            <span class="badge bg-primary rounded-pill">
              {props.orders[order]}
            </span>
            <i class="fas fa-plus"></i>
            <i class="fas fa-minus"></i>
          </li>
        </ol>
      );
    }
  });
};

export default OrderSummary;
