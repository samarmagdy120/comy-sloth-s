import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseProductContext } from "../context/product-context";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import Error from "./Error";
import Loading from "./Loading";

const FeaturedProduct = () => {
  const {
    featured_products: featured,
    products_error: error,
    products_loading: loading,
    products,
  } = UseProductContext();
  console.log(products);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="title-feature">
        <h2>Featured Products</h2>
        <hr className="underline" />
      </div>
      <div className="feature-section section-center">
        {featured.map((feature) => {
          return (
            <div className="feature-item">
              <div className="overlay">
                <Link className="search-icon">
                  <FaSearch />
                </Link>
              </div>
              <img src={feature.image} alt="" />
            </div>
          );
        })}
      </div>
      <Link>all products</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-gray1);

  .title-feature h2 {
    text-align: center;
    padding-top: 4.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: var(--letter-space-btn);
  }

  .feature-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin-top: 55px;
  }
  .feature-item {
    position: relative;
  }
  .feature-item .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0;
    border-radius: var(--radius);
    transition: all 0.4s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }

  .overlay .search-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: var(--clr-white);
    font-size: 1rem;
    background-color: var(--clr-primary1);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .feature-item img {
    position: relative;
    width: 100%;
    border-radius: var(--radius);
  }
`;
export default FeaturedProduct;
