import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import partnerBox1 from "../../assets/images/bitgold.svg"
import partnerBox2 from "../../assets/images/xdminds.svg";
import partnerBox3 from "../../assets/images/malgo.svg"

import partnerPrev from "../../assets/images/partner-prev.svg";
import partnerNext from "../../assets/images/partnernext.svg";
import { Link } from "react-router-dom";

const Partner = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current?.swiper && !isEnd) {
      swiperRef.current.swiper.slideNext();
    }
  }

  const goToPrevSlide = () => {
    if (swiperRef.current?.swiper && !isBeginning) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="home-section-11 stack">
      <h2 className="h-text-2">
        Partnering with Industry Leaders for Career Growth
      </h2>
      <p className="center-p center-p-margin">
        SkillonIT collaborates with top companies to provide valuable internship
        and career opportunities for aspiring <br className="break t-break" />
        tech professionals. Join us to connect with industry leaders and
        kickstart your tech career.
      </p>
      <div className="partner-swiper-section">
        <button
          className={`custom-prev-1 desktop-hide tab-hide ${isBeginning ? "disabled" : ""}`}
          onClick={goToPrevSlide}
          disabled={isBeginning}
        >
          <img src={partnerPrev} alt="previous" className="partner-prev-img" />
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="partner-swiper"
          wrapperClass="wrapper-center"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {/* <SwiperSlide>
            <div className="service-box">
              <div className="service-icon">
                <div className="front-content">
                  <img src={partnerBox1} alt="partner" />
                </div>
              </div>
              <a
                href="https://bitx.gold/"
                target="_blank"
                className="service-content"
              >
                <span className="s-text-8">BitXGold</span>
              </a>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="service-box">
              <div className="service-icon">
                <div className="front-content">
                  <img src={partnerBox2} alt="partner" />
                </div>
              </div>
              <a
                href="https://www.xdminds.com/"
                target="_blank"
                className="service-content"
              >
                <span className="s-text-8">XDMinds</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-box">
              <div className="service-icon">
                <div className="front-content">
                  <img src={partnerBox3} alt="partner" />
                </div>
              </div>
              <a
                href="https://www.malgotechnologies.com/"
                target="_blank"
                className="service-content"
              >
                <span className="s-text-8">Malgo Technologies</span>
              </a>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="service-box">
              <div className="service-icon">
                <div className="front-content">
                  <img src={partnerBox1} alt="partner" />
                </div>
              </div>
              <a
                href="https://bitx.gold/"
                target="_blank"
                className="service-content"
              >
                <span className="s-text-8">BitXGold</span>
              </a>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="service-box">
              <div className="service-icon">
                <div className="front-content">
                  <img src={partnerBox2} alt="partner" />
                </div>
              </div>
              <a
                href="https://www.xdminds.com/"
                target="_blank"
                className="service-content"
              >
                <span className="s-text-8">XD Minds</span>
              </a>
            </div>
          </SwiperSlide> */}
        </Swiper>
        <button
          className={`custom-next-1 desktop-hide tab-hide ${isEnd ? "disabled" : ""}`}
          onClick={goToNextSlide}
          disabled={isEnd}
        >
          <img src={partnerNext} alt="next" className="partner-prev-img" />
        </button>
      </div>
    </section>
  );
};

export default Partner;
