import React from "react";
import "./Header.css";
import TemporaryDrawer from "./TemporaryDrawer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar">
        <button type="button" className="btn btn-outline-info">
          <div className="menuIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              left="5%"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                className="menu"
              />
            </svg>
          </div>
        </button>

        <ul className="nav-links">
          <div className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to="/Former" target="_blank">
                Form +
              </Link>
            </li>
            <li>
              <Link to="/Profile" target="_blank">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "40px" , cursor:"pointer"}} />
             Edit-Profile
             </Link>
            </li>

          </div>
        </ul>
      </nav>

    </>
  );
}

export default Header;
/*       <div className="containder">
        <div className="header">
          { <TemporaryDrawer></TemporaryDrawer> }
          { <img src="images/survey.jpg" className="survey1"></img> }
          <nav>
            {<div className="header_info">
              <img className="picture" src="images/survey.jpg"></img>
            </div> }
            <div>
              <div className="hovicon effect-8">
                <div className="menuIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                    left="5%"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      className="menu"
                    />
                  </svg>
                </div>
              </div>

              <button className="btn btn-info mx-3">Home</button>
              <button className="btn btn-info mx-3">About</button>
              <button className="btn btn-info mx-3">Contact Us</button>

              <button type="button" className="btn btn-outline mx-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <input className="search" type="text" placeholder="   search" />
            </div>
          </nav>
        </div>
      </div> */
