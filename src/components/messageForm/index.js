import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const SERVICE_ID  = 'gmail_service';
const TEMPLATE_ID = 'contact_us';
const PUBLIC_KEY  = 'RjFzYKQ9BvY0FvBMs';

const steps = [
    { icon: '📋', text: 'We assess your site within 24 hours' },
    { icon: '⚙️', text: 'We design a tailored security solution' },
    { icon: '✓',  text: 'Installation and setup completed in days' },
]

export default function MessageForm() {

  const [firstName, setFirstname] = useState('')
  const [lastName,  setLastname]  = useState('')
  const [email,     setEmail]     = useState('')
  const [phone,     setPhone]     = useState('')
  const [company,   setCompany]   = useState('')
  const [siteType,  setSiteType]  = useState('')
  const [status,    setStatus]    = useState('idle') // idle | sending | success | error

  const sendMsg = async () => {
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    `${firstName} ${lastName}`,
          email:   email,
          phone:   phone,
          company: company,
          site:    siteType,
          time:    new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' }),
        },
        PUBLIC_KEY
      )
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div id="contact" className="message_form_outer">
      <div className="message_form_section">

        {/* ── Left: form card ── */}
        <div id="message_form_section" className="msg_form_container" data-animate>
          <div className="message_form">
            <h4>Get in Touch</h4>
            <p>Let us know how we can help</p>

            {status === 'success' ? (
              <div className="form_success">
                <p>Thank you — we'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="form_inps">
                  <div className="form_inps_row">
                    <input placeholder="First name" onInput={e => setFirstname(e.target.value)} />
                    <input placeholder="Last name"  onInput={e => setLastname(e.target.value)} />
                  </div>
                  <div className="form_inps_row">
                    <input placeholder="Email"      onInput={e => setEmail(e.target.value)} />
                    <input placeholder="Phone"      onInput={e => setPhone(e.target.value)} />
                  </div>
                  <div className="form_inps_row">
                    <input placeholder="Company"    onInput={e => setCompany(e.target.value)} />
                    <select defaultValue="" onChange={e => setSiteType(e.target.value)}>
                      <option value="" disabled>Type of site</option>
                      <option value="Office">Office</option>
                      <option value="Fitness & Wellness">Fitness &amp; Wellness</option>
                      <option value="Worksite">Worksite</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="form_error">Something went wrong — please try again or contact us directly.</p>
                )}

                <button onClick={sendMsg} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── Right: pitch text ── */}
        <div className="form_section_txt" data-animate style={{'--anim-delay': '0.15s'}}>
          <h2>Get Your Site Secured.</h2>
          <p className="form_pitch_sub">Tell us about your site and we'll recommend the right setup — no obligation.</p>

          <div className="form_bullets">
            {steps.map((s, i) => (
              <div className="form_bullet" key={i}>
                <div className="form_bullet_icon">{s.icon}</div>
                <span>{s.text}</span>
              </div>
            ))}
          </div>

          <div className="form_contact_row">
            <div className="form_contact_block">
              <strong>Call us</strong>
              <a href="tel:+6589243354">+65 8924 3354</a>
            </div>
            <div className="form_contact_block">
              <strong>Email us</strong>
              <a href="mailto:fabian@etlas.sg">fabian@etlas.sg</a>
            </div>
            <div className="form_contact_block">
              <strong>WhatsApp</strong>
              <a href="https://wa.me/6589243354/?text=Hi!" target="_blank" rel="noreferrer">Message us</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
