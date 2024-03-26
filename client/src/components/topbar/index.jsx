import React from "react";
import "./styles.css";

function TopBar() {
  return (
    <div className="top_bar">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row">
            <div className="top_bar_contact_item">
              <div className="top_bar_icon">
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png" alt="" />
              </div>
              +91 9823 132 111
            </div>
            <div className="top_bar_contact_item">
              <div className="top_bar_icon">
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png" alt="" />
              </div>
              <a href="mailto:fastsales@gmail.com">contact@bbbootstrap.com</a>
            </div>
            <div className="top_bar_content ml-auto">
              <div className="top_bar_menu">
                <ul className="standard_dropdown top_bar_dropdown">
                  <li>
                    <a href="#">English<i className="fas fa-chevron-down"></i></a>
                    <ul>
                      <li><a href="#">Italian</a></li>
                      <li><a href="#">Spanish</a></li>
                      <li><a href="#">Japanese</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">$ US dollar<i className="fas fa-chevron-down"></i></a>
                    <ul>
                      <li><a href="#">EUR Euro</a></li>
                      <li><a href="#">GBP British Pound</a></li>
                      <li><a href="#">JPY Japanese Yen</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="top_bar_user">
                <div className="user_icon">
                  <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg" alt="" />
                </div>
                <div><a href="#">Register</a></div>
                <div><a href="#">Sign in</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
