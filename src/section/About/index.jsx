import React from "react";
import Global from '~/Global';
import lc from './locales';
import './index.css';

// Images
import HorizontalDivider from '~/assets/img/horizontal-divider.png';
import Img from '~/assets/img/section-about.jpeg';


class About extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
  
    return (
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
            <div className="description">
              С другой стороны постоянное 
              <br />
              информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития.
              <br />
              Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;