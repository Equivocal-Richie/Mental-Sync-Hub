import React from "react";
import community from "../../images/community.png";

function Home() {
  return (
    <div>
      <nav>
        <div className="logo">
          <div id="mylogo"></div>
          <p>MentalSync Hub</p>
        </div>
        <div className="navlinks">
          <ul>
            <li><a href="#" id="active">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">FEATURES</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#" id="signin">Sign In</a></li>
          </ul>
        </div>
      </nav>
      <div className="homeCont">
        <img src={community} alt="" width={"300px"}/>
        <div className="hometxt">
          <span>Unmute your voice, Unlock your Potential and Better your Future. <br/>
            <b>MentalSync Hub</b> Awaits.</span><br />
          <button><b>REACH OUT</b> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
