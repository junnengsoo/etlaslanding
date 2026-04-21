import React from "react";
import "./index.css";

export default function AboutSection() {
  return (
    <div id='about' className="about_section">
      <div className="about_txt" data-animate>
        <h4>About Us</h4>
        <p>
          Built by a team with roots in Singapore's security industry since 2000, Etlas brings together decades of hands-on SI experience with modern software engineering. Our founders come from established players in the Singapore security space, and we started Etlas to do things differently — delivering smarter, more adaptable security systems without the complexity or cost of legacy solutions.
        </p>
      </div>
    </div>
  );
}
