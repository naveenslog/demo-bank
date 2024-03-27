import React from "react";
import "./styles.css";

const PopularOffers = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1
                style={{
                  fontSize: "35px",
                }}
              >
                OUR POPULAR OFFERS
              </h1>
              <p className="lead">Turn rare treats into repeats</p>
              <div className="offer-details">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        height: "10px",
                        width: "10px",
                        marginRight: "7.5px",
                      }}
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>{" "}
                    Get 20% off instant discount up to 100 on an order of ₹129
                    and above
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        height: "10px",
                        width: "10px",
                        marginRight: "7.5px",
                      }}
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    Applicable only on Fridays
                  </li>
                </ul>
                <p
                  className="valid-till"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  Offer Validity: Till 31 March, 2024
                </p>
              </div>
              {/* <a href="#" className="btn btn-primary">
                Know More
              </a> */}
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
