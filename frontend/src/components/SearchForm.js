import React from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <form action="" method="get" className="form-control">
        <div className="form-item">
          <label htmlFor="location">Location </label>
          <input type="text" name="location" id="location" required />
        </div>
        <div className="form-item">
          <label htmlFor="city">City </label>
          <input type="text" name="city" id="city" required />
        </div>
        <div className="form-item">
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" required />
        </div>
        <div className="form-item">
          <input type="submit" className="btn dark" value="Search Property !" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
