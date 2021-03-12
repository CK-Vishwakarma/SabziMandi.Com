import React from "react";

import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="container-full h-100">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
