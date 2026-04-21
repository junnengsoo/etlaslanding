import React, { useEffect } from "react";
import Banner from "../../components/banner";
import Clients from "../../components/clients";
import Features from "../../components/features";
import Industries from "../../components/industries";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import './index.css'
import ourCodeImg from '../../asset/etlasBoard.png'
import MessageForm from "../../components/messageForm";
import AboutSection from "../../components/about";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Home() {
    useScrollAnimation();

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="home_page">
            <Navbar />

            <Banner />
            <Clients />
            <Features />
            <Industries />

            <div id='solution' className="our_code">
                <div className="our_code_inner">
                    <div className="our_code_img" data-animate>
                        <img alt='' src={ourCodeImg} />
                    </div>
                    <div className="ourCode_txt" data-animate style={{'--anim-delay': '0.15s'}}>
                        <h4>Our Code, Our Hardware</h4>
                        <p>Our controller boards are designed and developed in-house by Etlas engineers – we own our source code and hardware. This provides you with the customisability for complex requirements.</p>
                    </div>
                </div>
            </div>

            <AboutSection />
            <MessageForm />

            <Footer />
        </div>
    )
}
