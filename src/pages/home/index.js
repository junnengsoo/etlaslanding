import React from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import Industries from "../../components/industries";
import Trust from "../../components/trust";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import AboutSection from "../../components/about";
import MessageForm from "../../components/messageForm";
import './index.css'
import ourCodeImg from '../../asset/etlasBoard.png'

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Banner/>

            <div className="home_page">

                {/* All-in-one solution (2-col) */}
                <div id='solution' className="our_code">
                    <div className="our_code_img">
                        <img alt='' src={ourCodeImg} />
                    </div>
                    <div className="ourCode_txt">
                        <p className="ourCode_eyebrow">All-in-one solution</p>
                        <h4>Unify hardware and software</h4>
                        <p>Our control boards are designed and developed in-house by Etlas engineers — we own our source code and hardware. This gives you full customisability for even the most complex requirements, with no vendor lock-in.</p>
                        <div className="ourCode_ctas">
                            <a href="#etlas_features">See the benefits →</a>
                            <a href="#about">About us →</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Dark features grid */}
            <Features/>

            {/* Light industry cards */}
            <Industries/>

            {/* Trust strip */}
            <Trust/>

            {/* About */}
            <div className="home_page">
                <AboutSection/>
            </div>

            {/* Demo / contact form */}
            <MessageForm/>

            <Footer/>
        </div>
    )
}
