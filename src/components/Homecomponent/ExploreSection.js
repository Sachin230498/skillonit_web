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

import offerImg from "../../assets/images/offerImg.svg";
import selfdirected from "../../assets/images/selfdirected.svg";
import Liveclass from "../../assets/images/liveclass.svg";
import premiumClass from "../../assets/images/premiumclss.svg";
import practiceClass from "../../assets/images/practiceClass.svg";
import corporateClass from "../../assets/images/corporateClass.svg";
import learningClass from "../../assets/images/learningClass.svg";
import internshipClass from "../../assets/images/internshipClass.svg";
import jobassistance from "../../assets/images/jobassistance.svg";
import premiumnetwork from "../../assets/images/premiumnetwork.svg";

const offerData = [
  {
    title: "Self-Directed Courses",
    imgSrc: offerImg,
    imgSub: selfdirected,
  },
  {
    title: "LIVE Classes",
    imgSrc: offerImg,
    imgSub: Liveclass,
  },
  {
    title: "Premium 1-to-1 Class",
    imgSrc: offerImg,
    imgSub: premiumClass,
  },
  {
    title: "Interactive Practice Platforms",
    imgSrc: offerImg,
    imgSub: practiceClass,
  },
  {
    title: "Corporate Offerings",
    imgSrc: offerImg,
    imgSub: corporateClass,
  },
  {
    title: "Classroom Learning",
    imgSrc: offerImg,
    imgSub: learningClass,
  },
  {
    title: "Internship",
    imgSrc: offerImg,
    imgSub: internshipClass,
  },
  {
    title: "Job Assistance",
    imgSrc: offerImg,
    imgSub: jobassistance,
  },
  {
    title: "Access To Premium Network",
    imgSrc: offerImg,
    imgSub: premiumnetwork,
  },
];

const ExploreSection = () => {
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
    <>
      <div className="offer-card-section mobile-hide">
        <div className="row g-4">
          {offerData.map((offer, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="card offer-card">
                <img
                  src={offer.imgSub}
                  className="offer-card-img"
                  alt="offer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partner-swiper-section mt-4 desktop-hide tab-hide">
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="partner-swiper"
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
          <SwiperSlide>
            <div className="card offer-card">
              <img src={selfdirected} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img src={Liveclass} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img src={premiumClass} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img src={practiceClass} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img
                src={corporateClass}
                className="offer-card-img"
                alt="offer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img src={learningClass} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img
                src={internshipClass}
                className="offer-card-img"
                alt="offer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img src={jobassistance} className="offer-card-img" alt="offer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card offer-card">
              <img
                src={premiumnetwork}
                className="offer-card-img"
                alt="offer"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default ExploreSection;
