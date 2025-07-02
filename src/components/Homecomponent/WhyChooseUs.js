import React, { useRef } from "react";
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

import slidercard1 from "../../assets/images/slidercard7.svg";
import slidercard2 from "../../assets/images/slidercard2.svg";
import slidercard3 from "../../assets/images/slidercard3.svg";
import slidercard4 from "../../assets/images/sliderimg4.svg";
import slidercard5 from "../../assets/images/sliderimg5.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";

const slidesData = [
  {
    src: slidercard1,
    title: "Job Assistance",
    description:
      "We Provide Dedicated Support To Help You Land Your Dream Job.",
  },
  {
    src: slidercard2,
    title: "Flexible Payment Plans",
    description: "Guaranteed internships to kickstart your career.",
  },
  {
    src: slidercard3,
    title: "Cutting-Edge Curriculum",
    description: "Choose a plan that suits you best.",
  },
  {
    src: slidercard4,
    title: "100% Internship Guarantee",
    description:
      " Kickstart Your Career with Real-World Experience!",
  },
  {
    src: slidercard5,
    title: "Expert Mentorship",
    description:
      "Learn, Grow, and Succeed with Industry Leaders",
  },
];

const WhyChooseUs = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="home-section-7">
      <h2 className="text-[63px] font-extrabold text-[#0F1F3E] text-center">
        What Our Students Say
      </h2>
      <p className="text-[28px] font-semibold text-[#00a6ff] text-center mt-2">
        Real experiences. Real transformations.
      </p>
      <p className="text-[19px] text-[#0F1F3E] max-w-7xl  text-center mx-auto ">
            Hear directly from our students about their learning journey at SkillonIT. From gaining practical skills to landing their first job, these stories reflect the real impact of quality IT education.
          </p>
      <div className="sec7-slider-section">
        <div className="section7-slider-section">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={2.8}
            loop={true}
            allowTouchMove={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="coverflow-effect-swiper-2"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1440: { slidesPerView: 2.8 },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slider-card-1">
                  <img src={slide.src} alt="card" className="slider-card-img" />
                  <div className="slider-card-content-1">
                    <h6 className="slider-text-1">{slide.title}</h6>
                    <p className="slider-text-2">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-navigation-button-choose">
            <button onClick={goToNextSlide} className="custom-next-btn-choose">
              <MdKeyboardArrowLeft />
            </button>
            <button onClick={goToPrevSlide} className="custom-next-btn-choose">
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
