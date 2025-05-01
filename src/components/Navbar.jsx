import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //style

  const [mode, setMode] = useState("DarkMode");

  const DarkMode = () => {
      if (mode === "DarkMode") {
        document.body.style.backgroundColor="grey"
        let card1 = document.querySelectorAll(".card1");
        card1.forEach((card) => {
          card.style.backgroundColor = "black";
          card.style.color = "white";
        });
        setMode("LightMode");
      } 
      if(mode=="LightMode") {
        document.body.style.backgroundColor="white"
        let card1 = document.querySelectorAll(".card1");
        card1.forEach((card) => {
          card.style.backgroundColor = "white";
          card.style.color = "black";
        });
        setMode("DarkMode")
      }
    
      // Apply to all cards
     
   
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary p-2 fixed-top">
        <Link className="navbar-brand" to="/">
          NewsApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>

          <div
            className="classv"
            onClick={DarkMode}
            style={{ cursor: "pointer" }}
          >
            {mode}
          </div>
        </div>
      </nav>
    </div>
  );
}
