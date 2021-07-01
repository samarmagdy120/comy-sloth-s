import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>
          {" "}
          design your <br />
          comfort zone
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link to="/products" className="btn hero-btn">
          {" "}
          shop now
        </Link>
      </div>
      <div className="img-container">
        <img src={heroBcg} alt="main-img" className="main-img" />
        <img src={heroBcg2} alt="accent-img" className="accent-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  align-items: center;
  height: calc(100vh - 5rem);
  .content h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 49px;
    letter-spacing: var(--letter-space-btn);
    margin-bottom: 40px;
  }

  .content p {
    color: var(--clr-gray);
    font-size: 1.25rem;
    line-height: 45px;
    max-width: 45em;
  }

  .hero-btn {
    background-color: var(--clr-primary1);
    padding: 10px 27px;
    color: var(--clr-primary4);
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: var(--letter-space-btn);
    margin-top: 14px;
  }
  .img-container {
    position: relative;
  }
  .img-container::before {
    content: "";
    position: absolute;
    width: 10%;
    height: 80%;
    background-color: var(--clr-primary3);
    bottom: 0px;
    left: -34px;
    border-radius: var(--radius);
  }

  .main-img {
    position: relative;
    width: 100%;
    height: 550px;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .accent-img {
    position: absolute;
    left: -86px;
    bottom: 0px;
    width: 39%;
    border-radius: var(--radius);
  }

  @media (max-width: 992px) {
    grid-template-columns: auto;
    .img-container {
      display: none;
    }
  }
`;
export default Hero;
