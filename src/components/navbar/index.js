import React, { useState, useEffect } from "react";
import './index.css'
import logo from '../../asset/logoImg.png'
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { goToContact } from '../../utils/goToContact';

function goToSection(e, id) {
    e.preventDefault();
    if (window.location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = `/#${id}`;
    }
}

function useScrollToTop() {
    useEffect(() => {
        if (window.scrollY > 0 && !window.location.hash) {
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
                    <a href="tel:+6589243354">+65 8924 3354</a>
                </div>
            </div>

            {/* ── Main navbar ── */}
            <div className="nav">
                <div className="nav_inner">
                    <input type="checkbox" checked={navState} id="nav-check" readOnly />
                    <div className="nav-header">
                        <a href="/" className="nav-title">
                            <img alt='' src={logo} />
                            Etlas
                        </a>
                    </div>
                    <div className="nav-btn">
                        <label onClick={() => setNavState(s => !s)} htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="/#etlas_features" onClick={e => { close(); goToSection(e, 'etlas_features'); }}>Solutions</a>
                        <a href="/#industries" onClick={e => { close(); goToSection(e, 'industries'); }}>Industries</a>
                        <a href="/how-it-works">How It Works</a>
                        <button onClick={e => { close(); goToContact(e); }}>Get in Touch</button>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}
