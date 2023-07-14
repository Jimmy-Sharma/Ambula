import React from 'react';
import Navbar from './Navbar';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSearchLocation, FaWhatsapp, FaYoutube } from "react-icons/fa";
import '../Styling/Contact.css'

const Contact = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id='contactContainer'><section id="contact"></section>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 align="center" style={{ color: "#5779E5", fontSize: "2.5rem" }}>Send us your Feedback</h1>
          </div>
          <div id='feedbackSection'>
            <div>
              <img id='ContactTopIMG' src="contactTopp.png" alt="" />
            </div>
            <div>
              <form action="">
                <input className='feedbackinputOther' type="text" placeholder='Please Enter Your Name' />
                <input className='feedbackinputOther' type="number" placeholder='Please Enter Your Contact No.' />
                <input className='feedbackinputOther' type="email" placeholder='Please Enter Your Email' />
                <input id='feedbackInput' type="text" placeholder='Please Enter your Feedback' />
                <button id='feedbackSubmitBTN'>Submit Feedback</button>
              </form>
            </div>
          </div>
          <div className="contacts">
            <section id="contact" style={{ marginTop: "30px" }}></section>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h1 align="center" style={{ color: "#5779E5", fontSize: "2.5rem" }}>Get in Touch</h1>
            </div>
            <div className='contact'>
              <div className='logos'>
                <div>
                  <span>
                    <a
                      href="https://api.whatsapp.com/send?phone=+918637085433"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp className="whatsapp" />
                    </a>
                  </span>
                  <span>
                    <p>102</p>
                  </span>
                </div>
                <div>
                  <span>
                    <a
                      href="https://www.linkedin.com/company/ambulatech/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="linkedin" />
                    </a>
                  </span>
                  <span>
                    <p>Linkedin</p>
                  </span>
                </div>
                <div>
                  <span>
                    <a
                      href="https://www.facebook.com/AmbulaTech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook className='email' />
                    </a>
                  </span>
                  <span>
                    <p>Facebook</p>
                  </span>
                </div>
                <div>
                  <span>
                    <a
                      href="https://www.youtube.com/@ambula"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube className='email' />
                    </a>
                  </span>
                  <span>
                    <p>Youtube</p>
                  </span>
                </div>
                <div>
                  <span>
                    <a
                      href="mailto:prince786no.1@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className='email' />
                    </a>
                  </span>
                  <span>
                    <p>Instagram</p>
                  </span>
                </div>
                <div>
                  <span>
                    <a href="tel:+918637085433" target="_blank" rel="noreferrer">
                      <FaSearchLocation className="phone" />
                    </a>
                  </span>
                  <span>
                    <p>Bhubaneswar, Odisha</p>
                  </span>
                </div>
              </div>
              <div>
                <img src="https://meesahil7.github.io/static/media/mail.1db650d351729a0f17b4e3104e6a7b7a.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


