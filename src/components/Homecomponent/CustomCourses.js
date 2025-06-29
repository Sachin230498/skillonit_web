import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/images/SearchIcon.svg";
import customCardImg from "../../assets/images/customcardImg.svg";
import htmlTempleteImg from "../../assets/images/htmltemplete.svg";
import enrollIcon from "../../assets/images/enroll.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import NextImage from "../../assets/images/nextarrow.svg";
import PrevImage from "../../assets/images/prevarrow.svg";
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
import { useDispatch } from "react-redux";
import { GetallCourseApi } from "../Helper/Redux/ReduxThunk/Homepage";
import { Link } from "react-router-dom";
import duration from "../../assets/images/courses/calender-icon.svg";
import mic from "../../assets/images/courses/mic.svg";
import enroll from "../../assets/images/courses/enroll.svg";

const seeallData = [
  {
    title: "One To One Class",
    className: "one-to-one",
    subject: "HTML",
    language: "English",
    enrollCount: 1649,
  },
  {
    title: "Self Directed",
    className: "one-to-one self-directed",
    subject: "HTML",
    language: "English",
    enrollCount: 1649,
  },
  {
    title: "Live Class",
    className: "one-to-one live-class",
    subject: "HTML",
    language: "English",
    enrollCount: 1649,
  },
  {
    title: "Offline",
    className: "one-to-one offline",
    subject: "HTML",
    language: "English",
    enrollCount: 1649,
  },
];
const CustomCourses = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const filteredCourses = props?.allcourse?.filter((course) =>
    (course.courseName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.classType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.heading?.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory ? course.categoryName === selectedCategory : true)
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let isLoggedin = localStorage.getItem("token");

  return (
    <section className="home-section-5 ">
      <div className="course mt-0">
        <h2 className="h-text-2">Customize Your Learning Path</h2>
        <p className="center-p center-p-margin">
          Choose the skills and topics that align with your career goals.
          <br className="break" />
          Our Custom Modules give you the flexibility to focus on what matters
          most,
          <br className="break" />
          allowing you to learn at your own pace.
        </p>
        <div className="input-group custom-input-group">
          <div className="category-dropdown" ref={dropdownRef}>
            <button
              className={isOpen ? "btn-category-active" : "btn-category"}
              type="button"
              id="button-addon1"
              onClick={toggleDropdown}
            >
              {selectedCategory || "Categories"}
            </button>

            {isOpen && (
              <div className="category-dropdown-menu">
                <span
                  onClick={() => handleCategorySelect("")}
                  className="category-dropdown-item"
                >
                  All Categories
                </span>
                {props?.allcourse.length > 0 ? (
                  [
                    ...new Set(
                      props.allcourse.map((course) => course.categoryName)
                    ),
                  ].map((category, index) => (
                    <span
                      key={index}
                      onClick={() => handleCategorySelect(category)}
                      className="category-dropdown-item"
                    >
                      {category}
                    </span>
                  ))
                ) : (
                  <p className="category-dropdown-item">No categories found</p>
                )}
              </div>
            )}
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Anything"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <span className="input-group-text" id="basic-addon1">
            <img src={searchIcon} alt="search" className="custom-search-icon" />
          </span> */}
        </div>
        <div className="custom-tabs">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-one-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-one"
                type="button"
                role="tab"
                aria-controls="pills-one"
                aria-selected="true"
              >
                One To One Class
              </button>
            </li> */}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-offline-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-offline"
                type="button"
                role="tab"
                aria-controls="pills-offline"
                aria-selected="false"
              >
                Offline Class
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-self-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-self"
                type="button"
                role="tab"
                aria-controls="pills-self"
                aria-selected="false"
              >
                Self Directed
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-live-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-live"
                type="button"
                role="tab"
                aria-controls="pills-live"
                aria-selected="false"
              >
                Live Class
              </button>
            </li> */}

            {/* <li className="nav-item" role="presentation">
              <Link
                to="/courses"
                className="text-decoration-none"
                reloadDocument
              >
                <button
                  className="nav-link"
                // id="pills-all-tab"
                // data-bs-toggle="pill"
                // data-bs-target="#pills-all"
                // type="button"
                // role="tab"
                // aria-controls="pills-all"
                // aria-selected="false"
                >
                  See All
                </button>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="tab-content w-100" id="pills-tabContent">
          <div
            className="tab-pane fade"
            id="pills-one"
            role="tabpanel"
            aria-labelledby="pills-one-tab"
            tabIndex="0"
          >
            <div className="custom-card-section">
              <div className="row g-3 justify-content-center text-center">
                {/* {props?.allcourse &&
                props?.allcourse
                  .filter((item) => item.classType == "One To One Class")
                  .map((card, index) => (
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="card custom-card">
                        <div className="custom-card-head">
                          <div className="custom-position">
                           <img
                              src={customCardImg}
                              alt="custom"
                              className="custom-card-img"
                            />
                            <div className="one-to-one">{card.classType}</div>
                          </div>
                        </div>
                        <div className="custom-card-body">
                          <h6 className="cc-htext">{card.courseName}</h6>
                          <div className="div-enroll">
                            <p className="enroll-p">{card.language}</p>
                            <p className="enroll-p-1">
                             <img
                                src={enrollIcon}
                                className="enroll-icon"
                                alt="enroll"
                              />
                              {card.totalEnrollment} Enrolled
                            </p>
                            <Link to={`/courses/${card._id}`}>
                              <button className="btn-start-now">
                                Start Now
                              </button>
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                <p className="h-text-2 cmg-soon">Coming Soon</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-self"
            role="tabpanel"
            aria-labelledby="pills-self-tab"
            tabIndex="0"
          >
            <div className="custom-card-section">
              <div className="row g-3 justify-content-center text-center">
                {/* {props?.allcourse &&
                props?.allcourse
                  .filter((item) => item.classType == "Self Directed")
                  .map((card, index) => (
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="card custom-card">
                        <div className="custom-card-head">
                          <div className="custom-position">
                           <img
                              src={customCardImg}
                              alt="custom"
                              className="custom-card-img"
                            />
                            <div className="one-to-one self-directed">
                              {card.classType}
                            </div>
                          </div>
                        </div>
                        <div className="custom-card-body">
                          <h6 className="cc-htext">{card.courseName}</h6>
                          <div className="div-enroll">
                            <p className="enroll-p">{card.language}</p>
                            <p className="enroll-p-1">
                             <img
                                src={enrollIcon}
                                className="enroll-icon"
                                alt="enroll"
                              />
                              {card.totalEnrollment} Enrolled
                            </p>
                            <Link to={`/courses/${card._id}`}>
                              <button className="btn-start-now">
                                Start Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                <p className="h-text-2 cmg-soon">Coming Soon</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-live"
            role="tabpanel"
            aria-labelledby="pills-live-tab"
            tabIndex="0"
          >
            <div className="custom-card-section">
              <div className="row g-3 text-center">
                {/* {props?.allcourse &&
                props?.allcourse
                  .filter((item) => item.classType == "Live Class")
                  .map((card, index) => (
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="card custom-card">
                        <div className="custom-card-head">
                          <div className="custom-position">
                           <img
                              src={customCardImg}
                              alt="custom"
                              className="custom-card-img img-fluid"
                            />
                            <div className="one-to-one live-class">
                              {card.classType}
                            </div>
                          </div>
                        </div>
                        <div className="custom-card-body">
                          <h6 className="cc-htext">{card.courseName}</h6>
                          <div className="div-enroll">
                            <p className="enroll-p">{card.language}</p>
                            <p className="enroll-p-1">
                             <img
                                src={enrollIcon}
                                className="enroll-icon"
                                alt="enroll"
                              />
                              {card.totalEnrollment} Enrolled
                            </p>
                            <Link to={`/courses/${card._id}`}>
                              <button className="btn-start-now">
                                Start Now
                              </button>
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}
                <p className="h-text-2 cmg-soon">Coming Soon</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id="pills-offline"
            role="tabpanel"
            aria-labelledby="pills-offline-tab"
            tabIndex="0"
          >
            {/* <div className="custom-card-section">
            <div className="row g-3 justify-content-center">
              {props?.allcourse &&
                props?.allcourse
                  .filter((item) => item.classType == "Offline Class")
                  .map((card, index) => (
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="card custom-card">
                        <div className="custom-card-head">
                          <div className="custom-position">
                           <img
                              src={card?.image || customCardImg}
                              alt="custom"
                              className="custom-card-img"
                            />
                            <div className="one-to-one offline">
                              {card.classType}
                            </div>
                          </div>
                        </div>
                        <div className="custom-card-body">
                          <h6 className="cc-htext">{card.courseName}</h6>
                          <div className="div-enroll">
                            <p className="enroll-p">{card.language}</p>
                            <p className="enroll-p-1">
                             <img
                                src={enrollIcon}
                                className="enroll-icon"
                                alt="enroll"
                              />
                              {card.totalEnrollment} Enrolled
                            </p>
                            <Link to={`/courses/${card._id}`}>
                              <button className="btn-start-now">
                                Start Now
                              </button>
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div> */}

            <div className="premium-card-section">
              <div className="premium-card-div">
                <div className="custom-card-section">
                  <div className="row g-3">
                    <Swiper
                      ref={props.swiperRef}
                      pagination={{ el: ".swiper-pagination", clickable: true }}
                      navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                      }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      onSwiper={(swiper) => (props.swiperRef.current = swiper)}
                      modules={[Pagination, Navigation, Autoplay]}
                      className="pagination-card-swiper"
                      breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1280: { slidesPerView: 3, spaceBetween: 40 },
                        1440: { slidesPerView: 3.2, spaceBetween: 50 },
                        1920: { slidesPerView: 4, spaceBetween: 60 },
                      }}
                    >
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((card, index) => (
                          <SwiperSlide key={index}>
                            <div className="col-lg-12 col-md-12 col-12">
                              <Link
                                to={`/courses/${card.courseUrl}`                                }
                                className="link-enroll"
                                reloadDocument
                              >
                                <div className="card premium-card">
                                  <div className="premium-card-head">
                                    <div className="premium-card-head-position">
                                      <img
                                        src={card?.image || customCardImg}
                                        alt="custom"
                                        className="premium-course-img"
                                      />
                                      <div className="premium-div-position">
                                        <p className="pc-text">
                                          {card.classType}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="premium-card-body">
                                    <h6 className="pc-text-1">
                                      {card.heading}
                                    </h6>
                                    <div className="pc-duration">
                                      <div className="duration-div">
                                        <img
                                          src={duration}
                                          alt="duration"
                                          className="duration-img"
                                        />
                                        <p className="pc-text-2">
                                          {card.duration} Months
                                        </p>
                                      </div>
                                      <div className="duration-div">
                                        <img
                                          src={mic}
                                          alt="language"
                                          className="duration-img"
                                        />
                                        <p className="pc-text-2">
                                          {card.language}
                                        </p>
                                      </div>
                                      <div className="duration-div">
                                        <img
                                          src={enroll}
                                          alt="enrolled"
                                          className="duration-img"
                                        />
                                        <p className="pc-text-2">
                                          {card.totalEnrollment}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="pc-offer-div">
                                      <div className="pc-offer-content-1">
                                        <div className="pc-offer-content-inner">
                                          <p className="pc-text-3">
                                            Flat {card.discountPercentage}% Off,
                                            Grab The Deal Now!
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
                                      <p className="pc-text-4">
                                        ₹{card.discount}
                                      </p>
                                      <p className="pc-text-5">₹{card.price}</p>
                                    </div>
                                    <button className="btn-pc-enroll">
                                      Start Course
                                    </button>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                        ))
                      ) : (
                        <div className="no-data">
                          <p>No data found</p>
                        </div>
                      )}
                      <div className="swiper-pagination"></div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabIndex="0"
          >
            <div className="custom-card-section">
              <div className="row g-3">
                {seeallData.map((card, index) => (
                  <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <div className="card custom-card">
                      <div className="custom-card-head">
                        <div className="custom-position">
                          <img
                            src={customCardImg}
                            alt="custom"
                            className="custom-card-img"
                          />
                          <div className={card.className}>{card.title}</div>
                        </div>
                      </div>
                      <div className="custom-card-body">
                        <h6 className="cc-htext">{card.subject}</h6>
                        <div className="div-enroll">
                          <p className="enroll-p">{card.language}</p>
                          <p className="enroll-p-1">
                            <img
                              src={enrollIcon}
                              className="enroll-icon"
                              alt="enroll"
                            />
                            {card.enrollCount} Enrolled
                          </p>
                          <button className="btn-start-now">Start Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link to="/courses" reloadDocument className="text-decoration-none">
          <button className="btn-explore-course">Explore All Courses</button>
        </Link>

        {/* <div className="premium-resource-section">
        <h2 className="h-text-2">Learn from Premium Resources </h2>
        <p className="center-p center-p-margin">
          Select special skills and topics you want to master with our Custom
          Modules. Tailor <br className="break" />
          Your learning by choosing only the modules that fit your career goals,
          giving you full control
          <br className="break" />
          to focus on what matters most. Learn flexibly and at your own pace!.
        </p>

        <div className="input-group custom-input-group">
          <button
            className="btn-category btn-category-2"
            type="button"
            id="button-addon1"
          >
            Categories
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search Anything"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
           <img
              src={searchIcon}
              alt="search"
              className="custom-search-icon"
            />
          </span>
        </div>
        
        <div className="premium-card-section">
          <div className="premium-card-div">
            <div className="custom-card-section">
              <div className="row g-3">
                <Swiper
                  ref={props.swiperRef}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  onSwiper={(swiper) => {
                    // Assigning swiper instance to ref to ensure custom navigation works
                    props.swiperRef.current = swiper;
                  }}
                  modules={[Pagination, Navigation]}
                  className="pagination-card-swiper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3.5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {props?.allcourse &&
                    props?.allcourse
                      .filter((item) => item.classType == "Offline Class")
                      .map((card, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="col-lg-12 col-md-12 col-12"
                            key={index}
                          >
                            <div className="card premium-card">
                              <div className="premium-card-head">
                                <div className="premium-card-head-position">
                                 <img
                                    src={card?.image || customCardImg}
                                    alt="custom"
                                    className="premium-course-img"
                                  />
                                  <div className="premium-div-position">
                                    <p className="pc-text">{card.classType}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="premium-card-body">
                                <h6 className="pc-text-1">{card.courseName}</h6>
                                <div className="pc-duration">
                                  <div className="duration-div">
                                    <img
                                      src={duration}
                                      alt="duration"
                                      className="duration-img"
                                    />
                                    <p className="pc-text-2">{card.duration}</p>
                                  </div>
                                  <div className="duration-div">
                                    <img
                                      src={mic}
                                      alt="language"
                                      className="duration-img"
                                    />
                                    <p className="pc-text-2">{card.language}</p>
                                  </div>
                                  <div className="duration-div">
                                    <img
                                      src={enroll}
                                      alt="enrolled"
                                      className="duration-img"
                                    />
                                    <p className="pc-text-2">
                                      {card.totalEnrollment}
                                    </p>
                                  </div>
                                </div>
                                <div className="pc-offer-div">
                                  <div className="pc-offer-content-1">
                                    <div className="pc-offer-content-inner">
                                      <p className="pc-text-3">
                                        Flat {card.discountPercentage}% Off,
                                        Grab The Deal Now!
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
                                  <p className="pc-text-4">₹{card.discount}</p>
                                  <p className="pc-text-5">₹{card.price}</p>
                                </div>
                                <Link
                                  to={
                                    isLoggedin
                                      ? `/courses/${card._id}`
                                      : `/signin`
                                  }
                                  className="link-enroll"
                                >
                                  <button className="btn-pc-enroll">
                                    Start Course
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}

                  <div className="pagination-navigation-container">
                    <div className="custom-prev">
                      <button className="btn-prev" aria-label="Previous">
                       <img src={PrevImage} alt="Previous" />
                      </button>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="custom-next">
                      <button className="btn-next" aria-label="Next">
                       <img src={NextImage} alt="Next" />
                      </button>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default CustomCourses;
