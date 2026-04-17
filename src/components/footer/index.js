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
                    <p className="footer_tagline">Unified physical security — access control, surveillance, and attendance in one platform.</p>
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
                    <a href="/partners">Partners</a>
                    <a href="https://isssecurity.sg" target="_blank" rel="noreferrer">Integrated Security Solutions</a>
                </div>


            </div>

            <div className="footer_bottom">
                <p>© 2026 Etlas. All Rights Reserved.</p>
            </div>
        </div>
    )
}
