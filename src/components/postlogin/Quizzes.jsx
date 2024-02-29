import React from "react";

import Navbar from "./elements/Navbar";
import Sidebar from "./elements/Sidebar";
import Footer from "./elements/Footer";

function Quizzes() {
  return (
    <div>
      <Navbar />
      <div className="mainpageContainer">
        <Sidebar />
        <div className="mainContent quizContainer">
          <div className="introquiz">
            <p>Take this test to help us match you to a therapist</p>
            <button type="button"><span>START</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
          </div>
          <div className="quizCategories">
            <table className="quizOptions">
              <tr>
                <td border={1}>Personality Quiz</td>
                <td>Random Knowledge</td>
              </tr>
              <tr>
                <td>Self-Awareness</td>
                <td>Fictional World Quiz</td>
              </tr>
              <tr>
                <td>Stress and Anxiety</td>
                <td>Riddles</td>
              </tr>
              <tr>
                <td>Mood and Depression</td>
                <td>Nutrition and Exercise</td>
              </tr>
              <tr>
                <td>Emotional Intelligence</td>
                <td>Learning styles</td>
              </tr>
              <tr>
                <td>Values and Motivations</td>
                <td>Sleep and Relaxation</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quizzes;
