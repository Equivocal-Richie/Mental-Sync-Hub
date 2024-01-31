import React from 'react';

function Footer() {
  return (
    <div>
      <div className="left">
        <div className="logo">
          <h3>MentalSync Hub</h3>
        </div>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Community Guidelines</p>
        <p>AI Guidelines & Safety</p>
      </div>
      <div className="center">
        <p>Navigation Links</p>
        <p>Home</p>
        <p>About us</p>
        <p>Features</p>
        <p>FAQs</p>
        <p>SignIn / SignUp</p>
      </div>
      <div className="right">
        <p>OUR SOCIALS</p>
        <div className="socialicons">

        </div>
        <span>Helpline</span><a href="tel:+254 712-345-678"></a>
        <span>Email:</span><a href="mailto:info@mentalsynchub.gmail.com"></a>
      </div>
      <div className="copyright">2024 MentalSync Hub. All rights Reserved</div>
    </div>
  );
}

export default Footer;
