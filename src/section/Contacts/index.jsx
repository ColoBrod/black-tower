import React from "react";
import Global from '~/Global';
import lc from './locales';

import IconPhone from '~/assets/icon/phone.svg';
import IconMail from '~/assets/icon/mail.svg';
import IconInstagram from '~/assets/icon/instagram.svg';
import IconMap from '~/assets/icon/map.svg';
import Iframe from 'react-iframe'

// Components
import H2 from "~/component/H2";

import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

class Contacts extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);

    return (
      <section id="contacts">
        <div className="container">
          <H2>{lc.title}</H2>
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
                <Iframe url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9A%D0%B8%D0%BC%D1%80%D1%8B%20%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2010+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="map-google"
                  position="relative"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contacts;