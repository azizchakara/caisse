import axios from "axios";
import { GET_CATEGORIES, GET_CATEGORY, DELETE_CATEGORY } from "./Types";
import { GET_ERRORS } from "../Actions/types";

export const createCategory = (category, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/categories", category);
    history.push("/categories");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getCategories = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/categories/all");
  dispatch({
    type: GET_CATEGORIES,
    payload: res.data,
  });
};

export const getCategory = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/categories/${id}`);
  dispatch({
    type: GET_CATEGORY,
    payload: res.data,
  });
};

export const deleteCategory = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/categories/${id}`);
  dispatch({
    type: DELETE_CATEGORY,
    payload: id,
  });
};
