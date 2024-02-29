import React from 'react';

import profileimg from '../../../images/user.png';
import notification from '../../../images/notification.png';

function Navbar() {
  return (
    <div className='navContainer'>
      <div className="logo">
        <div className="mylogo">
        <div id="mylogo"></div>
        <div className="logotxt">MentalSync Hub</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
      <div className="navright">
        <div className="notificon">
        <img src={notification} />
        </div>
        <div className="profileicon" style={{flexDirection: "column"}}>
          <img src={profileimg} />
          <span style={{fontSize: "13px"}}><b>Wamziss</b></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
