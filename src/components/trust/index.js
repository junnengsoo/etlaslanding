import React from "react";
import './index.css'

const badges = [
    { icon: '🔒', label: 'ISO 27001', sub: 'Information Security' },
    { icon: '📋', label: 'PDPA Compliant', sub: 'Singapore' },
    { icon: '✅', label: 'CE Certified', sub: 'Hardware' },
    { icon: '🇸🇬', label: 'Made in Singapore', sub: 'Engineering' },
    { icon: '⚡', label: 'FCC Approved', sub: 'Emissions' },
]

export default function Trust(){
    return(
        <section className="trust_section">
            <p className="trust_label">Security you can rely on</p>
            <div className="trust_badges">
                {badges.map((b, i) => (
                    <div key={i} className="trust_badge">
                        <span className="trust_badge_icon">{b.icon}</span>
                        <div className="trust_badge_txt">
                            <span className="trust_badge_name">{b.label}</span>
                            <span className="trust_badge_sub">{b.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
