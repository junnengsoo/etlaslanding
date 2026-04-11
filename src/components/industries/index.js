import React from "react";
import './index.css'

const industries = [
    {
        emoji: '🏢',
        title: 'Commercial Offices',
        desc: 'Support hybrid workforces with floor-by-floor access control, visitor management, and real-time occupancy visibility across every site.',
    },
    {
        emoji: '🏭',
        title: 'Industrial & Warehouses',
        desc: 'Zone-based access, shift-based schedules, and ruggedised hardware built for harsh environments — with full audit trails for compliance.',
    },
    {
        emoji: '🏘️',
        title: 'Residential & Condominiums',
        desc: 'Give residents mobile access, issue visitor PIN codes, and integrate directly with building management systems for seamless living.',
    },
]

export default function Industries(){
    return(
        <section className="industries_section">
            <div className="industries_header">
                <h4>Built for every industry</h4>
                <p>Etlas adapts to your environment — whether you manage a single site or a national portfolio.</p>
            </div>
            <div className="industries_grid">
                {industries.map((ind, i) => (
                    <div key={i} className="industry_card">
                        <div className="industry_card_emoji">{ind.emoji}</div>
                        <div className="industry_card_body">
                            <h5>{ind.title}</h5>
                            <p>{ind.desc}</p>
                            <a href="#message_form_section" className="industry_card_link">Learn more →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
