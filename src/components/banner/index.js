import React from "react"
import './index.css'
import hero_products from '../../asset/HeroProducts.png'
import { goToContact } from '../../utils/goToContact'

// Replace src: null with your actual logo imports once available
// e.g. import logo1 from '../../asset/clients/company1.png'
const logos = [
    { name: 'Company 1', src: null },
    { name: 'Company 2', src: null },
    { name: 'Company 3', src: null },
    { name: 'Company 4', src: null },
    { name: 'Company 5', src: null },
]

export default function Banner(){
    return(
        <div id='home' className="banner_section">
            <div className="banner_inner">
                <div className="banner_txt">
                    <h3 className="hero-anim-1">Unifying Your Security</h3>
                    <p className="hero-anim-2">Etlas is Singapore's only homegrown modern security systems platform. We design, install, and manage your complete security stack — end to end.</p>
                    <div className="hero-anim-3">
                        <button onClick={goToContact}>Get in Touch</button>
                    </div>
                </div>

            </div>

            <div className="banner_img hero-anim-img">
                <img className="banner_main_img" alt='Etlas platform' src={hero_products} />
            </div>

            <div className="banner_clients hero-anim-clients">
                <p className="banner_clients_label">Trusted by organisations across Singapore</p>
                <div className="banner_logos">
                    {logos.map((logo, i) => (
                        <div className="banner_logo_slot" key={i}>
                            {logo.src
                                ? <img src={logo.src} alt={logo.name} />
                                : <span>{logo.name}</span>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
