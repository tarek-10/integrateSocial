import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../ContextApi/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Login.css";
const Login = () => {

  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
      );
    };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Tarek Social</h3>
            <span className="loginDesc">
              connect with friends and the world around you on tarekSocial
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                required
                type={"email"}
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                required
                minLength={6}
                type={"password"}
                className="loginInput"
                ref={password}
              />
              <button className="loginButton" type="submit" disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "  Create a new Account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
