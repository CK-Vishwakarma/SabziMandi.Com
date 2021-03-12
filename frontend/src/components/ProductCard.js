import React from "react";
import Rating from "./Rating";
import { BiRupee } from "react-icons/bi";

import "../components/ProductCard.scss";

const SingleProductCard = ({ product }) => {
  const {
    _id,
    name,
    category,
    image,
    price,
    quantity,
    rating,
    numReviews,
    description,
  } = product;
  return (
    <>
      <article className="product-card">
        <div className="product-card-frame">
          <img src={image} alt={name} className="product-card-img" />
        </div>
        <div className="card-details">
          <h1 className="card-title">{name}</h1>
          <p className="card-categoty">{category}</p>
          <div className="card-rating">
            <span className="card-rating-design">{rating}</span>
            <span>
              <Rating rating={rating} />
            </span>
            <span className="card-reviews">{numReviews} Reviews</span>
          </div>
          <div className="card-price flexBox">
            <BiRupee />
            <strong>{price}/Kg</strong>
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleProductCard;
