import React from "react";
import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { FcRight } from "react-icons/fc";
const Login = () => {
  return (
    <div className="container">
      <div className="form-center ">
        <h1>Login</h1>
        <p className="flexBox jcc">
          Don’t have an account?
          <Link to="/signup" className="flexBox">
            <span>Register</span>
            <span>
              <RiLoginCircleFill />
            </span>
          </Link>
        </p>

        <form action="" className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="text" placeholder="Password*" id="password" required />
          </div>
          <h5>Fields that are marked with * sign are required.</h5>
          <div className="form-group">
            <input type="button" value="Login" className="inp-btn" />
          </div>
          <h4 className="flexBox jcc">
            Forgot your password?
            <Link to="/signup" className="flexBox">
              <span>Reset password</span>
              <span>
                <FcRight />
              </span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
