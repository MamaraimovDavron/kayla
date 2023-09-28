import { Component } from "react";
import "./app.css";
import kayla from "./img/1.png";

class Middle extends Component {
  render() {
    return (
      <div className="middle-main">
        <div className="middle">
          <h1>Praise & Reviews</h1>
          <div className="main-box">
            <div className="box">
              <h1>’’</h1>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <span>
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </span>
            </div>

            <div className="box">
              <h1>’’</h1>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <span>‘Gripping storytelling’ The Good Read Blog</span>
            </div>

            <div className="box">
              <h1>’’</h1>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <span>
                Grifith’s voice tells the story of all women “The Seattle Post
                Review”
              </span>
            </div>
          </div>
        </div>

        <div className="footer">
          <h1>See Upcoming Appearances</h1>
          <p className="p">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy.
          </p>

          <div className="footer-box">
            <p>
              January 18th 2035, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </p>
            <a href="!#">Join</a>
          </div>

          <div className="footer-box">
            <p>
              January 31st 2035, The Good Read Club, Online Conversation with
              Kayla Griffith, 8PM - 9PM EST
            </p>
            <a href="!#">Join</a>
          </div>

          <div className="footer-box">
            <p>
              March 2nd 2035, Otto Cafe, Online Book Reading With Kayla
              Griffith, 3PM - 4PM EST
            </p>
            <a href="!#">Join</a>
          </div>

          <div className="kayla">
            <img src={kayla} alt="" />
            <h1>About Kayla Griffith</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>

            <a href="!#">Read More</a>
          </div>

          <div className="copyright">
            <p>
              © 2035 by K.Griffith. Powered and secured by <a href="!#">Wix</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Middle;
