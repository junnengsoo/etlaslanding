import React from "react"
import './index.css'
import banner_img from '../../asset/bannerImg.png'
import banner_icons_img from '../../asset/bannerIcons.png'
import bannerMobIcons from '../../asset/mobIcons.png'
import whatsappButton from '../../asset/ws.png'
import { useState } from "react"

export default function Banner(){

    const [email, setEmail] = useState('')

    return(
        <div id='home' className="banner_section" >
            <img className="banner_mob_icons" alt='' src={bannerMobIcons} />
            <div className="banner_txt">
                <h3>Unifying Your Security</h3>
                <p>Etlas provides a single web-based platform for all your security management needs. Powerful. Modern. Flexible.</p>
                <div>
                    {/*<input id="email" placeholder="Email address ...." onInput={e => setEmail(e.target.value)}/>
                    
                    <a href={"https://wa.me/6594569932/?text=Hi!"}><img alt='' src={whatsappButton} /></a>*/}
                   <button><a href="https://wa.me/6594569932/?text=Hi!">Get in touch with us</a></button>
                   </div>
            </div>

            <div className="banner_img">
                <img className="banner_main_img" alt='' src={banner_img} />
                <img className="banner_icons" alt='' src={banner_icons_img} />
            </div>
        </div>
    )
}