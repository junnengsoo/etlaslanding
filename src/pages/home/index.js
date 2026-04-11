import React from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import './index.css'
import ourCodeImg  from  '../../asset/etlasBoard.png'
import MessageForm from "../../components/messageForm";
import AboutSection from "../../components/about";

export default function Home (){
    return(
        <div className="home_page">
            <Navbar/>

            <Banner/>
            <Features/>

            <div id='solution' className="our_code">
                <div className="our_code_inner">
                    <div className="our_code_img">
                        <img alt='' src={ourCodeImg} />
                    </div>
                    <div className="ourCode_txt">
                        <h4>Our Code, Our Hardware</h4>
                        <p>Our control boards are designed and developed in-house by Etlas engineers – we own our source code and hardware. This provides you with the customisability for complex requirements. </p>
                    </div>
                </div>
            </div>

            <AboutSection/>
            <MessageForm/>

            <Footer/>
        </div>
    )
}
