import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from '../../../images/user.png';
function Sidebar() {
  return (
    <div className='sidebarContainer'>
      <ul>
        <li id='quizzes'><Link to="/profile"><img src={profileimg} />Quizzes</Link></li>
        <li id='challenges'><Link to="/challenges"><img src={profileimg} />Challenges</Link></li>
        <li id='booksess'><Link to="/booking"><img src={profileimg} />Book Session</Link></li>
        <li id='trackmood'><Link to="/trackmood"><img src={profileimg} />Track Your Mood</Link></li>
        <li id='resources'><Link to="/resources"><img src={profileimg} />Resources</Link></li>
        <li id='communities'><Link to="/communities"><img src={profileimg} />Communities</Link></li> 
      </ul>
    </div>
  );
}

export default Sidebar;
