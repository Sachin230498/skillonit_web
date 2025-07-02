import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronDown } from "react-icons/fa";
import { FaIndia } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import NextImage from "../assets/images/nextarrow.svg";
import PrevImage from "../assets/images/prevarrow.svg";
import BlueblurImg from "../assets/images/blueblurImg.svg";
import gridlineImg from "../assets/images/gridLine.svg";
import journeycardImg from "../assets/images/cartEndImg.svg";
import logoBg from "../assets/images/totalLogoImg.svg";
import { Link } from "react-router-dom";
import appstoremob from "../assets/images/appstore-mobile.svg";
import playstoremob from "../assets/images/playstore-mobile.svg";
import starimg from "../assets/images/star.svg";
import mobilegridline from "../assets/images/gridlineimgmobile.svg";
import badgeimg from "../assets/images/badge.svg";
import SuccessStories from "../components/common/SuccessStories";
import ContactUs from "../components/layout/ContactUs";
import CustomCourses from "../components/Homecomponent/CustomCourses";
import { useDispatch } from "react-redux";
import { GetallCourseApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";
import WhyChooseUs from "../components/Homecomponent/WhyChooseUs";
import Partner from "../components/Homecomponent/Partner";
import duration from "../assets/images/courses/calender-icon.svg";
import mic from "../assets/images/courses/mic.svg";
import enroll from "../assets/images/courses/enroll.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExploreSection from "../components/Homecomponent/ExploreSection";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HomeTraining from "../components/common/HomeTraining";
import ReviewCarousel from "../components/common/ReviewCarousel";
import SkilledIndiaSection from "../components/common/SkilledIndiaSection";
import CourseGrid from "../components/common/CourseGrid";
import LearningGallery from "../components/common/LearningGallery";
import TestimonialSlider from "../components/common/TestimonialSlider";

Notiflix.Confirm.init({
  okButtonBackground: "#3572ef",
  titleColor: "#002a6a",
});

const Homepage = ({ handleOpen }) => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const [allcourse, setAllcourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(6);

  const fetchCourseData = async () => {
    dispatch(
      GetallCourseApi({}, (resp) => {
        if (resp.status === true) {
          setAllcourses(resp.data);
        }
      })
    );
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  const [startDate, setStartDate] = useState(null);

  const schema = yup.object().shape({
    dateOfBirth: yup.date().required("DOB is required"),
    certificateNumber: yup.string().required("Certificate Number is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Notiflix.Notify.failure("No data found");
    reset({
      dateOfBirth: "",
      certificateNumber: "",
    });

    setStartDate(null);
  };

  const [counts, setCounts] = useState({
    target: 0,
    mentor: 0,
    submission: 0,
    video: 0,
  });

  const targetRef = useRef(null);

  const targetValues = {
    target: 200,
    mentor: 15,
    submission: 1400,
    video: 300,
  };

  const animationDuration = 2000;

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        startCounting();
      }
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    Object.keys(targetValues).forEach((key) => {
      let start = 0;
      const step = targetValues[key] / (animationDuration / 16);

      const updateCount = () => {
        start += step;
        if (start >= targetValues[key]) {
          setCounts((prev) => ({ ...prev, [key]: targetValues[key] }));
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const [valueEnd, setValueEnd] = useState([98, 99, 95]);
  const [currentValue1, setCurrentValue1] = useState(10);
  const [currentValue2, setCurrentValue2] = useState(10);
  const [currentValue3, setCurrentValue3] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue1((prevValue) =>
        prevValue < valueEnd[0] ? prevValue + 1 : prevValue
      );
      setCurrentValue2((prevValue) =>
        prevValue < valueEnd[1] ? prevValue + 1 : prevValue
      );
      setCurrentValue3((prevValue) =>
        prevValue < valueEnd[2] ? prevValue + 1 : prevValue
      );
    }, 30);

    return () => clearInterval(interval);
  }, [valueEnd]);

  useEffect(() => {
    const updateVisibleCourses = () => {
      if (window.innerWidth <= 768) {
        setVisibleCourses(3);
      } else {
        setVisibleCourses(6);
      }
    };

    updateVisibleCourses();

    window.addEventListener("resize", updateVisibleCourses);
    return () => window.removeEventListener("resize", updateVisibleCourses);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://static.elfsight.com/platform/platform.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  // useEffect(() => {
  //   const observer = new MutationObserver(() => {
  //     const branding = document.querySelector(".ibnJBQ > a");
  //     if (branding) {
  //       branding.style.width = "0";
  //       observer.disconnect();
  //     }
  //   });

  //   observer.observe(document.body, { childList: true, subtree: true });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className="homepage">
      <section className="home-section-1">
        <div className=" lg:grid grid-cols-6">
          <div className="col-span-4  ">
            <Swiper
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link
                  to="/scholarship"
                  reloadDocument
                  className="swiper-slide-link"
                >
                  <img
                    src="/banner-1.svg"
                    alt="banner"
                    className="banner-img-alter mobile-hide"
                  />
                  <img
                    src="/m-banner-1.svg"
                    alt="banner"
                    className="banner-img-alter desktop-hide tab-hide"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to="/courses"
                  reloadDocument
                  className="swiper-slide-link"
                >
                  <img
                    src="/banner-2.svg"
                    alt="banner"
                    className="banner-img-alter mobile-hide"
                  />
                  <img
                    src="/m-banner-2.svg"
                    alt="banner"
                    className="banner-img-alter desktop-hide tab-hide"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to="/internship"
                  reloadDocument
                  className="swiper-slide-link"
                >
                  <img
                    src="/banner-3.svg"
                    alt="banner"
                    className="banner-img-alter mobile-hide"
                  />
                  <img
                    src="/m-banner-3.svg"
                    alt="banner"
                    className="banner-img-alter desktop-hide tab-hide"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to="/courses"
                  reloadDocument
                  className="swiper-slide-link"
                >
                  <img
                    src="/banner-4.svg"
                    alt="banner"
                    className="banner-img-alter mobile-hide"
                  />
                  <img
                    src="/m-banner-4.svg"
                    alt="banner"
                    className="banner-img-alter desktop-hide tab-hide"
                  />
                </Link>
              </SwiperSlide>

              <div className="custom-prev">
                <button className="btn-prev">
                  <img src={PrevImage} alt="prev" />
                </button>
              </div>
              <div className="custom-next">
                <button className="btn-next">
                  <img src={NextImage} alt="prev" />
                </button>
              </div>

              <div className="swiper-pagination"></div>
            </Swiper>
            <div className="px-16  custom-home">
              <form
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              >
                {/* <div className="certification-form-div">
                  <div className="c-form-left">
                    <img src={badgeimg} alt="badge" />
                  </div>
                  <div className="c-form-right">
                    <h6 className="c-text-1">Verify Your Certificate</h6>

                    <div className="input-group">
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="date"
                            className="form-control"
                            placeholder="Date of Birth"
                          />
                        )}
                      />
                    </div>
                    {errors.dateOfBirth && (
                      <p className="error-message-1">DOB is required</p>
                    )}

                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User ID/Certificate Serial Number"
                        {...register("certificateNumber")}
                      />
                      <span className="input-group-text">
                        <button type="submit" className="btn-in-submit">
                          Submit
                        </button>
                      </span>
                    </div>
                    {errors.certificateNumber && (
                      <p className="error-message-1">
                        {errors.certificateNumber.message}
                      </p>
                    )}
                  </div>
                </div> */}
              </form>

              <h1
                className="h-text-2  "
                style={{
                  textAlign: "left",
                }}
              >
                <span className="s-text-1">Vidarbha’s 1st ever</span> <br /> IT
                Academy
              </h1>
              <div className=" text-[#427DF5] text-[28px] font-bold text-left-home ">
                Unlocking Rural India's Potential with IT Skills
              </div>
              {/* <span className="s-text-2">in Buldhana, Maharashtra</span> */}
              <p className="center-p c-p-text hidden">
                SkillonIT stands as Vidarbha’s first IT academy, offering
                industry-focused IT training courses in Buldhana, Maharashtra.{" "}
                <br className="break t-break" /> Designed to equip aspiring
                professionals with in-demand IT skills, our expert-led courses
                ensure career-ready expertise.
              </p>
              <div className=" flex  flex-wrap mt-2 gap-2">
                <Link
                  to="/courses"
                  className="btn-explore custom-btn-explore"
                  reloadDocument
                >
                  Explore Courses
                </Link>
                <button
                  className="btn-explore custom-btn-explore"
                  onClick={() => handleOpen()}
                >
                  Enroll Now
                </button>
              </div>
              {/* <div className="button-section-playstore">
                <div className="btn-tooltip-container">
                  <button className="btn-store">
                    <img
                      src={appstoremob}
                      className="app-store-img"
                      alt="appstore"
                    />
                  </button>
                  <span className="tooltip-text">Coming Soon</span>
                </div>
                <div className="btn-tooltip-container">
                  <button className="btn-store">
                    <img
                      src={playstoremob}
                      className="app-store-img"
                      alt="playstore"
                    />
                  </button>
                  <span className="tooltip-text">Coming Soon</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="  col-span-2">
            <div className="max-w-md mt-36 lg:mt-2 mx-auto px-5 text-sm font-medium  ">
              <div className="rounded-t-2xl bg-gradient-to-r from-[#009dff] to-[#00c3ff] text-white text-center py-3 text-[14px] font-semibold">
                book a free ⚡ demo class
              </div>

              <form className="flex flex-col gap-4 py-4 px-3 shadow rounded-b-xl">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-md px-4 py-2 bg-[#f4f7fa] outline-none text-[#00c3ff]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-md px-4 py-2 bg-[#f4f7fa] outline-none text-[#00c3ff]"
                />
                <div className="flex items-center gap-2 bg-[#f4f7fa] rounded-md px-4 py-2">
                  <span className="flex items-center gap-1 text-gray-600">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-1 bg-transparent outline-none text-[#00c3ff]"
                  />
                </div>

                <div className="relative">
                  <select className="w-full rounded-md px-4 py-2 bg-[#f4f7fa] appearance-none outline-none text-[#00c3ff]">
                    <option>Course you are interested in</option>
                  </select>
                  <FaChevronDown className="absolute top-3 right-4 text-gray-500" />
                </div>

                <div className="mt-1">
                  <span className="text-[11px] text-blue-500 px-1">
                    Learning Mode
                  </span>
                  <div className="flex justify-between items-center rounded-md bg-[#f4f7fa] text-[#00c3ff] px-4 py-2 mt-1">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mode" defaultChecked />
                      <span>Online</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mode" />
                      <span>Offline</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-3 bg-[#009dff] hover:bg-[#0086d4] text-white py-2 rounded-md transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-2"></section>
      <section className="home-section-3">
        <ReviewCarousel />
      </section>
      <section className="home-section-3">
        <SkilledIndiaSection />
      </section>
      <section className="home-section-3">
        <CourseGrid />
      </section>
      <section className=" ">
        <LearningGallery />
      </section>
      <section className=" ">{/* <TestimonialSlider /> */}</section>

      <section className=" ">{/* <HomeTraining /> */}</section>

      {/* <section className="home-section-4">
        <div className="rating-section">
          <div className="rating-head">
            <div className="rating-text">
              <p className="">We are proud of...</p>
            </div>
            <div className="google-rating-div">
              <p className="google-text">
                Google Ratings
                <img src={starimg} className="rating-img" alt="rating" />
              </p>
            </div>
          </div>
          <div className="rating-card-section">
            <div className="row g-3">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card rating-card">
                  <p ref={targetRef} className="rating-p-1">
                    {counts.target}+
                  </p>
                  <p ref={targetRef} className="rating-p-2">
                    Learners
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card rating-card">
                  <p ref={targetRef} className="rating-p-1">
                    {counts.mentor}+
                  </p>
                  <p className="rating-p-2">Mentors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card rating-card">
                  <p ref={targetRef} className="rating-p-1">
                    {counts.submission}+
                  </p>
                  <p className="rating-p-2">Lines of Code Submission</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card rating-card">
                  <p ref={targetRef} className="rating-p-1">
                    {counts.video}+
                  </p>
                  <p className="rating-p-2">Videos</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="rating-card-div-1">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="card rating-card-2">
                        <div className="card-rating-circle">
                          <CircularProgressbar
                            value={currentValue1}
                            text={`${currentValue1}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                            })}
                          />
                        </div>

                        <p className="rating-content">
                          of Students finish <br />
                          their courses in just <br />3 Months
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="card rating-card-2">
                        <div className="card-rating-circle">
                          <CircularProgressbar
                            value={currentValue2}
                            text={`${currentValue2}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                            })}
                          />
                        </div>

                        <p className="rating-content">
                          of learners were able <br />
                          to grasp concepts <br /> more quickly.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="card rating-card-2">
                        <div className="card-rating-circle">
                          <CircularProgressbar
                            value={currentValue3}
                            text={`${currentValue3}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                            })}
                          />
                        </div>

                        <p className="rating-content">
                          of learners gain a <br />
                          clearer grasp of
                          <br />
                          challenging subjects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100">
          <h2 className="h-text-2">
            Discover <span className="s-text-1">Courses</span> That Spark Your
            Passion
          </h2>
          <p className="center-p center-p-margin">
            Explore our diverse range of courses and choose the one that fuels
            your enthusiasm and career growth.
          </p>
          <div className="card-section-1">
            <div className="card-section-contents-1 course">
              <div className="row g-3">
                {allcourse &&
                  allcourse?.slice(0, visibleCourses).map((course, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-12">
                      <Link
                        to={`/courses/${course.courseUrl}`}
                        className="link-enroll"
                        reloadDocument
                      >
                        <div className="card premium-card">
                          <div className="premium-card-head">
                            <div className="premium-card-head-position">
                              <img
                                src={course?.image || BlueblurImg}
                                alt="premiumcard"
                                className="premium-course-img"
                              />
                              <div className="premium-div-position">
                                <p className="pc-text">{course.classType}</p>
                              </div>
                            </div>
                          </div>
                          <div className="premium-card-body">
                            <p className="pc-text-1">{course.heading}</p>
                            <div className="pc-duration">
                              <div className="duration-div">
                                <img
                                  src={duration}
                                  alt="duration"
                                  className="duration-img"
                                />
                                <p className="pc-text-2">
                                  {course.duration} Months
                                </p>
                              </div>
                              <div className="duration-div">
                                <img
                                  src={mic}
                                  alt="language"
                                  className="duration-img"
                                />
                                <p className="pc-text-2">{course.language}</p>
                              </div>
                              <div className="duration-div">
                                <img
                                  src={enroll}
                                  alt="enrolled"
                                  className="duration-img"
                                />
                                <p className="pc-text-2">
                                  {course.totalEnrollment}
                                </p>
                              </div>
                            </div>
                            <div className="pc-offer-div">
                              <div className="pc-offer-content-1">
                                <div className="pc-offer-content-inner">
                                  <p className="pc-text-3">
                                    Flat {course.discountPercentage}% Off, Grab
                                    The Deal Now!
                                  </p>
                                </div>
                              </div>
                              <div className="pc-offer-content-2">
                                <div className="pc-offer-content-inner-2">
                                  <p className="pc-text-3">
                                    Hurry Few Seats Left
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="pc-offer-price">
                              <p className="pc-text-4">₹{course.discount}</p>
                              <p className="pc-text-5">₹{course.price}</p>
                            </div>
                            <button className="btn-pc-enroll">
                              Start Course
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center">
                <Link
                  to="/courses"
                  reloadDocument
                  className="text-decoration-none mt-3"
                >
                  <button className="btn-explore-course">
                    Explore All Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <CustomCourses swiperRef={swiperRef} allcourse={allcourse} /> */}

      {/* <section className="home-section-6">
        <h2 className="h-text-2">Explore Learning That Fits Your Goals</h2>
        <p className="center-p center-p-margin">
          Access self-paced courses, live interactive classes, and personalized
          1-to-1 instruction.
          <br className="break" /> Gain hands-on experience, internships, and
          job assistance. Enjoy classroom learning, corporate solutions,
          <br className="break" /> and join a premium network for career growth.
        </p>

        
        <ExploreSection />
      </section> */}

      <WhyChooseUs />

      {/* <section className="home-section-8">
        <h2 className="h-text-2">
          Real Stories, Real Success: <br className="break" /> SkillonIT Alumni
          Achievements
        </h2>
        <p className="center-p center-p-margin">
          Explore how SkillonIT has transformed lives! Hear from students who
          gained new skills,
          <br className="break" />
          secured internships, and landed dream jobs through our programs.{" "}
          <br className="break" />
          Join us to achieve your success story!
        </p>
        <SuccessStories />
      </section> */}

      {/* <section className="home-section-10">
        <h2 className="h-text-2">
          Your Path to Career Success
          <br className="break" /> Clear Roadmap to IT Excellence
        </h2>
        <p className="center-p center-p-margin">
          At SkillonIT, we provide a clear, structured roadmap that helps you
          gain the skills necessary for a successful IT career.{" "}
          <br className="break t-break" />
          From foundational knowledge to industry-ready expertise, our program
          is designed to guide you step-by-step.
          <br className="break t-break" />
          Join now and take the first step toward a brighter career with
          SkillonIT
        </p>
        <div className="journey-card-section">
          <img
            src={gridlineImg}
            alt="gridline"
            className="grid-line-img tab-hide mobile-hide"
          />
          <img
            src={mobilegridline}
            alt="gridline"
            className="grid-line-img-mobile"
          />
          <div className="row g-4">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-1">
                <h6 className="j-htext">
                  {" "}
                  Start Your Path <br className="break" /> with SkillonIT{" "}
                </h6>
                <p className="j-ptext">
                  Get ready to explore new opportunities with SkillonIT. <br />
                  Begin by familiarizing yourself with the platform <br />
                  and available programs to choose the <br /> best option for
                  your goals.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-2">
                <h6 className="j-htext">
                  Choose Your <br className="break" /> Career Path{" "}
                </h6>
                <p className="j-ptext">
                  Whether you are interested in IT, digital marketing,
                  <br />
                  or web development, select the course that fits your career{" "}
                  <br />
                  aspirations. SkillonIT offers several paths to match <br />
                  your interests and strengths.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-3">
                <h6 className="j-htext">
                  Enroll and Reserve <br className="break" /> Your Place
                </h6>
                <p className="j-ptext">
                  Sign up for your chosen program and <br />
                  secure your spot. Registration is quick and simple, <br />
                  ensuring you can start your learning without delay.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-4">
                <h6 className="j-htext">
                  Sharpen Your Skills <br className="break" /> for Success
                </h6>
                <p className="j-ptext">
                  With hands-on modules and easy-to-understand lessons, <br />
                  refine your abilities in your chosen field. Practice through
                  projects <br />
                  that simulate real-world tasks, enhancing your <br />
                  readiness for the workforce.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-5">
                <h6 className="j-htext">
                  Get Certified in <br className="break" /> Your Chosen Field
                </h6>
                <p className="j-ptext">
                  Complete your course and earn a professional
                  <br />
                  certificate that validates your expertise. This certificate{" "}
                  <br />
                  opens doors to new job opportunities in your field.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-6">
                <h6 className="j-htext">
                  Gain Practical <br className="break" /> Experience
                </h6>
                <p className="j-ptext">
                  Apply your newly acquired knowledge by <br />
                  working on live projects or internships, building your
                  portfolio <br />
                  and making you more attractive to employers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-7">
                <h6 className="j-htext">
                  Obtain Your Professional <br className="break" />{" "}
                  Certification{" "}
                </h6>
                <p className="j-ptext">
                  After completing the program, take part in
                  <br />
                  exams and receive industry-recognized certifications. These{" "}
                  <br />
                  certifications can boost your credibility and job prospects.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card journey-card journey-card-8">
                <h6 className="j-htext">
                  Begin Your Global <br className="break" /> Career Adventure
                </h6>
                <p className="j-ptext">
                  Step into the global job market with the skills and
                  credentials gained
                  <br className="break" />
                  through SkillonIT. Your certification, practical experience,
                  and
                  <br className="break" />
                  passion for success will help you secure positions with
                  leading <br className="break" />
                  companies around the world.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card journey-card  ">
                <img
                  src={journeycardImg}
                  alt="end"
                  className="journey-card-img mobile-hide tab-hide"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section> */}

      {/* <Partner /> */}

      {/* <section className="home-section-12">
        <h2 className="h-text-2">
          Our Graduates Make an Impact at Leading Firms
        </h2>
        <div className="company-logo-section">
          <img src={logoBg} alt="logo" className="total-logo-bg" />
        </div>
      </section> */}

      {/* <ContactUs /> */}

      {/* <section className="home-section-gr">
        <div className="elfsight-app-6aa10c8b-623d-4850-adcf-cf7d0a3bfb52" data-elfsight-app-lazy></div>
      </section> */}

      <div className="text-center font-bold my-20">
        <div className="text-[#0F1F3E] text-6xl ">Your Gateway to</div>
        <div className="text-8xl h-32   mt-4 bg-gradient-to-r from-[#0E8DE9] to-[#29D1FD] bg-clip-text text-transparent">
          Digital Excellence
        </div>
      </div>
    </div>
  );
};

export default Homepage;
