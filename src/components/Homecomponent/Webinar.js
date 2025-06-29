import React, { useRef, useState } from "react";
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
import Playimg from "../../assets/images/playimg.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";



const slidesData2 = [
  {
    src: Playimg,
    title: "Job Assistance",
    description:
      "We Provide Dedicated Support To Help You Land Your Dream Job.",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
 
  },
  {
    src: Playimg,
    title: "Flexible Payment Plans",
    description: "Guaranteed internships to kickstart your career.",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "Cutting-Edge Curriculum",
    description: "Choose a plan that suits you best.",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "100% Internship Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "Expert Mentorship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "Flexible Payment Plans",
    description: "Guaranteed internships to kickstart your career.",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "Cutting-Edge Curriculum",
    description: "Choose a plan that suits you best.",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "100% Internship Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
  {
    src: Playimg,
    title: "100% Internship Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    videoSrc: "https://www.youtube.com/embed/JGwWNGJdvx8",
  },
];


const Webinar = () => {

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
    
          const [activeIndex, setActiveIndex] = useState(0);
        
          const [isVideoVisible, setIsVideoVisible] = useState(false);
          const [videoSrc, setVideoSrc] = useState("");
        
          const handleImageClick = (src) => {
            setVideoSrc(src);
            setIsVideoVisible(true);
          };
        
          const handleCloseVideo = () => {
            setIsVideoVisible(false);
            setVideoSrc("");
          };


  return (
    <section className="home-section-13">
      <h2 className="h-text-2">Exclusive Webinars</h2>
      <p className="center-p center-p-margin">
        Unlock your potential with our dynamic webinars! Dive into the latest
        industry, engage with <br className="break" />
        thought leaders, and expand your skillset in an interactive environment.
        Elevate your learning <br className="break"/>
        experience and connect with a vibrant community of future innovators!.
      </p>
      <div className="home-section-9 home-section13-slider">
        <div className="sec7-slider-section ">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.5}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow]}
            className="coverflow-effect-swiper coverflow-effect-position"
            initialSlide={2}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {slidesData2.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slider-card-1">
                  <img
                    src={slide.src}
                    alt="card"
                    className="slider-card-img play-img"
                    onClick={() => handleImageClick(slide.videoSrc)}
                  />
                  <div className="slider-card-content-1">
                    <h6 className="slider-text-1">{slide.title}</h6>
                    <p className="slider-text-2">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="navigation-slider-vdo">
              <button className="nav-button-prev" onClick={goToPrevSlide}>
                <RiArrowRightSLine />
              </button>
              <button className="nav-button-next" onClick={goToNextSlide}>
                <MdKeyboardArrowLeft />
              </button>
            </div>
          </Swiper>

          <div className="video-play-container">
            {isVideoVisible && (
              <div className="video-overlay" onClick={handleCloseVideo}>
                <div className="video-container">
                  <iframe
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
