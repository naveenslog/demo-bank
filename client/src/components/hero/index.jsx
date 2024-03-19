import React from 'react';
import {Button} from "react-bootstrap";
import './styles.css'; // Make sure to create a corresponding CSS file

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="text-container">
        <h1>Open Banking & PSD2 sandbox</h1>
        <p className="description">
          Sandboxes provided by banks make it <strong>impossible</strong> to test
          financial applications properly. We have developed MockBank so
          you <strong>do not have to compromise</strong> between effort and quality.
        </p>
        <p className="developed-by">
          Developed by developers for developers!
        </p>
        <Button variant="outline-success" style={{width: "350px !important"}}>Sign Up</Button>
      </div>
      <div className="image-container">
        {/* Include your image here */}
        <img src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/649c3383b678fdb6afe6cb94_05.png" alt="Developer at Work" />
      </div>
    </div>
  );
}

export default HeroSection;
