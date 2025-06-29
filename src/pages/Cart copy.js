import React, { useEffect, useState } from "react";
import bannerimg from "../assets/images/courses/banner.svg";
import searchicon from "../assets/images/courses/search.svg";
import dot from "../assets/images/courses/dotblue.svg";
import star from "../assets/images/courses/StarFour.svg";
import dropArrow from "../assets/images/courses/dropdownarrow.svg";
import searchBlue from "../assets/images/courses/searchblue.svg";
import premiumcardimg from "../assets/images/courses/premiumcard.svg";
import duration from "../assets/images/courses/duration.svg";
import mic from "../assets/images/courses/mic.svg";
import enroll from "../assets/images/courses/enroll.svg";
import livecardimg from "../assets/images/courses/liveImg.svg";
import lesson from "../assets/images/courses/lesson.svg";
import profession from "../assets/images/courses/profession.svg";
import trophy from "../assets/images/courses/trophy.svg";
import profileimg from "../assets/images/courses/profile.svg";
import rightarrow from "../assets/images/courses/rightarrow.svg";
import strikeimg from "../assets/images/courses/strike1.svg";
import strikeimg2 from "../assets/images/courses/strike2.svg";
import sparkle from "../assets/images/courses/Sparkle.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetMyCartApi } from "../components/Helper/Redux/ReduxThunk/Homepage";

const courseData = [
  {
    id: 1,
    title: "Blockchain Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 2,
    title: "Front-End Development (Web)",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 3,
    title: "Back-End Development (Web)",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 4,
    title: "Full Stack Development (Web)",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 5,
    title: "Professional UI UX Design",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 6,
    title: "Professional Graphic Design",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 7,
    title: "Unity 3D Game Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 8,
    title: "Digital Marketing",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 9,
    title: "Mobile App Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 10,
    title: "Web3 Marketing",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 11,
    title: "Unity 3D Game Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 12,
    title: "Mobile App Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 13,
    title: "Mobile App Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 14,
    title: "Web3 Marketing",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 15,
    title: "Unity 3D Game Development",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
];
const modulesData = [
  {
    id: 1,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 2,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 3,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 4,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 5,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 6,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 7,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 8,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 9,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 10,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 11,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
  {
    id: 12,
    title: "HTML",
    duration: "6 Months",
    language: "English",
    enrolled: "225 Enrolled",
    offer: "Flat 50% Off, Grab The Deal Now!",
    seats: "Hurry Few Seats Left",
    price: "RS. 99,999",
    originalPrice: "RS 1,99,999",
    image: premiumcardimg,
  },
];

const livecardData = [
  {
    img: livecardimg,
    title: "UI/UX Design Essential Training",
    lessons: 6,
    level: "Professional",
    points: "75 / 100",
    days: 14,
    date: "14/12/2024",
    time: "8 PM To 10 PM IST",
    classStatus: "Upcoming Class",
    tutorName: "Surya Vino",
    tutorRole: "Tutor",
    trophyIcon: trophy,
    bgname1: "div-upcoming-bg-1",
    bgname2: "div-upcoming-bg-2",
  },
  {
    img: livecardimg,
    title: "UI/UX Design Essential Training",
    lessons: 6,
    level: "Professional",
    points: "75 / 100",
    days: 14,
    date: "14/12/2024",
    time: "8 PM To 10 PM IST",
    classStatus: "Upcoming Class",
    tutorName: "Surya Vino",
    tutorRole: "Tutor",
    trophyIcon: trophy,
    bgname1: "div-upcoming-bg-1",
    bgname2: "div-upcoming-bg-2",
  },
  {
    img: livecardimg,
    title: "UI/UX Design Essential Training",
    lessons: 6,
    level: "Professional",
    points: "75 / 100",
    days: 14,
    date: "14/12/2024",
    time: "8 PM To 10 PM IST",
    classStatus: "Class Scheduled",
    tutorName: "Surya Vino",
    tutorRole: "Tutor",
    trophyIcon: trophy,
    bgname1: "div-class-bg-1",
    bgname2: "div-class-bg-2",
  },
];

const Cart = () => {
  const [buttonText, setButtonText] = useState("Sort By");
  const [buttonText1, setButtonText1] = useState("Mode");
  const dispatch = useDispatch();
  const handleItemClick = (text) => {
    setButtonText(text);
  };
  const handleItemClick1 = (text) => {
    setButtonText1(text);
  };

  const [progress, setProgress] = useState(30);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const container = document.querySelector(".progress-line");
      const rect = container.getBoundingClientRect();
      const newProgress = ((e.clientX - rect.left) / rect.width) * 100;

      if (newProgress >= 0 && newProgress <= 100) {
        setProgress(newProgress);
      }
    }
  };

  const goToCoursesTab = () => {
    const coursesTabButton = document.getElementById("course-home-tab");

    if (coursesTabButton) {
      coursesTabButton.click();
      const courseSection = document.getElementById("course-section-1");
      if (courseSection) {
        const offset = 50;
        const topPos =
          courseSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: topPos,
          behavior: "smooth",
        });
      }
    }
  };

  const [visibleCourses, setVisibleCourses] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const updateVisibleCourses = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCourses(3);
      } else {
        setVisibleCourses(12);
      }
    };

    updateVisibleCourses();

    window.addEventListener("resize", updateVisibleCourses);

    return () => window.removeEventListener("resize", updateVisibleCourses);
  }, []);

  const showAllCourses = () => {
    setShowAll(true);
  };

  const displayedCourses = showAll
    ? courseData
    : courseData.slice(0, visibleCourses);

  const hasMoreCourses = courseData.length > 12;

  const [visibleModules, setVisibleModules] = useState(0);
  const [showAll1, setShowAll1] = useState(false);

  useEffect(() => {
    fetchCourseData();

    const updateVisibleModules = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleModules(3);
      } else {
        setVisibleModules(12);
      }
    };

    updateVisibleModules();

    window.addEventListener("resize", updateVisibleModules);

    return () => window.removeEventListener("resize", updateVisibleModules);
  }, []);

  const showAllModules = () => {
    setShowAll1(true);
  };

  const displayedModules = showAll1
    ? modulesData
    : modulesData.slice(0, visibleModules);
  const [getCart, setGetcart] = useState('')
  const fetchCourseData = async () => {
    await dispatch(GetMyCartApi((resp) => {
      if (resp.status == true) {
        setGetcart(resp.data);
      }

    }))

  }
  return (
    <div className="cart">
      <div className="course">
        <section className="course-section-1" id="course-section-1">
          <h1 className="h-text-2">Checkout Summary</h1>
          <div className="course-section-1-card-section">
            <div className="tab-content" id="pills-tabContent">
              <div className="row g-4">
                {getCart && getCart?.map((card, index) => (
                  <div key={index} className="col-lg-12 col-md-6 col-12">
                    <div className="card live-card">
                      <div className="row g-2">
                        <div className="col-lg-5 col-md-12 col-12">
                          <div className="live-card-left">
                            <img
                              src={livecardimg}
                              alt="livecard"
                              className="live-card-img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                          <div className="live-card-right">
                            <div className="live-card-right-content-1 desktop-hide">
                              <div className="live-card-head-1">
                                <div className="live-text-bg-1">
                                  <div className="live-text-bg-2">
                                    <p className="lc-text-1">Live Online</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="live-card-body">
                              <p className="lc-text-2">{card.course?.courseName}</p>
                              <div className="live-card-body-1">
                                <p className="lc-text-3">
                                  <img
                                    src={lesson}
                                    alt="lesson"
                                    className="lc-text-3-img"
                                  />
                                  Lesson: 6
                                </p>
                                <p className="lc-text-3">
                                  <img
                                    src={profession}
                                    alt="profession"
                                    className="lc-text-3-img"
                                  />
                                  Professional
                                </p>
                                <div className="live-text-bg-1 mobile-hide">
                                  <div className="live-text-bg-2">
                                    <p className="lc-text-1">{card.course?.classType}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="live-card-foot">
                                <h1 className="price-text">Rs.{card.course?.discount}</h1>
                                <div className="live-card-foot-1">
                                  <img
                                    src={profileimg}
                                    alt="profile"
                                    className="profile-img"
                                  />
                                  <div className="live-tutor-name">
                                    <p className="lc-text-7">
                                      Surya Vino
                                    </p>
                                    <p className="lc-text-8">
                                      Tutor
                                    </p>
                                  </div>
                                  <div>
                                    <button>Pay Now</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="div-proceed">
                <Link to="/payment" className="checkout-link">
                  <button className="btn-continue">
                    Proceed to Checkout
                    <img src={rightarrow} alt="rightarrow" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
