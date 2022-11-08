// Libraries
import React from "react";

import Global from '../../Global';
import lc from './locales';

import './index.scss';

// Components

// Images
import HorizontalDivider from '~/assets/img/horizontal-divider.png';
import Img from '~/assets/img/section-about.jpeg';

class Home extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <>
        <section id="about">
          <div className="container">
            <h2>{lc.about}</h2>
            <img 
              src={HorizontalDivider} 
              alt="Horizontal Divider" 
              className="horizontal-divider"
            />
            <div className="inner">
              <div className="img-wrapper">
                <div></div>
                <img src={Img} alt="Section About" />
              </div>
            </div>
          </div>
          
        </section>
      </>
    );
  }
}

export default Home;