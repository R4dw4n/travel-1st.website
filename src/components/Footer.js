import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import './Footer.css'

// import '../App.css'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventur newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeHolder="your email"
            />
            <Button buttonStyle="btn--outline">SUBSCRIBE</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Carrer</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className="footer-link-items">
                <h2>Social Media</h2>
              <div className="social-media">
                <div className="social-media-wrap">
                  <ul className="social-icons">
                    <Link to='/sign-up'><i class="fa fa-facebook fa-2x"></i></Link>
                    <Link to='/'><i class="fa fa-twitter fa-2x"></i></Link>
                    <Link to='/'><i class="fa fa-instagram fa-2x"></i></Link>
                    <Link to='/'><i class="fa fa-linkedin fa-2x"></i></Link>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
