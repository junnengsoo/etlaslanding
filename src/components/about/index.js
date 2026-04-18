import React from "react";
import "./index.css";

export default function AboutSection() {
  return (
    <div id='about' className="about_section">
      <div className="about_txt" data-animate>
        <h4>About Us</h4>
        <p>
          We are a team of engineers and security professionals who strive to
          create better products for our users.
        </p>
        <p>
          With experience across a broad range of technology, we believe security
          should be delivered to users with ease and simplicity.
        </p>
        <p>
          Etlas is part of the product portfolio of Integrated Security
          Solutions. Incorporated in 2000, we have a track record of consulting,
          designing and building security and digital solutions for users in
          multiple industries.
        </p>
        <button><a href="https://isssecurity.sg">Learn More</a></button>
      </div>
    </div>
  );
}
