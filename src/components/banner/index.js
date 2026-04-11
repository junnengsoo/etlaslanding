import React from "react"
import './index.css'
import banner_img from '../../asset/bannerImg.png'
import banner_icons_img from '../../asset/bannerIcons.png'

export default function Banner(){
    return(
        <div id='home' className="banner_section">
            <div className="banner_inner">
                <div className="banner_txt">
                    <h3>Unifying Your Security</h3>
                    <p>Etlas provides a single web-based platform for all your security management needs. Powerful. Modern. Flexible.</p>
                    <div>
                        <button><a href="https://wa.me/6599394562/?text=Hi!">Get in touch</a></button>
                    </div>
                </div>
            </div>

            <div className="banner_img">
                <img className="banner_main_img" alt='' src={banner_img} />
                <img className="banner_icons" alt='' src={banner_icons_img} />
            </div>
        </div>
    )
}
