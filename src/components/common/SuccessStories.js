import React from "react";
import avatar from "../../assets/images/studentAvatar.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import commaSmall from "../../assets/images/commaSmall.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const SuccessStories = () => {
  return (
    <>
      <div className="homepage mobile-hide">
        <div className="student-card-section">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card student-card-1">
                <div className="student-card-head">
                  <img src={avatar} alt="avatar" className="student-avatar-img" />
                </div>
                <div className="student-card-body">
                  <h6 className="student-name">Sugumar</h6>
                  <p className="student-pos">Lead Designer</p>
                  <img
                    src={commaSmall}
                    className="comma-img-small"
                    alt="comma"
                  />
                  <p className="student-detail">
                    Sugumar joined SkillonIT with <br />a passion for design but
                    lacked technical <br />
                    expertise. Through our UI/UX program, <br />
                    he gained essential skills like wireframing <br />
                    and user research. With hands-on training and <br />
                    mentorship, Sugumar secured a position as a <br />
                    UI/UX Designer at a reputed company and <br />
                    is now creating impactful user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card student-card-1 student-card-2">
                <div className="student-card-head">
                  <img src={avatar2} alt="student-avatar" className="student-avatar-img-1" />
                </div>
                <div className="student-card-body">
                  <h6 className="student-name">Srigiriharan</h6>
                  <p className="student-pos">Front-End Developer</p>
                  <img
                    src={commaSmall}
                    className="comma-img-small"
                    alt="comma"
                  />
                  <p className="student-detail">
                    Srigiriharan’s success story with SkillonIT
                    <br />
                    highlights the power of quality IT education. <br />
                    Starting as an ambitious learner, he honed his
                    <br />
                    front-end development skills through hands-on <br />
                    training and expert guidance. Today, he <br />
                    is a Senior Front-End Developer at a reputed <br />
                    company,eading innovative projects. His <br />
                    His journey shows the potential SkillonIT <br />
                    offers to aspiring professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card student-card-1 student-card-3">
                <div className="student-card-head">
                  <img src={avatar3} alt="student-avatar" className="student-avatar-img" />
                </div>
                <div className="student-card-body">
                  <h6 className="student-name">Logesh</h6>
                  <p className="student-pos">Back-End Developer</p>
                  <img
                    src={commaSmall}
                    className="comma-img-small"
                    alt="comma"
                  />
                  <p className="student-detail">
                    Logesh, a passionate SkillonIT student, <br />
                    gained the skills and hands-on experience <br />
                    needed to break into the IT industry through <br />
                    our back-end development program. With <br />
                    expert mentorship and real-world projects, he
                    <br />
                    secured an internship that led to a full-time
                    <br />
                    role as a back-end developer at a <br />
                    reputed company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner-swiper-section mt-4 desktop-hide tab-hide">
        <Swiper
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
            <div className="card student-card-1">
              <div className="student-card-head">
                <img src={avatar} alt="student-avatar" className="student-avatar-img" />
              </div>
              <div className="student-card-body">
                <h6 className="student-name">Sugumar</h6>
                <p className="student-pos">Lead Designer</p>
                <img src={commaSmall} className="comma-img-small" alt="comma" />
                <p className="student-detail">
                  Sugumar joined SkillonIT with <br />a passion for design but
                  lacked technical <br />
                  expertise. Through our UI/UX program, <br />
                  he gained essential skills like wireframing <br />
                  and user research. With hands-on training and <br />
                  mentorship, Sugumar secured a position as a <br />
                  UI/UX Designer at a reputed company and <br />
                  is now creating impactful user experiences.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card student-card-1 student-card-2">
              <div className="student-card-head">
                <img src={avatar2} alt="student-avatar" className="student-avatar-img-1" />
              </div>
              <div className="student-card-body">
                <h6 className="student-name">Srigiriharan</h6>
                <p className="student-pos">Front-End Developer</p>
                <img src={commaSmall} className="comma-img-small" alt="comma" />
                <p className="student-detail">
                  Srigiriharan’s success story with SkillonIT
                  <br />
                  highlights the power of quality IT education. <br />
                  Starting as an ambitious learner, he honed his
                  <br />
                  front-end development skills through hands-on <br />
                  training and expert guidance. Today, he <br />
                  is a Senior Front-End Developer at a reputed <br />
                  company,eading innovative projects. His <br />
                  His journey shows the potential SkillonIT <br />
                  offers to aspiring professionals.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card student-card-1 student-card-3">
              <div className="student-card-head">
                <img src={avatar3} alt="student-avatar" className="student-avatar-img" />
              </div>
              <div className="student-card-body">
                <h6 className="student-name">Logesh</h6>
                <p className="student-pos">Back-End Developer</p>
                <img src={commaSmall} className="comma-img-small" alt="comma" />
                <p className="student-detail">
                  Logesh, a passionate SkillonIT student, <br />
                  gained the skills and hands-on experience <br />
                  needed to break into the IT industry through <br />
                  our back-end development program. With <br />
                  expert mentorship and real-world projects, he
                  <br />
                  secured an internship that led to a full-time
                  <br />
                  role as a back-end developer at a <br />
                  reputed company.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default SuccessStories;
