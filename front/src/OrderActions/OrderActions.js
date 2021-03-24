import axios from "axios";
import { GET_ORDERS } from "../Orders/Types";

export const getOrders = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/orders/all");
  dispatch({
    type: GET_ORDERS,
    payload: res.data,
  });
};
