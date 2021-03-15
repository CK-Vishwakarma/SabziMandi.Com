import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import data from "../../Data";
import BackToTop from "../../components/BackToTop";

const Products = () => {
  return (
    <div className="container products-page">
      <div className="category-section">
        <Link to="/products" className="categoty-links">
          All
        </Link>
        <Link to="/products" className="categoty-links">
          Fruits
        </Link>
        <Link to="/products" className="categoty-links">
          Vegetables
        </Link>
      </div>
      <div className="products-card-grid">
        {data.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
      <BackToTop />
    </div>
  );
};

export default Products;
