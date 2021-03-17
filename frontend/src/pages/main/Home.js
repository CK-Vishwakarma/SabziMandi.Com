import React from "react";
import Carousels from "../../components/Carousels";
import data from "../../Data";
import { clientList } from "../../Data";
import Rating from "../../components/Rating";
import { BiRupee } from "react-icons/bi";
import colAdd1 from "../../images/adds/ta1.webp";
import colAdd2 from "../../images/adds/ta2.webp";
import { Link } from "react-router-dom";
const Home = () => {
  const deals = data.products.filter((product) => product.deals === true);

  return (
    <>
      <Carousels />
      <hr />
      <div className="container-full mx-auto ">
        <div className="container mx-auto">
          <div className="deals">
            <section className="deals-heading">
              <h1>Today's Deals</h1>
              <p>Get upto 50% off.</p>
            </section>
            <hr />
            <section className="deal-products">
              {deals.map((deal) => {
                const {
                  _id,
                  name,
                  category,
                  image,
                  price,
                  rating,
                  numReviews,
                } = deal;

                return (
                  <article className="product-card">
                    <Link
                      to={`products/product${_id}`}
                      className="product-card-link"
                    >
                      <div className="product-card-frame">
                        <img
                          src={image}
                          alt={name}
                          className="product-card-img"
                        />
                      </div>
                      <div className="card">
                        <div className="card-details">
                          <Link to={`products/product${_id}`}>
                            <h1 className="card-title">{name}</h1>
                          </Link>
                          <p className="card-categoty">{category}</p>
                          <div className="card-rating">
                            <span className="card-rating-design">{rating}</span>
                            <span>
                              <Rating rating={rating} />
                            </span>
                            <span className="card-reviews">
                              {numReviews} Reviews
                            </span>
                          </div>
                          <div className="card-price flexBox">
                            <BiRupee />
                            <strong>{price}/Kg</strong>
                          </div>
                        </div>
                        <button className="btn add-to-cart-btn">
                          Add To Cart
                        </button>
                      </div>
                    </Link>
                  </article>
                  // <article className="product-card">
                  //   <Link
                  //     to={`products/product${_id}`}
                  //     className="product-card-link"
                  //   >
                  //     <div className="product-card-frame">
                  //       <img
                  //         src={image}
                  //         alt={name}
                  //         className="product-card-img"
                  //       />
                  //     </div>
                  //     <div className="card-details">
                  //       <Link to={`products/product${_id}`}>
                  //         <h1 className="card-title">{name}</h1>
                  //       </Link>
                  //       <p className="card-categoty">{category}</p>
                  //       <div className="card-rating">
                  //         <span className="card-rating-design">{rating}</span>
                  //         <span>
                  //           <Rating rating={rating} />
                  //         </span>
                  //         <span className="card-reviews">
                  //           {numReviews} Reviews
                  //         </span>
                  //       </div>
                  //       <div className="card-price flexBox">
                  //         <BiRupee />
                  //         <strong>{price}/Kg</strong>
                  //       </div>
                  //     </div>
                  //   </Link>
                  // </article>
                );
              })}
            </section>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-full bg-LGB ">
        <div className="container ">
          <div className="adds">
            <div className="col1  ">
              <Link to="/products">
                <img src={colAdd1} alt="add" />
              </Link>
            </div>
            <div className="col1">
              <Link to="/products">
                <img src={colAdd2} alt="add" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full  ">
        <div className="container">
          <div className="clients">
            <section className="clients-heading">
              <h1>Our Clients</h1>
              <p>Always happy to help.</p>
            </section>
            <hr />

            <section className="clients-logos">
              {clientList.map((clients) => {
                const { _id, logo, name } = clients;
                return (
                  <div className="client-div" key={_id}>
                    <div className="client-logo">{logo}</div>
                    <p>{name}</p>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
