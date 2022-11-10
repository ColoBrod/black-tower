import React from "react";
import Global from '~/Global';
import lc from './locales';
import './index.css';

// Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/less/autoplay';

// Images
import ArrowLeft from '~/assets/img/arrow-left.png';
import ArrowRight from '~/assets/img/arrow-right.png';
import ImgAside1 from '~/assets/img/gallery/aside-1.png';
import ImgAside2 from '~/assets/img/gallery/aside-2.png';

// Swiper Images
import Img1 from '~/assets/img/gallery/1.png';

class Gallery extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
  }

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    
    return (
      <section id="gallery">
        <div className="container">
          <div className="slider-wrapper">
            <div className="left-bar">
              <img 
                src={ArrowLeft} 
                alt="Стрелка влево" 
                className="arrow-left" 
                draggable="false" 
              />
            </div>
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]} 
              spaceBetween={50}
              slidesPerView={1}
              effect='fade'
              speed={500}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              loop={true}
              navigation={{
                prevEl: '.arrow-left',
                nextEl: '.arrow-right',
              }}
            >
              <SwiperSlide>
                <img className="slide" src={Img1} alt="Слайд 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide" src={ImgAside1} alt="Слайд 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide" src={ImgAside2} alt="Слайд 3" />
              </SwiperSlide>
            </Swiper>
            <div className="right-bar">
              <img 
                src={ArrowRight} 
                alt="Стрелка вправо" 
                className="arrow-right" 
                draggable="false" 
              />
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
    )
  }

}

export default Gallery;