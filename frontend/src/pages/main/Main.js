import React from "react";
import { Route, Switch } from "react-router";
import "./Main.scss";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";
import Login from "./Login";
import SignUp from "./SignUp";
import ProductCard from "../../components/ProductCard";

const Main = () => {
  return (
    <div className="main">
      <div className="container-full">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductCard} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
