import axios from "axios";
import {
  GET_ERRORS,
  GET_INGREDIENTS,
  GET_INGREDIENT,
  DELETE_INGREDIENTS,
} from "../IngredientActions/Types";

export const createIngredient = (ingredient, history) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/ingredients", ingredient);
  history.push("/ingredients");
};

export const getIngredients = (page, limit) => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/ingredients/all");
  dispatch({
    type: GET_INGREDIENTS,
    payload: res.data,
  });
};
export const getIngredient = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/ingredients/${id}`);
  dispatch({
    type: GET_INGREDIENT,
    payload: res.data,
  });
};

export const deleteIngredient = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/ingredients/${id}`);
  dispatch({
    type: DELETE_INGREDIENTS,
    payload: id,
  });
};
