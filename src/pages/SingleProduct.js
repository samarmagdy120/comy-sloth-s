import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UseProductContext } from "../context/product-context";

const SingleProduct = () => {
  console.log(useParams);
  // const { id } = useParams();
  // const {
  //   single_products_error: error,
  //   single_products_loading: loading,
  //   single_product,
  //   fetchSingleProduct,
  // } = UseProductContext();

  // useEffect(() => {
  //   fetchSingleProduct(`${url}${id}`);
  // }, [id]);
  return (
    <Wrapper>
      <div className="section-center">
        <div>
          <ProductImage />
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default SingleProduct;
