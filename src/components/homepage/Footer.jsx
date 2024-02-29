import React from 'react';

function Footer() {
  return (
  <div className='footer'>
    <div className='myfooter'>
      <div className="left">
        <div className="logo">
          <div id="mylogo"></div>
          <h3>MentalSync Hub</h3>
        </div><br />


        
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Community Guidelines</a></li>
          <li><a href="#">AI Guidelines & Safety</a></li>
        </ul>
      </div>
      <div className="center">
        <span><b>Navigation Links</b></span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">SignIn / SignUp</a></li>
        </ul>
      </div>
      <div className="right">
        <p><b>OUR SOCIALS</b></p>
        <div className="socialicons">

        </div>
        <span>Helpline</span><a href="tel:+254712345678">+254 712-345-678</a><br />
        <span>Email:</span><a href="mailto:info@mentalsynchub.gmail.com">info@mentalsynchub.gmail.com</a>
      </div>
      
    </div>
    <p id='mycopyright'>2024 MentalSync Hub. All rights Reserved</p>
  </div>
  );
}

export default Footer;
