import React, {useState} from "react";
import './index.css'
import logo from '../../asset/logoImg.png'
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

export default function Navbar() {
    const [navState, setNavState] = useState(false)

    return (
        <OutsideClickHandler onOutsideClick={() => setNavState(false)}>
            <div className="nav-wrapper">
                <nav className="nav">
                    {/* Left – logo */}
                    <div className="nav-logo">
                        <img alt='' src={logo} />
                        Etlas
                    </div>

                    {/* Center – links (desktop) */}
                    <div className={`nav-links${navState ? ' nav-links--open' : ''}`}>
                        <a onClick={() => setNavState(false)} href="/products">Products</a>
                        <a onClick={() => setNavState(false)} href="/about">About Us</a>
                        <a onClick={() => setNavState(false)} href="/partners">Partners</a>
                        <a onClick={() => setNavState(false)} href="/pricing">Pricing</a>
                    </div>

                    {/* Right – CTA */}
                    <div className="nav-right">
                        <button onClick={() => setNavState(false)}>
                            <a href="#message_form_section">Get demo</a>
                        </button>

                        {/* Hamburger (mobile) */}
                        <button className="nav-hamburger" onClick={() => setNavState(s => !s)} aria-label="Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>
        </OutsideClickHandler>
    )
}
