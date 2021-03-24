import {
  GET_INGREDIENTS,
  GET_INGREDIENT,
  DELETE_INGREDIENTS,
} from "../IngredientActions/Types";

const initialState = {
  ingredients: [],
  ingredient: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
      };

    case DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
