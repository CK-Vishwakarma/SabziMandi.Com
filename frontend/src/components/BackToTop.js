import React from "react";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import "./BackToTop.scss";
const BackToTop = () => {
  return (
    <div className="back-to-top-btn" title="back to top">
      {document.body.scrollTop > 20 ? (
        <IoIosArrowDropupCircle />
      ) : (
        <IoIosArrowDropdownCircle />
      )}
    </div>
  );
};

export default BackToTop;
