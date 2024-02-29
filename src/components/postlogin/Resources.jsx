import React from "react";

import Navbar from "./elements/Navbar";
import Sidebar from "./elements/Sidebar";
import Footer from "./elements/Footer";

function Resources() {
  return (
    <div>
      <Navbar />
      <div className="mainpageContainer">
        <Sidebar />
        <div className="mainContent">Hello resource</div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
