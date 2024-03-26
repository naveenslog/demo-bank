import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "bold",
              }}
            >
              Services
            </h2>
            <p>
              Magnam dolores commodi suscipit eius consequatur ex aliquid fug
            </p>
          </div>

          <div className="row">
            <div className="single-box col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="20"
                    width="20"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>

                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div className="single-box col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="20"
                    width="20"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
                <h4 className="title">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div className="single-box col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="20"
                    width="20"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
                <h4 className="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div className="single-box col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="20"
                    width="20"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
