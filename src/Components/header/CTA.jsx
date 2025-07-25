// Call to action - CTA 

import React from "react";
import CV from "../../assets/Nyamwange.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn--animated">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary btn--animated">
        Reach Out
      </a>
    </div>
  );
};

export default CTA;
