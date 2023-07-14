import React from 'react';
import Navbar from './Navbar';
import '../Styling/About.css'

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id='abtContainer'>
        <div id='container'>
          <div id='leftCon'>
            <h1>About Ambula</h1>
            <p>Ambula is an App based on UHI(Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister which connects patients live with the unified health network across India for all healthcare needs. Ambula is committed to bridge all the communication gaps prevalent in healthcare delivery and Ambula will impart it's contribution to this Noble Vision.
              We are always available there for you if you find any discomfort of health. Your trust empowers us to serve you more.</p>
          </div>
          <div id='rightCon'>
            <img src="aboutIMG.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
