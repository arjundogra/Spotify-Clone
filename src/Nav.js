import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_dark"}`}>
      <div>
        <img
          className={`logo ${show && "white"}`}
          src="https://seeklogo.com/images/S/spotify-logo-8726BE1D50-seeklogo.com.png"
          alt="Spotify"
        />
      </div>
      <div>
        <ul className="nav_links">
          <li className={`${show && "white"}`}>Premium</li>
          <li className={`${show && "white"}`}>Help</li>
          <li className={`${show && "white"}`}>Download</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
