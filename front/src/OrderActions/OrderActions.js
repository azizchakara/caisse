import axios from "axios";
import { GET_ORDERS, GET_ORDER } from "../Orders/Types";

export const getOrders = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/orders/all");
  dispatch({
    type: GET_ORDERS,
    payload: res.data,
  });
};

export const getOrder = (id, history) => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/orders/${id}");
  dispatch({
    type: GET_ORDER,
    payload: res.data,
  });
};

export const createOrder = (order, history) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/orders", order);
  //history.push("/orders");
};
