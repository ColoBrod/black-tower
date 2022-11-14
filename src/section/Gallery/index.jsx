import React from "react";
import Global from '~/Global';
import lc from './locales';

// Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/less/autoplay';

// Images
import ArrowLeft from '~/assets/img/arrow-left.svg';
import ArrowRight from '~/assets/img/arrow-right.svg';
import ImgAside1 from '~/assets/img/gallery/aside-1.png';
import ImgAside2 from '~/assets/img/gallery/aside-2.png';

// Swiper Images
import Img1 from '~/assets/img/gallery/1.png';
import Img2 from '~/assets/img/gallery/2.jpg';
import Img3 from '~/assets/img/gallery/3.jpg';
import Img4 from '~/assets/img/gallery/4.jpg';
import Img5 from '~/assets/img/gallery/5.jpg';

// Styles 
import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

const slides = [
  { src: Img1, alt: "Слайд 1" },
  { src: Img2, alt: "Слайд 2" },
  { src: Img3, alt: "Слайд 3" },
  { src: Img4, alt: "Слайд 4" },
  { src: Img5, alt: "Слайд 5" },
]

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
              {
                slides.map((slide, i) => this.renderSlide(slide, i))
              }
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
          <div className="slider-description">
            Описание фото
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

  renderSlide(slide, i) {
    const { src, alt } = slide;
    return (
      <SwiperSlide key={i}>
        <img className="slide" src={src} alt={alt} />
      </SwiperSlide>     
    );
  }

}

export default Gallery;