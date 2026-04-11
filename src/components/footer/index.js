import React from "react";
import './index.css'
import logo from '../../asset/logoImg.png'

export default function Footer(){
    return(
        <footer className="footer_section">
            <div className="footer">

                {/* Brand column */}
                <div className="footer_brand">
                    <div className="footer_logo">
                        <img alt='' src={logo} />
                        <span>Etlas</span>
                    </div>
                    <p className="footer_tagline">Unified access control for every building, door, and user.</p>
                </div>

                {/* Product links */}
                <div className="footer_links">
                    <h6>Product</h6>
                    <a href="#etlas_features">Unified Platform</a>
                    <a href="#etlas_features">Access from Anywhere</a>
                    <a href="#etlas_features">Flexibility</a>
                    <a href="#etlas_features">Modularity</a>
                    <a href="#solution">Our Hardware</a>
                </div>

                {/* Company links */}
                <div className="footer_links">
                    <h6>Company</h6>
                    <a href="#about">About Us</a>
                    <a href="/partners">Partners</a>
                    <a href="https://isssecurity.sg" target="_blank" rel="noreferrer">Integrated Security Solutions</a>
                </div>

                {/* Contact links */}
                <div className="footer_links">
                    <h6>Contact</h6>
                    <a href="#message_form_section">Get a Demo</a>
                    <a href="#message_form_section">Get Quote</a>
                    <a href="https://wa.me/6594569932/?text=Hi!" target="_blank" rel="noreferrer">WhatsApp Us</a>
                </div>

            </div>

            <div className="footer_nav">
                <p>© 2025 Etlas. All Rights Reserved</p>
                <div>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                </div>
            </div>
        </footer>
    )
}
