import React from "react";
import './index.css'
import shieldImg from '../../asset/shield.png'
import truckImg from '../../asset/truck.png'
import tvImg from '../../asset/tv.png'
import puzzleImg from '../../asset/puzzle.png'
import flexiblityImg from '../../asset/flexiblity.png'
import featureImg from '../../asset/featureImg.png'

const features = [
    {
        icon: shieldImg,
        title: 'Unified Security Platform',
        desc: 'A single web-based portal to access all your security needs. View and configure access control, alarm systems, video recorders and more, all from a unified platform.'
    },
    {
        icon: truckImg,
        title: 'Access from Anywhere',
        desc: 'Using modern browsers like Chrome, Edge and Mozilla, access Etlas from anywhere with almost any device. No client software required on local machines.'
    },
    {
        icon: flexiblityImg,
        title: 'Flexibility',
        desc: 'Use our control boards for access control, alarm systems or general signaling to secondary systems. A single type of hardware to simplify your implementation.'
    },
    {
        icon: tvImg,
        title: 'Modern. Intuitive. User-centric',
        desc: 'We strive to provide the most intuitive and modern user interface in the market. Get started with minimal onboarding and training.'
    },
    {
        icon: puzzleImg,
        title: 'Modularity',
        desc: 'Select only the features you require with no complex licensing structures. Deploy on-premise or on our platform; the user experience will be completely the same.'
    }
]

export default function Features(){
    return(
        <div id="etlas_features" className="features_section">
            <div className="features_inner">

                {/* ── Product showcase — sits above feature cards ── */}
                <div className="showcase_block">
                    <div className="showcase_img_card">
                        <img alt='Etlas platform' src={featureImg} />
                    </div>
                    <div className="showcase_meta">
                        <div className="showcase_meta_left">
                            <h3>All-in-one solution</h3>
                            <p>Our code, our hardware</p>
                        </div>
                        <div className="showcase_meta_right">
                            <p>Etlas's robust hardware and user-friendly software work in perfect harmony to enhance the security of your spaces. Remotely manage your locations, streamline operations, and stay compliant with ease.</p>
                        </div>
                    </div>
                    <div className="showcase_actions">
                        <a href="#message_form_section" className="showcase_btn_primary">Get in touch</a>
                        <a href="#solution" className="showcase_btn_outline">Product overview</a>
                    </div>
                </div>

                {/* ── Feature cards grid ── */}
                <div className="features_grid">
                    {features.map((f, i) => (
                        <div className="feature_card" key={i}>
                            <div className="feature_card_img">
                                <img alt='' src={f.icon} />
                            </div>
                            <h5>{f.title}</h5>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
