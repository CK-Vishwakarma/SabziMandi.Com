import React from "react";

import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="container-full h-100 header_fixed">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
