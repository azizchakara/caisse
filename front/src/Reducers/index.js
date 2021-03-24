import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clientReducer from "./clientReducer";
import categoryErrorReducer from "./categoryErrorReducer";
import CategoryReducer from "./CategoryReducer";
import ingredientReducer from "./ingredientReducer";
import billReducer from "./billReducer";
import productReducer from "./productReducer";
import productsByCategory from "./productReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  errors: errorReducer,
  client: clientReducer,
  errros: categoryErrorReducer,
  category: CategoryReducer,
  ingredient: ingredientReducer,
  bill: billReducer,
  product: productReducer,
  productCategory: productsByCategory,
  order: orderReducer,
});
