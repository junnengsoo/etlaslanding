import React from "react";
import './index.css'

import logoFrasers from '../../asset/companyLogos/FCT.png'
import logoStamford from '../../asset/companyLogos/SA.avif'
import logoAis from '../../asset/companyLogos/AIS.png'
import logoInterplex from '../../asset/companyLogos/interplex.png'
import logoTongren from '../../asset/companyLogos/tongrentang.png'
import logoUoi from '../../asset/companyLogos/UOI.png'

const logos = [
    { name: 'Frasers Centrepoint Trust', src: logoFrasers },
    { name: 'Stamford American School', src: logoStamford },
    { name: 'AIS', src: logoAis },
    { name: 'Interplex Holdings', src: logoInterplex },
    { name: 'Tong Ren Tang', src: logoTongren },
    { name: 'UOI', src: logoUoi },
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
