import React, { useState } from "react";
import "./index.css";

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
    <div className="message_form_section">

      {/* Left – pitch copy */}
      <div className="form_section_txt">
        <h2>See Etlas in action</h2>
        <p className="cta_sub">Contact our security experts for a personalised demo tailored to your building and use case.</p>
        <div className="differentiators">
          <p>Single unified platform</p>
          <p>We own our hardware and software</p>
          <p>Extreme customisability</p>
          <p>Simplicity — minimal training required</p>
          <p>Local Singapore support team</p>
        </div>
      </div>

      {/* Right – form */}
      <div id="message_form_section" className="msg_form_container">
        <div className="message_form">
          <h4>Leave a message</h4>
          <p>Let us know how we can help and we'll be in touch within one business day.</p>

          <div className="form_inps">
            <div>
              <input placeholder="First name" onInput={e => setFirstname(e.target.value)} />
              <input placeholder="Last name" onInput={e => setLastname(e.target.value)} />
            </div>
            <input placeholder="Email" onInput={e => setEmail(e.target.value)} />
            <input placeholder="Phone" onInput={e => setPhone(e.target.value)} />
            <input placeholder="Subject" onInput={e => setSubject(e.target.value)} />
            <input placeholder="How can we help you?" onInput={e => setMessage(e.target.value)} />
          </div>

          <button onClick={sendMsg}>Submit</button>
        </div>
      </div>

    </div>
  );
}
