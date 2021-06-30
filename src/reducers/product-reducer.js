import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILES,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_FAILES,
} from "../actions";

const ProductReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products: action.payload,
      featured_products,
      products_loading: false,
    };
  }

  if (action.type === GET_PRODUCTS_FAILES) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCTS_BEGIN) {
    return { ...state, single_products_loading: true };
  }
  if (action.type === GET_SINGLE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      single_products_loading: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCTS_FAILES) {
    return {
      ...state,
      single_products_loading: false,
      single_products_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default ProductReducer;
