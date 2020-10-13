import React from "react";
import "./Login.css";
import Nav from "./Nav";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <Nav />
      <div className="login_content">
        <div className="circle"></div>
        <div className="circle1"></div>
        <h1>Listening is everything</h1>
        <h5>Millions of songs and podcasts. No credit card needed.</h5>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
      <div className="footer">
        <div className="content">
          <img />
          <ul></ul>
          <ul></ul>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
