import React from "react";
import './index.css'

// Replace these with your actual logo imports, e.g.:
// import logo1 from '../../asset/clients/company1.png'
const logos = [
    { name: 'Company 1', src: null },
    { name: 'Company 2', src: null },
    { name: 'Company 3', src: null },
    { name: 'Company 4', src: null },
    { name: 'Company 5', src: null },
]

export default function Clients() {
    return (
        <div className="clients_section">
            <div className="clients_inner">
                <p className="clients_label">Trusted by organisations across Singapore</p>
                <div className="clients_logos">
                    {logos.map((logo, i) => (
                        <div className="client_logo_slot" key={i}>
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
