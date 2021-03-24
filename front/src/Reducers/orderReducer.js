import { GET_ORDERS } from "../Orders/Types";

const initialState = {
  orders: [],
  order: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}
