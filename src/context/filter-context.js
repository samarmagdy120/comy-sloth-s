import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";
import { useProductContext } from "./product-context";
import reducer from "../reducers/filter-reducer";
const FilterContext = createContext();
const initialState = {
  allProducts: [],
  filterProducts: [],
  grid_view: true,
  sort: "price-lowest",
};
const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    // dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
