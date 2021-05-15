import React from "react";
import Typewriter from "typewriter-effect";

function LandingPage() {
  return (
    <div className="home" id="home">
      <div className="name_field">Hi, I'm Lidhish.</div>
      <div id="designation" className='designation'>
        <Typewriter
          options={{
            strings: ["Web Developer", "Full Stack Developer","PERN Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
