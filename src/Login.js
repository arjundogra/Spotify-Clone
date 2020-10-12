import React from "react";
import "./Login.css";
import Nav from "./Nav";

function Login() {
  return (
    <div className="login">
      <Nav />
      <div className="login_content">
        <div className="circle"></div>
        <h1>Listening is everything</h1>
        <h5>Millions of songs and podcasts. No credit card needed.</h5>
        <a>LOGIN WITH SPOTIFY</a>
      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default Login;
