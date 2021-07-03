import React from "react";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const FilterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filterProducts: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filterProducts } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      console.log("price-lowest");
    }
    if (sort === "price-highest") {
      console.log("price-highest");
    }
    if (sort === "name-a") {
      console.log("name-a");
    }
    if (sort === "name-z") {
      console.log("name-z");
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FilterReducer;
