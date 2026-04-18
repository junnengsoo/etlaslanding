import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import './index.css';
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { goToContact } from '../../utils/goToContact';

const steps = [
    {
        number: '01',
        title: 'Site Assessment',
        body: 'We visit your site, understand your security needs, and identify the right systems for your space. No obligation, no pressure.',
    },
    {
        number: '02',
        title: 'Tailored Proposal',
        body: 'We design a custom security solution based on your site — access points, cameras, integrations, and all. You get a clear proposal with full transparency on what\'s included.',
    },
    {
        number: '03',
        title: 'Installation',
        body: 'Our team handles the full installation — hardware, wiring, software setup, and testing. Most sites are up and running within days.',
    },
    {
        number: '04',
        title: 'Onboarding & Training',
        body: 'We walk you and your team through the Etlas platform so you\'re confident managing your site from day one.',
    },
    {
        number: '05',
        title: 'Ongoing Support',
        body: 'We don\'t disappear after installation. Etlas provides continued maintenance, updates, and support so your security stays reliable.',
    },
]

export default function HowItWorks() {
    useScrollAnimation();

    return (
        <div className="hiw_page">
            <Navbar />

            <div className="hiw_hero">
                <div className="hiw_hero_inner">
                    <h1 className="hero-anim-1">From Assessment to Installation —<br />We Handle Everything.</h1>
                </div>
            </div>

            <div className="hiw_steps_section">
                <div className="hiw_steps_inner">
                    {steps.map((step, i) => (
                        <div className="hiw_step" key={i} data-animate style={{'--anim-delay': `${0.1 * i}s`}}>
                            <div className="hiw_step_number">{step.number}</div>
                            <div className="hiw_step_content">
                                <div className="hiw_step_connector" />
                                <h2>{step.title}</h2>
                                <p>{step.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hiw_cta_section">
                <div className="hiw_cta_inner" data-animate>
                    <h3>Ready to secure your site?</h3>
                    <a href="/#contact" onClick={goToContact} className="hiw_cta_btn">Get in Touch</a>
                </div>
            </div>

            <Footer />
        </div>
    )
}
