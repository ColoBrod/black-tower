import React from "react";
import Global from '~/Global';
import lc from './locales';

// Images
import Img from '~/assets/img/section-about.jpeg';

// Components
import H2 from '~/component/H2';

// Styles
import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

class About extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
  
    return (
      <section id="about">
        <div className="container">
          <H2>{lc.about}</H2>
          <div className="inner">
            <div className="img-wrapper">
              <div></div>
              <img src={Img} alt="Section About" />
            </div>
            <div className="description">
              <p>Компания BlackTowers занимается производством металлоконструкций из Алюкобонда любой сложности.</p>
              <p>Алюминиевые композитные панели (Алюкобонд) - листовой многослойный материал, состоящий из двух тонких листов алюминия (толщиной 18 микрон) с пластиковым наполнителем (полиэтиленовая прослойка). Материал имеет эластичную полимерную основу, которая позволяет изготовить надежные и долговечные конструкции.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;