import React from "react"
import './index.css'
import etlasBoard from '../../asset/etlasBoard.png'

const devices = [
    { id: 1, label: 'Card Reader', icon: '💳', className: 'device_card device_card--1' },
    { id: 2, label: 'NFC Reader', icon: '📡', className: 'device_card device_card--2' },
    { id: 3, label: 'Etlas Board', icon: null, img: etlasBoard, className: 'device_card device_card--3' },
    { id: 4, label: 'Mobile Access', icon: '📱', className: 'device_card device_card--4' },
    { id: 5, label: 'Biometric Reader', icon: '🔏', className: 'device_card device_card--5' },
]

export default function Banner(){
    return(
        <div id='home' className="banner_section">
            {/* Animated background devices */}
            <div className="banner_bg_devices">
                {devices.map(d => (
                    <div key={d.id} className={d.className}>
                        <div className="device_card_inner">
                            {d.img
                                ? <img src={d.img} alt={d.label} className="device_card_img" />
                                : <span className="device_card_icon">{d.icon}</span>
                            }
                            <span className="device_card_label">{d.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Foreground text */}
            <div className="banner_txt">
                <h3>Secure your space with modern access control</h3>
                <p>Move to a reliable, cloud-based access solution built for Singapore and beyond. Etlas is a unified, easy-to-deploy platform that works for every building, door, and user.</p>
                <div className="banner_actions">
                    <button><a href="https://wa.me/6594569932/?text=Hi!">Get in touch with us</a></button>
                    <a className="banner_learn_more" href="#etlas_features">Learn more →</a>
                </div>

                {/* Client logo strip */}
                <div className="banner_clients">
                    <span className="banner_clients_label">Trusted by organisations across Singapore</span>
                    <div className="banner_clients_logos">
                        <div className="client_logo_pill">Ministry of Manpower</div>
                        <div className="client_logo_pill">ST Engineering</div>
                        <div className="client_logo_pill">CapitaLand</div>
                        <div className="client_logo_pill">NUS</div>
                        <div className="client_logo_pill">Changi Airport</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
