import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const PopularProduct = () => {
  return (
    <>
      <section className="d-flex align-items-center my-4">
        <div className="container">
          <div className="heads">OUR</div>
          <div className="lead" style={{ fontWeight: 900, fontSize: "36px" }}>
            POPULAR PRODUCTS
          </div>
          <div className="hrLine"></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="row col-lg-6 d-flex mt-4">
              {/* Description */}
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <div className="offer-details">
                  <div className="title-popular-prod">STAR HOME LOAN</div>

                  <div className="text-dark  font-weight-bold headingsecond  card-small-heading-popularProduct mb-2 mb-sm-0 mb-md-2 my-lg-1 my-xl-2">
                    ROI 8.30% p.a. onwards
                  </div>

                  <p className="valid-till">
                    Provides loans to purchase a Plot for construction of a
                    House, to
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  Know More
                </a>
              </div>

              {/* IMAGE */}
              <div
                className="col-lg-6 order-1 order-lg-2 "
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="https://bankofindia.co.in/documents/20121/135441/home-loan.jpg/614be8b0-ecbd-b7fb-cb9c-8bd0518285e9?t=1662115679860"
                  className="img-fluid animated imgRadiusLeft"
                  alt="Product"
                />
              </div>
            </div>
            <div className="row col-lg-6 d-flex mt-4">
              {/* Description */}
              <div className="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex flex-column justify-content-center">
                <div className="offer-details">
                  <div className="title-popular-prod">EDUCATION LOAN</div>

                  <div className="text-dark  font-weight-bold headingsecond  card-small-heading-popularProduct mb-2 mb-sm-0 mb-md-2 my-lg-1 my-xl-2">
                    ROI 8.30% p.a. onwards
                  </div>

                  <p className="valid-till">
                    Provides loans to purchase a Plot for construction of a
                    House, to
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  Know More
                </a>
              </div>

              {/* IMAGE */}
              <div
                className="col-lg-6 order-2 order-lg-1"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="https://bankofindia.co.in/documents/20121/135441/home-loan.jpg/614be8b0-ecbd-b7fb-cb9c-8bd0518285e9?t=1662115679860"
                  className="img-fluid animated imgRadiusLeft"
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
