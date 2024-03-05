import React from "react";

import Navbar from "./elements/Navbar";
import Sidebar from "./elements/Sidebar";
import Footer from "./elements/Footer";

function Challenges() {
  return (
    <div>
      <Navbar />
      <div className="mainpageContainer">
        <Sidebar />
        <div className="mainContent challengeContainer">
          <div className="chattl">Complete a challenge to earn a badge 🤩</div>
          <div className="challengeConts">
            <div className="chalbox">Physical Activity</div>
            <div className="chalbox">Self Compassion</div>
            <div className="chalbox">Mindfulness</div>
            <div className="chalbox">Digital Detox</div>
            <div className="chalbox">Habit Building</div>
            <div className="chalbox">Sleep Improvement</div>
            <div className="chalbox">Stress Relief Games</div>
            <div className="chalbox">Acts of Kindness</div>
            <div className="chalbox">Learning</div>
            <div className="chalbox">Creativity</div>
            <div className="chalbox">Communication</div>
            <div className="chalbox">Nutrition</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Challenges;
