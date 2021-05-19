import { GET_DETAILS } from "../Orders/Types";
const initialState = {
  details: [],
  detail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
