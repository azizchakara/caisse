import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  DELETE_PRODUCT,
} from "../products/Types";

const initialState = {
  products: [],
  product: {},
  productsCategory: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productsCategory: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
