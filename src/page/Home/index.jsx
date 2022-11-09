// Libraries
import React from "react";

import Global from '../../Global';
import lc from './locales';

import './index.scss';

// Components

// Images
import HorizontalDivider from '~/assets/img/horizontal-divider.png';
import Img from '~/assets/img/section-about.jpeg';

import Img1 from '~/assets/img/gallery/1.png';

import ArrowLeft from '~/assets/img/arrow-left.png';
import ArrowRight from '~/assets/img/arrow-right.png';

import ImgAside1 from '~/assets/img/gallery/aside-1.png';
import ImgAside2 from '~/assets/img/gallery/aside-2.png';

import Map from '~/assets/img/map.png';

import IconPhone from '~/assets/icon/phone.png';
import IconMail from '~/assets/icon/mail.png';
import IconInstagram from '~/assets/icon/instagram.png';
import IconMap from '~/assets/icon/map.png';

import BorderGolden from '~/assets/img/border-golden.png';

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
        <section id="gallery">
          <div className="container">
            <div className="slider-wrapper">
              <div className="left-bar">
                <img src={ArrowLeft} alt="Стрелка влево" className="arrow-left" />
              </div>
              <div className="img-wrapper">
                <img src={Img1} alt="" />
              </div>
              <div className="right-bar">
                <img src={ArrowRight} alt="Стрелка вправо" className="arrow-right" />
              </div>
            </div>
            <div className="aside-images">
              <div className="img-wrapper">
                <img src={ImgAside1} alt="Галлерея 1" />
                <div className="img-description">Описание фото</div>
              </div>
              <div className="img-wrapper">
                <img src={ImgAside2} alt="Галлерея 2" />
                <div className="img-description">Описание фото</div>
              </div>
            </div>
          </div>
        </section>
        <section id="contacts">
          <div className="container">
            <h2>{lc.contacts}</h2>
            <img 
              src={HorizontalDivider} 
              alt="Horizontal Divider" 
              className="horizontal-divider"
            />
            <div className="inner">
              <div className="inner-left">
                <div className="item item__phone">
                  <img className="item-icon" src={IconPhone} alt="Phone" />
                  <span className="item-description">Телефон</span>
                </div>
                <div className="item item__mail">
                  <img className="item-icon" src={IconMail} alt="Phone" />
                  <span className="item-description">Почта</span>
                </div>
                <div className="item item__instagram">
                  <img className="item-icon" src={IconInstagram} alt="Phone" />
                  <span className="item-description">Соц. сети</span>
                </div>
                <div className="item item__map">
                  <img className="item-icon" src={IconMap} alt="Phone" />
                  <span className="item-description">Адрес</span>
                </div>
              </div>
              <div className="inner-right">
                <div className="map-wrapper">
                  <img src={Map} alt="Карты" />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="order">
          <div className="container">
            <div className="inner">
              <div className="inner-left">
                <img src={BorderGolden} alt="Золотая рамка" className="border-golden" />
                <form action="">
                  <h2>Сделайте заказ!</h2>
                  <input type="text" placeholder="Ваше Имя"/>
                  <input type="text" placeholder="Ваш телефон"/>
                  <input type="text" placeholder="Ваша электронная почта*" required/>
                  <input type="submit" value="Отправить" />
                </form>
                
              </div>
              <div className="inner-right">
                <p className="description">
                  С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
                </p>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default Home;