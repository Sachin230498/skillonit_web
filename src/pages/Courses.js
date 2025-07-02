// import React, { useEffect, useState } from "react";
// import bannerimg from "../assets/images/courses/Coursesimage.png";
// import dot from "../assets/images/courses/dotblue.svg";
// import star from "../assets/images/courses/StarFour.svg";
// import dropArrow from "../assets/images/courses/dropdownarrow.svg";
// import premiumcardimg from "../assets/images/courses/premiumcard.svg";
// import duration from "../assets/images/courses/calender-icon.svg";
// import mic from "../assets/images/courses/mic.svg";
// import enroll from "../assets/images/courses/enroll.svg";
// import livecardimg from "../assets/images/courses/liveImg.svg";
// import lesson from "../assets/images/courses/lesson.svg";
// import profession from "../assets/images/courses/profession.svg";
// import trophy from "../assets/images/courses/trophy.svg";
// import profileimg from "../assets/images/courses/profile.svg";
// import rightarrow from "../assets/images/courses/rightarrow.svg";
// import strikeimg from "../assets/images/courses/strike1.svg";
// import strikeimg2 from "../assets/images/courses/strike2.svg";
// import sparkle from "../assets/images/courses/Sparkle.svg";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GetallCourseApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
// import BreadCrumb from "../components/common/BreadCrumbs";

// const modulesData = [
//   {
//     id: 1,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 2,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 3,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 4,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 5,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 6,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 7,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 8,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 9,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 10,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 11,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 12,
//     title: "HTML",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
// ];

// const livecardData = [
//   {
//     img: livecardimg,
//     title: "UI/UX Design Essential Training",
//     lessons: 6,
//     level: "Professional",
//     points: "75 / 100",
//     days: 14,
//     date: "14/12/2024",
//     time: "8 PM To 10 PM IST",
//     classStatus: "Upcoming Class",
//     tutorName: "Surya Vino",
//     tutorRole: "Tutor",
//     trophyIcon: trophy,
//     bgname1: "div-upcoming-bg-1",
//     bgname2: "div-upcoming-bg-2",
//   },
//   {
//     img: livecardimg,
//     title: "UI/UX Design Essential Training",
//     lessons: 6,
//     level: "Professional",
//     points: "75 / 100",
//     days: 14,
//     date: "14/12/2024",
//     time: "8 PM To 10 PM IST",
//     classStatus: "Upcoming Class",
//     tutorName: "Surya Vino",
//     tutorRole: "Tutor",
//     trophyIcon: trophy,
//     bgname1: "div-upcoming-bg-1",
//     bgname2: "div-upcoming-bg-2",
//   },
//   {
//     img: livecardimg,
//     title: "UI/UX Design Essential Training",
//     lessons: 6,
//     level: "Professional",
//     points: "75 / 100",
//     days: 14,
//     date: "14/12/2024",
//     time: "8 PM To 10 PM IST",
//     classStatus: "Class Scheduled",
//     tutorName: "Surya Vino",
//     tutorRole: "Tutor",
//     trophyIcon: trophy,
//     bgname1: "div-class-bg-1",
//     bgname2: "div-class-bg-2",
//   },
// ];
// const exploreData = [
//   {
//     id: 1,
//     title: "Blockchain Development",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 2,
//     title: "Front-End Development (Web)",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
//   {
//     id: 3,
//     title: "Back-End Development (Web)",
//     duration: "6 Months",
//     language: "English",
//     enrolled: "225 Enrolled",
//     offer: "Flat 50% Off, Grab The Deal Now!",
//     seats: "Hurry Few Seats Left",
//     price: "RS. 99,999",
//     originalPrice: "RS 1,99,999",
//     image: premiumcardimg,
//   },
// ];

// const Courses = () => {
//   const dispatch = useDispatch();
//   const [allcourse, setAllcourses] = useState([]);
//   const [searchQuery, setSearchQuery] = useState([]);
//   const [searchQuery1, setSearchQuery1] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   useEffect(() => {
//     fetchCourseData();
//   }, []);

//   const fetchCourseData = async () => {
//     dispatch(
//       GetallCourseApi({}, (resp) => {
//         if (resp.status == true) {
//           setAllcourses(resp.data);
//           setFilteredCourses(resp.data);
//         }
//       })
//     );
//   };
//   const [buttonText, setButtonText] = useState("Sort By");

//   const handleItemClick = (text) => {
//     setButtonText(text);
//   };

//   const [progress, setProgress] = useState(30);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const container = document.querySelector(".progress-line");
//       const rect = container.getBoundingClientRect();
//       const newProgress = ((e.clientX - rect.left) / rect.width) * 100;

//       if (newProgress >= 0 && newProgress <= 100) {
//         setProgress(newProgress);
//       }
//     }
//   };

//   const goToCoursesTab = () => {
//     const coursesTabButton = document.getElementById("course-home-tab");

//     if (coursesTabButton) {
//       coursesTabButton.click();
//       const courseSection = document.getElementById("course-section-1");
//       if (courseSection) {
//         const offset = 50;
//         const topPos =
//           courseSection.getBoundingClientRect().top + window.scrollY - offset;
//         window.scrollTo({
//           top: topPos,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   const [visibleCourses, setVisibleCourses] = useState(0);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const updateVisibleCourses = () => {
//       const width = window.innerWidth;
//       if (width < 768) {
//         setVisibleCourses(3);
//       } else {
//         setVisibleCourses(9);
//       }
//     };

//     updateVisibleCourses();

//     window.addEventListener("resize", updateVisibleCourses);

//     return () => window.removeEventListener("resize", updateVisibleCourses);
//   }, []);

//   const showAllCourses = () => {
//     setShowAll(true);
//   };

//   const [visibleModules, setVisibleModules] = useState(0);
//   const [showAll1, setShowAll1] = useState(false);

//   useEffect(() => {
//     const updateVisibleModules = () => {
//       const width = window.innerWidth;
//       if (width < 768) {
//         setVisibleModules(3);
//       } else {
//         setVisibleModules(12);
//       }
//     };

//     updateVisibleModules();

//     window.addEventListener("resize", updateVisibleModules);

//     return () => window.removeEventListener("resize", updateVisibleModules);
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value || "";
//     setSearchQuery(query);
//     const filteredLeads =
//       allcourse &&
//       allcourse?.filter(
//         (course) =>
//           course.courseName?.toLowerCase().includes(query?.toLowerCase()) ||
//           course.categoryName?.toLowerCase().includes(query.toLowerCase()) ||
//           course.classType?.toLowerCase().includes(query?.toLowerCase()) ||
//           course.heading?.toLowerCase().includes(query?.toLowerCase())
//       );
//     setFilteredCourses(filteredLeads);
//   };

//   const handleSearch1 = (e) => {
//     if (e.key === "Enter") {
//       if (!searchQuery1.trim()) {
//         return;
//       }

//       const section = document.getElementById("course-section-1");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       const query = e.target.value || "";
//       setSearchQuery1(query);

//       const filteredLeads =
//         allcourse &&
//         allcourse.filter(
//           (course) =>
//             course.courseName?.toLowerCase().includes(query.toLowerCase()) ||
//             course.categoryName?.toLowerCase().includes(query.toLowerCase()) ||
//             course.classType?.toLowerCase().includes(query.toLowerCase()) ||
//             course.heading?.toLowerCase().includes(query.toLowerCase())
//         );

//       setFilteredCourses(filteredLeads);
//     }
//   };

//   const sortedCourses = [...filteredCourses].sort((a, b) => {
//     switch (buttonText) {
//       case "Popularity":
//         return b.totalEnrollment - a.totalEnrollment;
//       case "Price Low to High":
//         return a.price - b.price;
//       case "Price High to Low":
//         return b.price - a.price;
//       case "Alphabetical A to Z":
//         return a.courseName.localeCompare(b.courseName);
//       case "Alphabetical Z to A":
//         return b.courseName.localeCompare(a.courseName);
//       default:
//         return 0;
//     }
//   });

//   const displayedCourses = showAll
//     ? sortedCourses
//     : sortedCourses.slice(0, visibleCourses);
//   const hasMoreCourses = allcourse.length > visibleCourses;

//   const showAllModules = () => {
//     setShowAll1(true);
//   };

//   const displayedModules = showAll1
//     ? modulesData
//     : modulesData.slice(0, visibleModules);

//   return (
//     <div className="course">
//       <BreadCrumb pagename="Courses" />
//       <section className="course-banner">
//         <div className="row g-4 h-100">
//           <div className="col-lg-6 col-md-6 col-12">
//             <div className="course-ban-left">
//               <img
//                 src={dot}
//                 alt="start"
//                 className="dot-banner-img-2 mobile-hide"
//               />
//               <img src={sparkle} alt="start" className="sparkle-img" />
//               <h6 className="h-text-1">START TO SUCCESS</h6>
//               <h1 className="h-text-2">
//                 Access To{" "}
//                 <span className="s-text-1 strike-1">
//                   Multiple
//                   <img src={strikeimg} alt="strike" className="strike-img-1" />
//                 </span>{" "}
//                 Courses <br className="t-break break" />
//                 from{" "}
//                 <span className="s-text-1 strike-2">
//                   {" "}
//                   300{" "}
//                   <img src={strikeimg2} alt="strike" className="strike-img-2" />
//                 </span>
//                 Instructors <br className="t-break break" />& Resources.
//               </h1>
//               <p className="p-text-1">What Are you Looking for?</p>
//               <div className="input-group course-input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="What do want to learn?"
//                   aria-label="Username"
//                   aria-describedby="basic-addon1"
//                   value={searchQuery1}
//                   onKeyDown={handleSearch1}
//                   onChange={handleSearch1}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-12 mobile-hide">
//             <div className="course-ban-right">
//               <img
//                 src={bannerimg}
//                 alt="banner"
//                 className="course-banner-img "
//               />
//               <img src={star} alt="start" className="star-position" />
//               <img
//                 src={dot}
//                 alt="start"
//                 className="dot-banner-img mobile-hide"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="course-section-1" id="course-section-1">
//         <h1 className="h-text-2">Courses</h1>
//         <div className="row g-4 mt-2">
//           <div className="col-lg-6 col-md-12 col-12">
//             <ul
//               className="nav nav-pills course-tab-pills mb-3"
//               id="pills-tab"
//               role="tablist"
//             >
//               <li className="nav-item" role="presentation">
//                 <button
//                   className="nav-link active"
//                   id="course-home-tab"
//                   data-bs-toggle="pill"
//                   data-bs-target="#course-home"
//                   type="button"
//                   role="tab"
//                   aria-controls="course-home"
//                   aria-selected="true"
//                 >
//                   Courses
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="course-section-1-right">
//               <div className="dropdown">
//                 <button
//                   className="course-dropdown-1"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {buttonText}
//                   <img src={dropArrow} alt="dropdown" />
//                 </button>
//                 <ul className="dropdown-menu  course-dropdown-menu-1">
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleItemClick("Popularity")}
//                     >
//                       Popularity
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleItemClick("Price Low to High")}
//                     >
//                       Price Low to High
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleItemClick("Price High to Low")}
//                     >
//                       Price High to Low
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleItemClick("Alphabetical A to Z")}
//                     >
//                       Alphabetical A to Z
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleItemClick("Alphabetical Z to A")}
//                     >
//                       Alphabetical Z to A
//                     </button>
//                   </li>
//                 </ul>
//               </div>

//               <div className="input-group course-input-group-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search"
//                   aria-label="Username"
//                   aria-describedby="basic-addon1"
//                   value={searchQuery}
//                   onChange={handleSearch}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="course-section-1-card-section">
//           <div className="tab-content" id="pills-tabContent">
//             <div
//               className="tab-pane fade show active"
//               id="course-home"
//               role="tabpanel"
//               aria-labelledby="course-home-tab"
//               tabIndex="0"
//             >
//               <div className="row g-4">
//                 {displayedCourses.length > 0 ? (
//                   displayedCourses?.map((course) => (
//                     <div key={course.id} className="col-lg-4 col-md-6 col-12">
//                       <Link
//                         to={`/courses/${course.courseUrl}`}
//                         className="link-enroll"
//                         reloadDocument
//                       >
//                         <div className="card premium-card">
//                           <div className="premium-card-head">
//                             <div className="premium-card-head-position">
//                               <img
//                                 src={course?.image || premiumcardimg}
//                                 alt="premiumcard"
//                                 className="premium-course-img"
//                               />
//                               <div className="premium-div-position">
//                                 <p className="pc-text">{course.classType}</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="premium-card-body">
//                             <p className="pc-text-1">{course.heading}</p>
//                             <div className="pc-duration">
//                               <div className="duration-div">
//                                 <img
//                                   src={duration}
//                                   alt="duration"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">
//                                   {course.duration} Months
//                                 </p>
//                               </div>
//                               <div className="duration-div">
//                                 <img
//                                   src={mic}
//                                   alt="language"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">{course.language}</p>
//                               </div>
//                               <div className="duration-div">
//                                 <img
//                                   src={enroll}
//                                   alt="enrolled"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">
//                                   {course.totalEnrollment}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="pc-offer-div">
//                               <div className="pc-offer-content-1">
//                                 <div className="pc-offer-content-inner">
//                                   <p className="pc-text-3">
//                                     Flat {course.discountPercentage}% Off, Grab
//                                     The Deal Now!
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="pc-offer-content-2">
//                                 <div className="pc-offer-content-inner-2">
//                                   <p className="pc-text-3">
//                                     Hurry Few Seats Left
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="pc-offer-price">
//                               <p className="pc-text-4">₹{course.discount}</p>
//                               <p className="pc-text-5">₹{course.price}</p>
//                             </div>
//                             <button className="btn-pc-enroll">
//                               Enroll Now!!
//                             </button>
//                           </div>
//                         </div>
//                       </Link>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="no-data">
//                     <p>No data found</p>
//                   </div>
//                 )}
//               </div>
//               {hasMoreCourses && !showAll && (
//                 <div className="explore-btn-section">
//                   <button
//                     className="btn-see-all"
//                     onClick={() => showAllCourses()}
//                   >
//                     See All
//                   </button>
//                 </div>
//               )}
//             </div>
//             <div
//               className="tab-pane fade"
//               id="pills-module"
//               role="tabpanel"
//               aria-labelledby="pills-module-tab"
//               tabIndex="0"
//             >
//               <div className="row g-4">
//                 {displayedModules.map((course) => (
//                   <div key={course.id} className="col-lg-4 col-md-6 col-12">
//                     <div className="card premium-card">
//                       <div className="premium-card-head">
//                         <div className="premium-card-head-position">
//                           <img src={course.image} alt="premiumcard" />
//                           <div className="premium-div-position">
//                             <p className="pc-text">Premium</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="premium-card-body">
//                         <p className="pc-text-1">{course.title}</p>
//                         <div className="pc-duration">
//                           <div className="duration-div">
//                             <img
//                               src={duration}
//                               alt="duration"
//                               className="duration-img"
//                             />
//                             <p className="pc-text-2">{course.duration}</p>
//                           </div>
//                           <div className="duration-div">
//                             <img
//                               src={mic}
//                               alt="language"
//                               className="duration-img"
//                             />
//                             <p className="pc-text-2">{course.language}</p>
//                           </div>
//                           <div className="duration-div">
//                             <img
//                               src={enroll}
//                               alt="enrolled"
//                               className="duration-img"
//                             />
//                             <p className="pc-text-2">{course.enrolled}</p>
//                           </div>
//                         </div>
//                         <div className="pc-offer-div">
//                           <div className="pc-offer-content-1">
//                             <div className="pc-offer-content-inner">
//                               <p className="pc-text-3">{course.offer}</p>
//                             </div>
//                           </div>
//                           <div className="pc-offer-content-2">
//                             <div className="pc-offer-content-inner-2">
//                               <p className="pc-text-3">{course.seats}</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="pc-offer-price">
//                           <p className="pc-text-4">{course.price}</p>
//                           <p className="pc-text-5">{course.originalPrice}</p>
//                         </div>
//                         <Link to="/enroll" className="link-enroll">
//                           <button className="btn-pc-enroll">
//                             Enroll Now!!
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {!showAll1 && (
//                 <div className="explore-btn-section">
//                   <button className="btn-see-all" onClick={showAllModules}>
//                     See All
//                   </button>
//                 </div>
//               )}
//             </div>
//             <div
//               className="tab-pane fade"
//               id="pills-my-course"
//               role="tabpanel"
//               aria-labelledby="pills-my-course-tab"
//               tabIndex="0"
//             >
//               <div className="row g-4">
//                 {livecardData.map((card, index) => (
//                   <div key={index} className="col-lg-12 col-md-6 col-12">
//                     <div className="card live-card">
//                       <div className="row g-2">
//                         <div className="col-lg-5 col-md-12 col-12">
//                           <div className="live-card-left">
//                             <img
//                               src={card.img}
//                               alt="livecard"
//                               className="live-card-img"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-7 col-md-12 col-12">
//                           <div className="live-card-right">
//                             <div className="live-card-right-content-1">
//                               <div className="live-card-head-1">
//                                 <div className="live-text-bg-1">
//                                   <div className="live-text-bg-2">
//                                     <p className="lc-text-1">Live Online</p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="live-card-body">
//                               <p className="lc-text-2">{card.title}</p>
//                               <div className="live-card-body-1">
//                                 <p className="lc-text-3">
//                                   <img
//                                     src={lesson}
//                                     alt="lesson"
//                                     className="lc-text-3-img"
//                                   />
//                                   Lesson: {card.lessons}
//                                 </p>
//                                 <p className="lc-text-3">
//                                   <img
//                                     src={profession}
//                                     alt="profession"
//                                     className="lc-text-3-img"
//                                   />
//                                   {card.level}
//                                 </p>
//                               </div>
//                               <div className="live-card-progress">
//                                 <div
//                                   className="progress-container"
//                                   onMouseMove={handleMouseMove}
//                                   onMouseUp={handleMouseUp}
//                                   onMouseLeave={handleMouseUp}
//                                 >
//                                   <div className="progress-line">
//                                     <div
//                                       className="progress-filled"
//                                       style={{ width: `${progress}%` }}
//                                     />
//                                     <div
//                                       className="progress-indicator"
//                                       style={{ left: `${progress}%` }}
//                                       onMouseDown={handleMouseDown}
//                                     />
//                                   </div>
//                                   <div className="trophy-icon">
//                                     <img src={card.trophyIcon} alt="trophy" />
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="live-progress-points">
//                                 <p className="lc-text-4">
//                                   Points: {card.points}
//                                 </p>
//                                 <p className="lc-text-4">Days: {card.days}</p>
//                               </div>
//                               <div className="live-card-date">
//                                 <p className="lc-text-5">
//                                   Date & Time: {card.date} ({card.time})
//                                 </p>
//                                 <div className={card.bgname1}>
//                                   <div className={card.bgname2}>
//                                     <p className="lc-text-6">
//                                       {card.classStatus}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="live-card-foot">
//                                 <div className="live-card-foot-1">
//                                   <img
//                                     src={profileimg}
//                                     alt="profile"
//                                     className="profile-img"
//                                   />
//                                   <div className="live-tutor-name">
//                                     <p className="lc-text-7">
//                                       {card.tutorName}
//                                     </p>
//                                     <p className="lc-text-8">
//                                       {card.tutorRole}
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="live-card-foot-2">
//                                   <button className="btn-continue">
//                                     Continue Learning
//                                     <img src={rightarrow} alt="rightarrow" />
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="explore-courses-div">
//                 <h6 className="e-text-1">Explore More Courses</h6>
//                 <div className="explore-card-section">
//                   <div className="row g-4">
//                     {exploreData.map((course) => (
//                       <div key={course.id} className="col-lg-4 col-md-6 col-12">
//                         <div className="card premium-card">
//                           <div className="premium-card-head">
//                             <div className="premium-card-head-position">
//                               <img src={course.image} alt="premiumcard" />
//                               <div className="premium-div-position">
//                                 <p className="pc-text">Premium</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="premium-card-body">
//                             <p className="pc-text-1">{course.title}</p>
//                             <div className="pc-duration">
//                               <div className="duration-div">
//                                 <img
//                                   src={duration}
//                                   alt="duration"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">{course.duration}</p>
//                               </div>
//                               <div className="duration-div">
//                                 <img
//                                   src={mic}
//                                   alt="language"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">{course.language}</p>
//                               </div>
//                               <div className="duration-div">
//                                 <img
//                                   src={enroll}
//                                   alt="enrolled"
//                                   className="duration-img"
//                                 />
//                                 <p className="pc-text-2">{course.enrolled}</p>
//                               </div>
//                             </div>
//                             <div className="pc-offer-div">
//                               <div className="pc-offer-content-1">
//                                 <div className="pc-offer-content-inner">
//                                   <p className="pc-text-3">{course.offer}</p>
//                                 </div>
//                               </div>
//                               <div className="pc-offer-content-2">
//                                 <div className="pc-offer-content-inner-2">
//                                   <p className="pc-text-3">{course.seats}</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="pc-offer-price">
//                               <p className="pc-text-4">{course.price}</p>
//                               <p className="pc-text-5">
//                                 {course.originalPrice}
//                               </p>
//                             </div>
//                             <button className="btn-pc-enroll">
//                               Enroll Now!!
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="explore-btn-section">
//                   <button
//                     id="see-all-button"
//                     className="btn-see-all"
//                     onClick={goToCoursesTab}
//                   >
//                     See All
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blockchain from "../assets/images/courses/blockchain.png";
import web from "../assets/images/courses/web.png";
import app from "../assets/images/courses/app.png";
import game from "../assets/images/courses/game.png";
import uiux from "../assets/images/courses/ui-ux.png";
import graphic from "../assets/images/courses/graphic.png";
import cyber from "../assets/images/courses/cyber.png";
import digital from "../assets/images/courses/digital.png";
import basic from "../assets/images/courses/basic.png";
import personal from "../assets/images/courses/personal.png";
import spoken from "../assets/images/courses/spoken.png";
import CoursesBanner from "./CoursesBanner";
import { FaFilter } from "react-icons/fa";


const courses = [
  {
    title: "Blockchain Development",
    duration: "6 months",
    tags: ["Solidity", "Smart Contracts", "DApps", "Web3"],
    description: (
      <span>
        Build real <span className="text-[#00a6ff]">blockchain</span> apps and
        launch your Web3 career
      </span>
    ),
    img: blockchain,
  },
  {
    title: "Web (MERN) Development",
    duration: "6 months",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    description: (
      <span>
        Build <span className="text-[#00a6ff]">full-stack</span> web apps with
        the powerful <span className="text-[#00a6ff]">MERN stack</span>
      </span>
    ),
    img: web,
  },
  {
    title: "App Development",
    duration: "6 months",
    tags: ["Flutter"],
    description: (
      <span>
        Build real <span className="text-[#00a6ff]">mobile apps</span> with{" "}
        <span className="text-[#00a6ff]">Flutter</span> and launch your career{" "}
      </span>
    ),
    img: app,
  },
  {
    title: "Game Development",
    duration: "6 months",
    tags: ["Unity", "C#", "2D & 3D Game Design"],
    description: (
      <span>
        Create amazing <span>2D & 3D</span> games with
        <span className="text-[#00a6ff]"> Unity</span> and
        <span className="text-[#00a6ff]"> C#</span>.
      </span>
    ),
    img: game,
  },
  {
    title: "UI/UX Design",
    duration: "3 months",
    tags: ["Figma", "Prototyping", "UX Research"],
    description: (
      <span>
        Design beautiful, <span className="text-[#00a6ff]">user-friendly</span>{" "}
        and responsive apps and websites.
      </span>
    ),
    img: uiux,
  },
  {
    title: "Graphic Design",
    duration: "3 months",
    tags: ["Photoshop", "Illustrator", "Branding"],
    description: (
      <span>
        Master design tools and create stunning
        <span className="text-[#00a6ff]"> visual content</span>
      </span>
    ),
    img: graphic,
  },
  {
    title: "Cyber security",
    duration: "3 months",
    tags: ["Ethical Hacking", "Kali Linux", "SOC"],
    description: (
      <span>
        <span className="text-[#00a6ff]"> Protect</span> digital systems and
        start your <span className="text-[#00a6ff]"> cyber</span> career
      </span>
    ),
    img: cyber,
  },
  {
    title: "Digital Marketing",
    duration: "3 months",
    tags: ["SEO", "Google Ads", "Content Strategy"],
    description: (
      <span>
        Learn to grow brands <span className="text-[#00a6ff]"> online</span> and
        boost <span className="text-[#00a6ff]"> digital reach</span>{" "}
      </span>
    ),
    img: digital,
  },
  {
    title: "Basic Computer + AI",
    duration: "3 months",
    tags: ["Office ", "Internet", "AI Tools"],
    description: (
      <span>
        Learn to grow brands <span className="text-[#00a6ff]"> online</span> and
        boost <span className="text-[#00a6ff]"> digital reach</span>{" "}
      </span>
    ),
    img: basic,
  },
];
const coursess = [
  {
    title: "Personality Development",
    duration: "3 months",
    tags: ["Confidence", "Communication", "Leadership"],
    description: (
      <span>
        Boost <span className="text-[#00a6ff]">confidence</span> and
        communication to stand out
      </span>
    ),
    img: personal,
  },
  {
    title: "Spoken English",
    duration: "3 months",
    tags: ["Fluency", "Vocabulary", "Grammar"],
    description: (
      <span>
        Speak <span className="text-[#00a6ff]">fluent</span> English with
        confidence in <span className="text-[#00a6ff]">any setting </span>
      </span>
    ),
    img: spoken,
  },
];

const Courses = () => {
   const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  // 🔍 Filter logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(search) ||
      course.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  }, [search]);

  const filteredCoursess = useMemo(() => {
    return coursess.filter((course) =>
      course.title.toLowerCase().includes(search) ||
      course.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  }, [search]);
  return (
 <div className="min-h-screen max-w-7xl mx-auto bg-white py-10 px-4 md:px-4">
      <CoursesBanner />

      {/* Header */}
      <div className="text-center my-10">
        <div className="md:text-[55px] font-bold text-[#0F1F3E]">
          Build Real Skills.
        </div>
        <p className="md:text-[70px] font-extrabold bg-gradient-to-r from-[#0E8DE9] to-[#29D1FD] bg-clip-text text-transparent">
          Get Job-Ready.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="md:flex justify-between items-center my-6">
        <div className="text-[28px] font-bold">All Courses</div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search courses 🔍"
            value={search}
            onChange={handleSearch}
            className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2 text-[19px]">
            Filter <FaFilter />
          </div>
        </div>
      </div>

      {/* Filtered Tech Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="text-center mt-20 my-10">
        <div className="md:text-[55px] font-bold text-[#0F1F3E]">
          Sharpen Your Soft
        </div>
        <p className="md:text-[70px] font-extrabold bg-gradient-to-r from-[#0E8DE9] to-[#29D1FD] bg-clip-text text-transparent">
          Skills Stand Out Confidently.
        </p>
      </div>

      <div className="text-[28px] my-3 font-bold">All Courses</div>

      {/* Filtered Soft Skills Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoursess.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

// Reusable Course Card Component
const CourseCard = ({ course }) => (
  <div className="rounded-2xl h-[500px] shadow-xl overflow-hidden bg-white flex flex-col">
    <div
      className="h-2/3 bg-cover bg-center"
      style={{ backgroundImage: `url(${course.img})` }}
    >
      <div className="flex flex-col justify-between h-full px-4 pt-4">
        <div className="flex justify-end">
          <span className="bg-[#54C200] text-white text-sm px-3 py-1 rounded-full mb-3">
            {course.duration}
          </span>
        </div>
        <div>
          <h3 className="text-[40px] font-bold mb-2 text-gray-900">
            {course.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {course.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[12px] bg-gray-50 text-[#1CB0F6] px-2 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-between px-4">
      <div className="bg-gradient-to-r from-[#E8A615] to-[#00A6FF] text-white w-fit px-3 text-[12px] p-1 my-2 rounded-full">
        Beginner to advanced
      </div>
      <p className="text-[19px] text-gray-700">{course.description}</p>
      <button className="bg-[#00A6FF] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full my-2">
        Explore
      </button>
    </div>
  </div>
);
export default Courses;
