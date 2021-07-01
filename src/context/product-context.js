import axios from "axios";
import React, { useEffect, useContext, useReducer } from "react";
import { product_url as url } from "../utils/constants";
import reducer from "../reducers/product-reducer";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILES,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_FAILES,
} from "../actions";

const ProductContext = React.createContext();
const initialState = {
  products_error: false,
  products_loading: false,
  products: [],
  featured_products: [],
  single_products_error: false,
  single_products_loading: false,
  single_product: {},
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProduct = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILES });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const singleProduct = response.data;
      // console.log(singleProduct);
      dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILES });
    }
  };
  useEffect(() => {
    fetchProduct(url);
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, fetchProduct, fetchSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
