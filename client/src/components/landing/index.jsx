import React from "react";
// import { Button } from "react-bootstrap";
import "./styles.css"; 

function LandingSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
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
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
