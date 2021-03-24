import axios from "axios";
import { GET_ERRORS, GET_CLIENTS, GET_CLIENT, DELETE_CLIENT } from "./types";

export const createClient = (client, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/clients", client);
    history.push("/clients");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getClients = (page, limit) => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/clients/all");
  dispatch({
    type: GET_CLIENTS,
    payload: res.data,
  });
};

export const getClient = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/clients/${id}`);
  dispatch({
    type: GET_CLIENT,
    payload: res.data,
  });
};
export const deleteClient = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/clients/${id}`);
  dispatch({
    type: DELETE_CLIENT,
    payload: id,
  });
};
