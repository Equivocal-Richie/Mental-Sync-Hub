import React from "react";
import { Link } from "react-router-dom";

import profileimg from "../../../images/user.png";
import quizzes from "../../../images/Quizzes.png";
import challenges from "../../../images/Challenges.png";
import booking from "../../../images/booking.png";
import moodtrack from "../../../images/moodtrack.png";
import resources from "../../../images/resources.png";
import communities from "../../../images/communities.png";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <ul>
        <li id="quizzes">
          <Link to="/profile">
            <img src={quizzes} />
            Quizzes
          </Link>
        </li>
        <li id="challenges">
          <Link to="/challenges">
            <img src={challenges} />
            Challenges
          </Link>
        </li>
        <li id="booksess">
          <Link to="/booking">
            <img src={booking} />
            Book Session
          </Link>
        </li>
        <li id="trackmood">
          <Link to="/trackmood">
            <img src={moodtrack} />
            Track Your Mood
          </Link>
        </li>
        <li id="resources">
          <Link to="/resources">
            <img src={resources} />
            Resources
          </Link>
        </li>
        <li id="communities">
          <Link to="/communities">
            <img src={communities} />
            Communities
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
