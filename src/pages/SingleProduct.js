import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import { single_product_url as url } from "../utils/constants";
import ProductImage from "../components/sigleProduct/ProductImage";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Stars from "../components/sigleProduct/Stars";
import AddToCart from "../components/sigleProduct/AddToCart";
import Error from "../components/Error";
import Loading from "../components/Loading";

const SingleProduct = () => {
  // console.log(useParams);

  const { id } = useParams();

  const {
    single_products_error: error,
    single_products_loading: loading,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  /*sigle_product like product */
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className=" product-center">
          <ProductImage images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price"> {price}</h5>
            <p className="desc"> {description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
