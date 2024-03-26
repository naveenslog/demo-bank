import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./styles.css";

function LandingSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container mb-4">
        <div className="row">
          {/* Description Container */}
          <div className="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center desc">
            <h5>Bank Of India</h5>
            <h1 data-aos="fade-up">BOI CRAEDIT CARD SCHEME</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Open Saving Account ONLINE
            </h2>

            <div className="container">
              <div className="row align-items-start justify-content-start mb-4 ">
                <div>
                  <span className="me-4">
                    <i className="fas fa-check-circle text-primary"></i>Free
                    Debit Card issuance
                  </span>
                </div>
                <div>
                  <span className="me-4">
                    <i className="fas fa-balance-scale text-primary"></i>
                    No minimum balance requirement
                  </span>
                </div>
                <div>
                  <span>
                    <i className="fas fa-clock text-primary"></i> 24/7 Account
                    Opening at your fingertips
                  </span>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div
            className="col-lg-8 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="https://avitex.vn/html/finatex/assets/images/component/gateway1.png"
              className="img-fluid animated imgRadius"
              alt=""
            />
          </div>

          {/* Social Links Container */}
          {/* <div className="social-links fixed-bottom end-0 mb-4">
            <div className="row-lg-1 row-md-6">
              <div className="social-links d-flex flex-column">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
