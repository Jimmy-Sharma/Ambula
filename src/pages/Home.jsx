import React from 'react';
import Navbar from './Navbar';
import '../Styling/Home.css'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* <div  id='TopContainer'>
          <h1>Welcome to the Home Page of Ambula</h1>
        </div> */}

      </div>
      <div id='homeContainer'>
        <div id='container'>
          <div id='leftCon'>
            <img id='logo' src="ambulaLogo.png" alt="" />
            <h1 id='heading'>Our Mission</h1>
            <p id='bio'>At Ambula, we are deeply committed to the belief that every person deserves access to high-quality healthcare services. We believe in a democratic approach to health, and through the use of technology, we strive to make emergency and trauma care assistance more transparent, easily accessible, and user-friendly for all individuals in India. By bridging the communication gap in healthcare delivery, we hope to empower individuals to take control of their health and well-being.</p>
          </div>
          <div id='rightCon'>
            <img src="doctorIMG.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
