import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menus from "./Menus";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="container nav flexBox jcspb h-100">
        <Link to="/" className="brand-logo">
          SabziMandi
        </Link>
        <div className="nav-items">
          <Link className="nav-member-links" to="/login">
            Login
          </Link>
          <Link className="nav-member-links" to="/signup">
            SignUp
          </Link>
          <div
            onClick={handleClick}
            className={click ? "menu-btn open" : "menu-btn"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <Menus click={click} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
