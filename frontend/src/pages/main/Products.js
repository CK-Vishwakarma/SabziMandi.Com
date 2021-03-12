import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import ProductCard from "../../components/ProductCard";
import data from "../../Data";

const Products = () => {
  return (
    <div className="container">
      <div className="category-section">
        <Link className="categoty-links">All</Link>
        <Link className="categoty-links">Fruits</Link>
        <Link className="categoty-links">Vegetables</Link>
      </div>
      <div className="products-card-grid">
        {data.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
