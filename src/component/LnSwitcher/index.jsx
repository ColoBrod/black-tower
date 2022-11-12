import React from "react";
import Ln from './Ln';

import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

const languages = {
  kz: "KZ",
  uz: "UZB",
  en: "ENG",
  ru: "RUS",
}; 

class LnSwitcher extends React.Component {
  render() {
    return (
      <div className="ln-switcher">
        {
          Object.keys(languages).map((ln, i) => (
            <Ln short={ln} long={languages[ln]} key={i} />
          ))
        }
      </div>
    );
  }
}

export default LnSwitcher;