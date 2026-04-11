import React from "react";
import './index.css'

const features = [
    {
        icon: '🛡️',
        title: 'Scalable access control',
        desc: 'Manage every door from a single dashboard. Set granular access levels, integrate SSO, and scale from one room to an entire portfolio without changing platforms.',
    },
    {
        icon: '🔌',
        title: 'Powerful integrations',
        desc: 'Connect your existing security cameras, alarm systems, and visitor management tools. Etlas unifies your security stack so everything works together.',
    },
    {
        icon: '🌐',
        title: 'Access from anywhere',
        desc: 'Manage your sites from any modern browser — no client software required. Grant or revoke access, view audit logs, and respond to alerts in real time.',
    },
    {
        icon: '⚙️',
        title: 'Flexible hardware',
        desc: 'Our control boards are designed in-house. Use them for access control, alarm systems, or custom signalling — one hardware type for every requirement.',
    },
    {
        icon: '📊',
        title: 'Audit logs & analytics',
        desc: 'Full event history for every door and user. Generate compliance reports, investigate incidents, and track occupancy with built-in analytics.',
    },
    {
        icon: '🧩',
        title: 'Modular licensing',
        desc: 'Select only the features you need — no bloated licensing bundles. Deploy on-premise or on our cloud; the experience is identical either way.',
    },
]

export default function Features(){
    return(
        <section id="etlas_features" className="features_section">
            <div className="features_header">
                <h4>Everything you need to secure your space</h4>
                <p>A unified platform built for modern security teams — from a single office to a nationwide estate.</p>
            </div>
            <div className="features_grid">
                {features.map((f, i) => (
                    <div key={i} className="feature_card">
                        <span className="feature_card_icon">{f.icon}</span>
                        <h5>{f.title}</h5>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
