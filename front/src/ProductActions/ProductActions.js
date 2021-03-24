import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  DELETE_PRODUCT,
} from "../products/Types";

export const createProduct = (product, history) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/products", product);
  history.push("/products");
};
export const getProducts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/products/all");
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data,
  });
};
export const getProduct = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/products/${id}`);
  dispatch({
    type: GET_PRODUCT,
    payload: res.data,
  });
};
export const getProductByCategory = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/products/category/${id}`);
  dispatch({
    type: GET_PRODUCT_BY_CATEGORY,
    payload: res.data,
  });
};
export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/products/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};
