import React from "react";
import community from "../../images/community.png";

function Home() {
  return (
    <div>
      <nav>
        <div className="logo">
          <p>MentalSync Hub</p>
        </div>
        <div className="navlinks">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
      </nav>
      <div className="homeCont">
        <img src={community} alt="" width={"300px"}/>
        <div className="hometxt">
          <span>Unmute your voice, Unlock your Potential and Better your Future. <br/>
            MentalSync Hub Awaits.</span>
          <button>REACH OUT </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
