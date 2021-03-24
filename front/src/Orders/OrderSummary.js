import React, { Component } from "react";

const OrderSummary = (props) => {
  console.log(props);
  return Object.keys(props.orders).map((order) => {
    if (props.orders[order] > 0) {
      return (
        <p>
          {order} - QTE: {props.orders[order]}
        </p>
      );
    }
  });
};

export default OrderSummary;
