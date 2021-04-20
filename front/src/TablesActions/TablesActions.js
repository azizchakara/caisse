import axios from "axios";
import { GET_TABLES } from "../Tables/Types";

export const getTables = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/tables/all");
  dispatch({
    type: GET_TABLES,
    payload: res.data,
  });
};
export const createTable = (table, history) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/tables", table);
  history.push("/tables");
};
