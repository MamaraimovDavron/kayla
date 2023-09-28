import React from "react";
import { Component } from "react";
import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTShirt } from "@fortawesome/free-solid-svg-icons";
import author from "./img/2.png";
import bookImg from "./img/3.png";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="icons">
          <FontAwesomeIcon id="envelope" icon={faEnvelope} />
          <FontAwesomeIcon id="tshirt" icon={faTShirt} />
        </div>

        <div className="author">
          <div className="img">
            <img src={author} alt="" />
          </div>
          <div className="text">
            <h1>Kayla Griffith</h1>
            <h3>Award Winning Author</h3>
          </div>
        </div>

        <div className="book">
          <div className="left-side">
            <span>
              New Release <div className="romb"></div>
            </span>
            <h1>The Swan Isle</h1>
            <h2>(2035)</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>

            <h3>Order Now</h3>

            <div className="links">
              <a href="!#">Amazon</a>
              <a href="!#">Google</a>
              <a href="!#">ibooks</a>
            </div>
          </div>
          <div className="right-side">
            <img src={bookImg} alt="" />
          </div>
        </div>

        <header>
          <nav>
            <a href="!#" id="title">
              K.Griffith
            </a>

            <ul>
              <li>
                <a href="!#">Appearances</a>
              </li>
              <li>
                <a href="!#">Books</a>
              </li>
              <li>
                <a href="!#">News</a>
              </li>
              <li>
                <a href="!#">About</a>
              </li>
              <li>
                <a href="!#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
