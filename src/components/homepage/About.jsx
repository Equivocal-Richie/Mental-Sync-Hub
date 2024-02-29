import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";

function About() {
  return (
    <div className="aboutCont" id="about">
      <hr />
      <div className="aboutone">
        <h2>Mental Health Care in a Nut Shell</h2>
        <div id="aboutone">
          <div className="abouttxt">
            <span id="aboutonespan1">Struggling to access mental health help?</span><br />
            <span>
              Ditch the waitlists. MentalSync Hub seamlessly integrates with
              existing healthcare systems, delivering personalized,
              evidence-based care via expert therapists and AI-powered tools.
              Feel better faster, without the hassle.
            </span>
          </div>
          <img src={img1} alt="" width={"420px"}/>
        </div>
      </div>
      <hr />
      <div className="abouttwo">
        <h2>Empowering Community, Supportive Journey</h2>
        <div id="abouttwo">
          <img src={img2} alt="" width={"400px"} />
          <span className="abouttxt">
            You're not alone. Find your tribe in MentalSync Hub's vibrant
            community or let AI do all that for you. Share experiences, break
            free from stigma, and empower your well-being. AI companions and
            expert guidance support your journey, every step of the way.
          </span>
        </div>
      </div>
      <hr />
      <div className="aboutthree">
        <h2>Emphasizing AI and data-driven approach</h2>
        <div className="aboutthrees">
          <div id="aboutthreeone">
            <img src={img3} alt="" width={"300px"}/>
            <span className="abouttxt">
              Our secure platform
              confidentially analyzes your data to offer real-time insights and
              actionable recommendations, empowering you to take control of your
              mental health. MentalSync Hub: where AI meets science, shaping a
              brighter future for mental well-being.<br />
              </span>
          </div>
          <div id="aboutthreetwo">
              <span className="abouttxt"> 
              The future of mental health is here. MentalSync Hub leverages
              cutting-edge AI technology to deliver personalized, data-driven
              support for your mental well-being. Break free from outdated
              treatment models and experience the power of tailored interventions
              based on your unique needs and progress.</span>
            <img src={img4} alt="" width={"300px"} />
          </div>
        </div>
      </div>
      <div className="bottomabt">
        <h2>Connect With Peers</h2>
        <p>
          Join your Fellow Peers Anonymously and get to experience a world
          without stigmatization and boost your moods today.
        </p>
        <button><span>SIGN-UP</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </button>
      </div>
    </div>
  );
}

export default About;
