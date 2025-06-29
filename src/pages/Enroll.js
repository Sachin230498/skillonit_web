import React, { useEffect, useState } from "react";
import duration from "../assets/images/courses/calender-icon.svg";
import mic from "../assets/images/courses/mic.svg";
import enrollimg from "../assets/images/courses/enroll.svg";
import sparkle from "../assets/images/enroll/Sparkle.svg";
import dot from "../assets/images/enroll/dot.svg";
import keyfeatureimg from "../assets/images/key-feature-img.svg";
import play from "../assets/images/enroll/play.svg";
import downarrow from "../assets/images/enroll/accordionarrow.svg";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GetSingleCourseApi,
} from "../components/Helper/Redux/ReduxThunk/Homepage";
import BreadCrumb from "../components/common/BreadCrumbs";
import BlogFaq from "../components/common/BlogFaq";

const Enroll = () => {
  const { url } = useParams();
  const dispatch = useDispatch();
  const [singlecourse, setsingleCourse] = useState([]);
  const [moduleANs, setModuleAns] = useState("");
  const [features, setFeatures] = useState([]);
  const [faq, setFaq] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);


  const fetchCourseData = async () => {
    dispatch(
      GetSingleCourseApi(url, (resp) => {
        if (resp.status == true) {
          setsingleCourse(resp.data);
          setModuleAns(resp?.data?.topics);
          setFeatures(resp?.data?.keyFeatures)
          setFaq(resp?.data?.faqs)
        }
      })
    );
  };

  useEffect(() => {
    fetchCourseData();
  }, [url]);

  const handleAccordionToggle = (accordionId) => {
    setIsCollapsed(!isCollapsed);
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };

  let isLoggedin = localStorage.getItem("token");
  // const handleAddTOCart = (id) => {
  //   if (isLoggedin) {
  //     let params = {
  //       courseId: id,
  //     };
  //     dispatch(
  //       AddtoCardCourseApi(params, (resp) => {
  //         if (resp.status == true) {
  //           Notiflix.Notify.success(resp?.message);
  //           navigate("/cart");
  //         } else {
  //           Notiflix.Notify.failure(resp?.message);
  //         }
  //       })
  //     );
  //   } else {
  //     Notiflix.Confirm.show(
  //       "Need to Login",
  //       "Do you want to go Login page?",
  //       "Yes",
  //       "No",
  //       function okCb() {
  //         // navigate("/signin");
  //         setShowLoginModal(true);
  //       },
  //       function cancelCb() { },
  //       {}
  //     );
  //   }
  // };

  return (
    <div className="enroll">
      <BreadCrumb
        pagename="Courses"
        nextpagename={`${singlecourse?.heading}`}
        cname="enroll-bread-top"
      />
      <section className="enroll-section-1">
        <div className="row g-4">
          <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
            <div className="enroll-ban-left">
              <img
                src={sparkle}
                alt="sparkle"
                className="enroll-ban-sparkle-img"
              />
              <h1 className="h-text-1">{singlecourse?.courseName}</h1>
              <div
                className="p-text-2"
                dangerouslySetInnerHTML={{ __html: singlecourse?.description }}
              />
              <div className="enroll-ban-left-content mt-5">
                <div className="enroll-premium-div">
                  <h6 className="h-text-2 text-nowrap">
                    {singlecourse?.heading}
                  </h6>
                  <div className="premium-div-position">
                    <p className="pc-text">{singlecourse?.classType}</p>
                  </div>
                </div>

                <div className="pc-duration enroll-pc-duration">
                  <div className="duration-div">
                    <img
                      src={duration}
                      alt="duration"
                      className="duration-img"
                    />
                    <p className="pc-text-2">{singlecourse?.duration} Months</p>
                  </div>
                  <div className="duration-div">
                    <img src={mic} alt="language" className="duration-img" />
                    <p className="pc-text-2">{singlecourse?.language}</p>
                  </div>
                  <div className="duration-div">
                    <img
                      src={enrollimg}
                      alt="enrolled"
                      className="duration-img"
                    />
                    <p className="pc-text-2">
                      {singlecourse?.totalEnrollment} Enrolled
                    </p>
                  </div>
                </div>
                <div className="enroll-offer-div">
                  <div className="pc-offer-content-1">
                    <div className="pc-offer-content-inner">
                      <p className="pc-text-3">
                        Flat {singlecourse?.discountPercentage}% Off, Grab The
                        Deal Now!
                      </p>
                    </div>
                  </div>
                  <div className="pc-offer-content-2">
                    <div className="pc-offer-content-inner-2">
                      <p className="pc-text-3">Hurry Few Seats Left</p>
                    </div>
                  </div>
                </div>
                <div className="enroll-offer-price">
                  <p className="pc-text-4">Rs. {singlecourse?.discount}</p>
                  <p className="pc-text-5">Rs. {singlecourse?.price}</p>
                </div>
                {isLoggedin ? (
                  <div className="enroll-banner-btn-div">
                    <button
                      className="btn-addToCart"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                    >
                      Add To Cart
                    </button>

                    <button
                      className="btn-checkout btn-addToCart"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                    >
                      Checkout
                    </button>
                  </div>
                ) : (
                  <div className="enroll-banner-btn-div">
                    <button
                      className="btn-addToCart px-5"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                    >
                      Enroll Now!!
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-12 order-lg-2 order-md-1 order-1">
            <div className="enroll-ban-right">
              <img
                src={singlecourse?.image || " "}
                alt="banner"
                className="enroll-banner-img"
              />
              <img
                src={dot}
                alt="dot"
                className="enroll-ban-dot-img-1 mobile-hide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="enroll-section-2">
        <div className="row g-3">
          <div className="col-lg-12 col-md-12 col-12">
            <h2 className="h-text-2">Key Features</h2>

            <div className="feature-card-div">
              <div className="row g-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                    <div className="features-div">
                      <p className="f-text-1">
                        <img
                          src={keyfeatureimg}
                          alt="featureimg"
                          className="f1-img"
                        />
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enroll-section-3">
        <h2 className="h-text-2">What You’ll Learn in This Course</h2>
        <div className="enroll-accordion-section">
          <div className="accordion" id="accordionExample">
            {moduleANs &&
              moduleANs?.map((accordion, index) => (
                <div className="accordion-item" key={index}>
                  <button
                    className={`accordion-button ${activeAccordion === index ? "" : "collapsed"
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${index}`}
                    aria-expanded={activeAccordion === index}
                    aria-controls={index}
                    onClick={() => handleAccordionToggle(index)}
                  >
                    <p className="a-text-1">
                      <img
                        src={play}
                        alt="play"
                        className="accordion-play-img"
                      />
                      {accordion.module}
                    </p>
                    <img
                      src={downarrow}
                      alt="downarrow"
                      className={`downarrow-accordion ${activeAccordion === index ? "rotate-arrow" : ""
                        }`}
                    />
                  </button>

                  <div
                    id={index}
                    className={`accordion-collapse collapse ${activeAccordion === index ? "show" : ""
                      }`}
                    data-bs-parent="#accordionExample"
                    style={{ transition: "height 0.3s ease" }}
                  >
                    <div className="accordion-body">
                      <div className="enroll-accordion-content">
                        <p className="a-text-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: accordion?.contents,
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <BlogFaq
        blogFaqs={faq}
        title="Find answer to common questions"
      />
    </div>
  );
};

export default Enroll;
