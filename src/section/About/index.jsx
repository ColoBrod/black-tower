import React from "react";
import Global from '~/Global';
import lc from './locales';
import './index.css';

// Images
import Img from '~/assets/img/section-about.jpeg';

// Components
import H2 from '~/component/H2';

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