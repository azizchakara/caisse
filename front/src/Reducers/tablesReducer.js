import { GET_TABLES, GET_TABLE } from "../Tables/Types";

const initialState = {
  tables: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TABLES:
      return {
        ...state,
        tables: action.payload,
      };
    case GET_TABLE:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
}
