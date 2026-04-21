import React from "react";
import './index.css'
import { goToContact } from '../../utils/goToContact'
import accessControlCard from '../../asset/accessControlCard.png'
import cctvCard from '../../asset/CCTVCard.png'
import visitorManagementCard from '../../asset/VisitorManagementSystemCard.png'
import timeAttendanceCard from '../../asset/TimeAttendanceCard.png'
import etlasBoardImg from '../../asset/etlasBoard.png'

const stack = [
    {
        icon: accessControlCard,
        title: 'Access Control',
        description: 'Control who enters your site, when, and where — from a single dashboard. Support for multiple authentication methods including card, PIN, QR, and biometric credentials means every person gets the right level of access. Revoke or grant access instantly, from anywhere.',
    },
    {
        icon: cctvCard,
        title: 'Video Surveillance (CCTV)',
        description: 'Monitor your site with a unified view on the Etlas platform. Integrate video alerts with Etlas and access linked footage seamlessly — no switching between systems, no wasted time.',
    },
    {
        icon: visitorManagementCard,
        title: 'Visitor Management',
        description: 'Comprehensive VMS provides multiple workflows which include pre-registration, admin review/approval, on-demand access and audit logs.',
    },
    {
        icon: timeAttendanceCard,
        title: 'Time & Attendance',
        description: 'Attendance is tracked automatically from access events — no manual registers, no separate hardware. Export payroll-ready reports and sync directly with your HR system.',
    },
    {
        icon: etlasBoardImg,
        title: 'Integrations',
        description: 'Etlas is built to work with what you already have. Connect to HR and payroll platforms, trigger alarms via our hardware and extend functionality through our REST API — open architecture, no lock-in.',
    },
]

export default function Features(){
    return(
        <div id="etlas_features" className="features_section">
            <div className="features_inner">
                <h4 data-animate>The Complete Security Stack</h4>
                <p className="features_subtitle" data-animate style={{'--anim-delay': '0.1s'}}>Everything you need to manage in one platform.</p>
                <div className="features_grid">
                    {stack.map((item, i) => (
                        <div className="feature_card" key={i} data-animate style={{'--anim-delay': `${0.05 * i}s`}}>
                            <div className="feature_card_img">
                                <img alt={item.title + ' — Etlas security system Singapore'} src={item.icon} />
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    <div className="feature_card feature_card--cta-b" data-animate style={{'--anim-delay': '0.25s'}}>
                        <h5>Not sure what you need?</h5>
                        <p>Let us assess your site and recommend the right setup.</p>
                        <a href="/#contact" onClick={goToContact} className="feature_cta_btn feature_cta_btn--solid">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
