import React from "react";
import './index.css'
import logo from '../../asset/logoImg.png'

export default function Footer(){
    return(
        <div className="footer_section">
            <div className="footer_inner">

                <div className="footer_brand">
                    <div className="footer_logo">
                        <img alt='Etlas' src={logo} />
                        <span>Etlas</span>
                    </div>
                    <p className="footer_tagline">Unified security systems — access control, surveillance, and attendance in one platform.</p>
                </div>

                <div className="footer_links">
                    <h6>Product</h6>
                    <a href="#etlas_features">Access Control</a>
                    <a href="#etlas_features">Video Surveillance</a>
                    <a href="#etlas_features">Visitor Management</a>
                    <a href="#etlas_features">Time &amp; Attendance</a>
                    <a href="#etlas_features">Integrations</a>
                </div>

                <div className="footer_links">
                    <h6>Company</h6>
                    <a href="/#contact">Get in Touch</a>
                    <a href="/how-it-works">How It Works</a>
                </div>


            </div>

            <div className="footer_bottom">
                <p>© 2026 Etlas. All Rights Reserved.</p>
            </div>
        </div>
    )
}
