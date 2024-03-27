import React from "react";
import "./styles.css";

function Footer() {
  return (
    <>
      <footer className="footer-area footer-one">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-sm-12">
                <div className="f-about">
                  <div className="footer-logo">
                    <a href="/">
                      <img
                        src="https://bankofindia.co.in/o/boi-global-theme/images/boi/logos/boi_en_US_logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-4">
                <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Marketing</a>
                    </li>
                    <li>
                      <a href="/">Awards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4">
                <div className="footer-link">
                  <h6 className="footer-title">Services</h6>
                  <ul>
                    <li>
                      <a href="/">Products</a>
                    </li>
                    <li>
                      <a href="/">Business</a>
                    </li>
                    <li>
                      <a href="/">Developer</a>
                    </li>
                    <li>
                      <a href="/">Insights</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4">
                <div className="footer-contact">
                  <h6 className="footer-title">Help & Support</h6>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{
                          marginRight: "10px",
                        }}
                        fill="currentColor"
                        className="bi bi-pin-map"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                        />{" "}
                        <path
                          fillRule="evenodd"
                          d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                        />{" "}
                      </svg>{" "}
                      Madison Street, NewYork, USA
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{
                           marginRight: "10px",
                         }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-smartphone"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="14"
                          height="20"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                      +88 556 88545
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{
                          marginRight: "10px",
                        }}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{" "}
                      </svg>
                      support@ayroui.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-center
                  align-items-center
                  "
                >
                  <p className="text">
                    Copyright © 2024 Demo Bank. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
