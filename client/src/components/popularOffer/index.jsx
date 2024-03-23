import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PopularOffers = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>OUR POPULAR OFFERS</h1>
              <p className="lead">Turn rare treats into repeats</p>
              <div className="offer-details">
                <ul>
                  <li>
                    <i className="fas fa-money-bill-wave text-primary"></i> Get
                    20% off instant discount up to 100 on an order of ₹129 and
                    above
                  </li>
                  <li>
                    <i className="fas fa-calendar-day text-primary"></i>{" "}
                    Applicable only on Fridays
                  </li>
                </ul>
                <p className="valid-till">
                  Offer Validity: Till 31 March, 2024
                </p>
              </div>
              <a href="#" className="btn btn-primary">
                Know More
              </a>
            </div>

            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="https://avitex.vn/html/finatex/assets/images/blog/item9.png"
                className="img-fluid animated imgRadius"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularOffers;
