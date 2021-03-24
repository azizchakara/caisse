import { GET_BILLS, GET_BILL, DELETE_BILL } from "../BillsActions/Types";

const initialState = {
  bills: [],
  bill: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
        bills: action.payload,
      };
    case GET_BILL:
      return {
        ...state,
        bill: action.payload,
      };
    case DELETE_BILL:
      return {
        ...state,
        bills: state.bills.filter((bill) => bill.id !== action.payload),
      };
    default:
      return state;
  }
}
