import React from "react";
import './index.css'
import fitnessGym from '../../asset/fitnessGym.png'
import constructionSite from '../../asset/constructionSite.png'
import corporateOffice from '../../asset/corporateOffice.png'

const industries = [
    {
        title: 'Fitness & Wellness',
        img: fitnessGym,
        subtitle: 'Frictionless access for every member, every visit',
        href: '/industries/fitness',
        points: [
            'Biometric and mobile entry — no cards to lose or share',
            'Auto-revoke access when membership expires',
            'Track attendance for payroll and compliance',
        ]
    },
    {
        title: 'Corporate Offices & Spaces',
        img: corporateOffice,
        subtitle: 'Manage your people, visitors, and spaces in one place',
        href: '/industries/corporate',
        points: [
            'Pre-register visitors with auto-generated passes',
            'Schedule access by role, floor, or shift',
            'Meeting room booking with auto-provisioned access',
        ]
    },
    {
        title: 'Worksites',
        img: constructionSite,
        subtitle: 'Site security without permanent infrastructure',
        href: '/industries/worksites',
        points: [
            'Issue and revoke temporary contractor credentials instantly',
            'Mobile management — no on-site IT required',
            'GPIO-ready for alarms and emergency response',
        ]
    },
]

export default function Industries() {
    return (
        <div id="industries" className="industries_section">
            <div className="industries_inner">
                <h4 data-animate>Built for Your Industry</h4>
                <p className="industries_subtitle" data-animate style={{'--anim-delay': '0.1s'}}>Etlas adapts to the way your site works — not the other way around.</p>
                <div className="industries_grid">
                    {industries.map((item, i) => (
                        <div className="industry_card" key={i} data-animate style={{'--anim-delay': `${0.1 * i}s`}}>
                            <div className="industry_card_img">
                                <img src={item.img} alt={item.title} />
                                <div className="industry_card_img_overlay">
                                    <p className="industry_card_img_label">{item.title}</p>
                                </div>
                            </div>
                            <p className="industry_card_sub">{item.subtitle}</p>
                            <ul className="industry_card_list">
                                {item.points.map((pt, j) => (
                                    <li key={j}>{pt}</li>
                                ))}
                            </ul>
                            <a href={item.href} className="industry_card_learn_more">Learn more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
