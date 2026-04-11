import React from "react";
import { useState } from "react";
import "./index.css";

const bullets = [
    {
        icon: '💬',
        text: 'Connect with an Etlas expert in 24 hours'
    },
    {
        icon: '⚙️',
        text: 'Get a tailored solution for your use case'
    },
    {
        icon: '✓',
        text: 'Start using Etlas in a matter of days'
    }
]

export default function MessageForm() {

  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendMsg = async () => {
    let apilink = "https://eserver.etlas.sg/postEmail/"
    apilink += subject + "/" + "From: " + firstName + " " + lastName + " Email address: " + email + " Phone: " + phone + " Message: " + message
    alert("Thank you. We will contact you as soon as possible.");
    window.open(apilink);
  }

  return (
    <div className="message_form_outer">
      <div className="message_form_section">

        {/* ── Left: form card ── */}
        <div id="message_form_section" className="msg_form_container">
          <div className="message_form">
            <h4>Leave a Message</h4>
            <p>Let us know how we can help</p>

            <div className="form_inps">
              <div>
                <input placeholder="First name" onInput={e => setFirstname(e.target.value)} />
                <input placeholder="Last name"  onInput={e => setLastname(e.target.value)} />
                <input placeholder="Email"      onInput={e => setEmail(e.target.value)} />
                <input placeholder="Phone"      onInput={e => setPhone(e.target.value)} />
              </div>
              <input placeholder="Subject"          onInput={e => setSubject(e.target.value)} />
              <input placeholder="How can we help?" onInput={e => setMessage(e.target.value)} />
            </div>

            <button onClick={sendMsg}>Submit</button>
          </div>
        </div>

        {/* ── Right: Kisi-style pitch text ── */}
        <div className="form_section_txt">
          <h2>Save time.<br />Enhance security.</h2>
          <p className="form_pitch_sub">Modernise your physical security with a unified platform built for simplicity and scale.</p>

          <div className="form_bullets">
            {bullets.map((b, i) => (
              <div className="form_bullet" key={i}>
                <div className="form_bullet_icon">{b.icon}</div>
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="form_contact_row">
            <div className="form_contact_block">
              <strong>Call us</strong>
              <span>Sales: +65 9456 9932</span>
            </div>
            <div className="form_contact_block">
              <strong>Connect with us</strong>
              <a href="https://wa.me/6594569932/?text=Hi!" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
