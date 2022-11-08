import React from "react";
import Ln from './Ln';

import './index.scss';

const languages = {
  kz: "KZ",
  uz: "UZB",
  en: "ENG",
  ru: "RUS",
}; 

class LnSwitcher extends React.Component {
  render() {
    // Object.keys(languages).forEach((ln, i) => <Ln short={ln} long={languages[ln]} key={i} />)
    Object.keys(languages).forEach((ln, i) => console.log(ln, i))
    return (
      <div className="ln-switcher">
        {
          Object.keys(languages).map((ln, i) => <Ln short={ln} long={languages[ln]} key={i} />)
        }
      </div>
    );
  }
}

export default LnSwitcher;