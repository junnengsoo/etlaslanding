import React from "react"
import './index.css'
import hero_products from '../../asset/HeroProducts.png'
import { goToContact } from '../../utils/goToContact'



export default function Banner(){
    return(
        <div id='home' className="banner_section">
            <div className="banner_inner">
                <div className="banner_txt">
                    <h1 className="hero-anim-1">Unified Security Systems Platform</h1>
                    <p className="hero-anim-2">Designed and built in Singapore, our hardware and software offers a modern and fully integrated security stack for every need. We handle everything — design, installation, and ongoing management.</p>
                    <div className="hero-anim-3">
                        <button onClick={goToContact}>Get in Touch</button>
                    </div>
                </div>

            </div>

            <div className="banner_img hero-anim-img">
                <img className="banner_main_img" alt='Etlas security systems dashboard — access control and CCTV management platform' src={hero_products} />
            </div>

        </div>
    )
}
