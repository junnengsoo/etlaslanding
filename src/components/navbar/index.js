import React, { useState, useEffect } from "react";
import './index.css'
import logo from '../../asset/logoImg.png'
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

function useScrollToTop() {
    useEffect(() => {
        if (window.scrollY > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);
}

export default function Navbar() {

    useScrollToTop();

    const [navState, setNavState] = useState(false);
    const close = () => setNavState(false);

    return (
        <OutsideClickHandler onOutsideClick={close}>
            {/* ── Announcement bar ── */}
            <div className="top_bar">
                <div className="top_bar_inner">
                    <span>Sales: </span>
                    <a href="tel:+6594569932">+65 9456 9932</a>
                </div>
            </div>

            {/* ── Main navbar ── */}
            <div className="nav">
                <div className="nav_inner">
                    <input type="checkbox" checked={navState} id="nav-check" readOnly />
                    <div className="nav-header">
                        <div className="nav-title">
                            <img alt='' src={logo} />
                            Etlas
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label onClick={() => setNavState(s => !s)} htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="/products">Products</a>
                        <a href="/partners">Partners</a>
                        <a href="/pricing">Pricing</a>
                        <button onClick={close}><a href="#message_form_section">Enquiry</a></button>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}
