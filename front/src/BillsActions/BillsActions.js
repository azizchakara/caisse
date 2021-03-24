import axios from "axios";
import { GET_ERRORS } from "../Actions/types";
import { GET_BILLS, GET_BILL, DELETE_BILL } from "../BillsActions/Types";

export const createBill = (bill, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/bills", bill);
    history.push("/bills");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const getBills = (page, limit) => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/bills/all");
  dispatch({
    type: GET_BILLS,
    payload: res.data,
  });
};
export const getBill = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/bills/${id}`);
  dispatch({
    type: GET_BILL,
    payload: res.data,
  });
};
export const deleteBill = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/bills/${id}`);
  dispatch({
    type: DELETE_BILL,
    payload: id,
  });
};
