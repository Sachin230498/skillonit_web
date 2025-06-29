import React, { useState } from "react";
import brush from "../../assets/images/Dashboard/brush.svg";
import pdf from "../../assets/images/Dashboard/pdf.svg";
import Calendar from "react-calendar";
import livecardimg from "../../assets/images/courses/liveImg.svg";
import trophy from "../../assets/images/courses/trophy.svg";
import profileimg from "../../assets/images/courses/profile.svg";
import rightarrow from "../../assets/images/courses/rightarrow.svg";
import lesson from "../../assets/images/courses/lesson.svg";
import profession from "../../assets/images/courses/profession.svg";
import Gcap from "../../assets/images/Dashboard/Gcap.svg";
import check from "../../assets/images/Dashboard/dcheck.svg";

const livecardData = [
  {
    name: "Live Online", // Added 'name'
    type: "live", // Added 'type'
    classname: "Live Online",
    img: livecardimg,
    title: "UI/UX Design Essential Training",
    lessons: 6,
    level: "Professional",
    points: "75 / 100",
    days: 14,
    date: "14/12/2024",
    time: "8 PM To 10 PM IST",
    tutorName: "Surya Vino",
    tutorRole: "Tutor",
    trophyIcon: trophy,
    bgname1: "div-upcoming-bg-1",
    bgname2: "div-upcoming-bg-2",
  },
  {
    name: "Self Directed", // Added 'name'
    type: "self", // Added 'type'
    classname: "Self Directed",
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
    bgname1: "div-class-bg-1",
    bgname2: "div-class-bg-2",
  },
];

const DashboardContent = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(!isDownloading);
  };

  const [value, setValue] = useState(new Date());

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

  return (
    <div className="dashboard-tab">
      <h1 className="d-text-1">Hello Bhagwat 👋🏻</h1>
      <p className="d-text-2"> Let’s learn something new today! </p>

      <div className="row g-3 mt-4">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="dt-card card">
            <p className="c-text-1">Recent enrolled course</p>
            <div className="dt-card-inner  ">
              <div className="brush-bg">
                <img src={brush} alt="brush" className="brush-img" />
              </div>
              <p className="c-text-2">Ui Ux Course</p>

              <div className="dt-card-progress">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "30%" }}></div>
                </div>
                <p className="progress-dt-p">
                  10/30
                  <span className="progress-span"> class </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="dt-card card">
            <p className="c-text-1">Your Resources</p>
            <div className="download-process-div">
              <img src={pdf} alt="pdf" className="pdf-img" />
              <div className="download-name">
                <p className="c-text-3">
                  Auto-layout.pdf
                  {isDownloading ? (
                    <span className="s-download">70mb</span>
                  ) : (
                    ""
                  )}
                </p>
                {isDownloading ? (
                  <div
                    className="progress download-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar download-progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                ) : (
                  <p className="c-text-4">
                    Let's quickly create some realistic and shiny metal @figma✨
                  </p>
                )}
              </div>
              <button
                className={
                  isDownloading ? "btn-pdf-cancel" : "btn-pdf-download"
                }
                onClick={handleDownloadClick}
              >
                {isDownloading ? "Cancel" : "Download"}
              </button>
            </div>
            <div className="download-process-div">
              <img src={pdf} alt="pdf" className="pdf-img" />
              <div className="download-name">
                <p className="c-text-3">
                  Auto-layout.pdf
                  {isDownloading ? (
                    <span className="s-download">70mb</span>
                  ) : (
                    ""
                  )}
                </p>
                {isDownloading ? (
                  <div
                    className="progress download-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar download-progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                ) : (
                  <p className="c-text-4">
                    Let's quickly create some realistic and shiny metal @figma✨
                  </p>
                )}
              </div>
              <button
                className={
                  isDownloading ? "btn-pdf-cancel" : "btn-pdf-download"
                }
                onClick={handleDownloadClick}
              >
                {isDownloading ? "Cancel" : "Download"}
              </button>
            </div>
            <div className="download-process-div">
              <img src={pdf} alt="pdf" className="pdf-img" />
              <div className="download-name">
                <p className="c-text-3">
                  Auto-layout.pdf
                  {isDownloading ? (
                    <span className="s-download">70mb</span>
                  ) : (
                    ""
                  )}
                </p>
                {isDownloading ? (
                  <div
                    className="progress download-progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar download-progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                ) : (
                  <p className="c-text-4">
                    Let's quickly create some realistic and shiny metal @figma✨
                  </p>
                )}
              </div>
              <button
                className={
                  isDownloading ? "btn-pdf-cancel" : "btn-pdf-download"
                }
                onClick={handleDownloadClick}
              >
                {isDownloading ? "Cancel" : "Download"}
              </button>
            </div>
            <button className="btn-see-more">See More</button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="dt-card card">
            <Calendar onChange={setValue} value={value} />
          </div>
        </div>
      </div>
      <div className="dashboard-course-section course  p-0">
        <div className="row g-4">
          {livecardData.map((card, index) => (
            <div key={index} className="col-lg-12 col-md-6 col-12">
              <div className="card live-card">
                <div className="row g-2">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="live-card-left">
                      <img
                        src={card.img}
                        alt="livecard"
                        className="live-card-img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="live-card-right">
                      <div className="live-card-right-content-1">
                        <div className="live-card-head-1">
                          {/* Using card.type instead of mode */}
                          <div
                            className={
                              card.type === "live"
                                ? "live-text-bg-1"
                                : "self-text-bg-1"
                            }
                          >
                            <div
                              className={
                                card.type === "live"
                                  ? "live-text-bg-2"
                                  : "self-text-bg-2"
                              }
                            >
                              <p
                                className={
                                  card.type === "live"
                                    ? "lc-text-1"
                                    : "lc-text-1"
                                }
                              >
                                {card.classname}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="live-card-body">
                        <p className="lc-text-2">{card.title}</p>
                        <div className="live-card-body-1">
                          <p className="lc-text-3">
                            <img
                              src={lesson}
                              alt="lesson"
                              className="lc-text-3-img"
                            />
                            Lesson: {card.lessons}
                          </p>
                          <p className="lc-text-3">
                            <img
                              src={profession}
                              alt="profession"
                              className="lc-text-3-img"
                            />
                            {card.level}
                          </p>
                        </div>
                        <div className="live-card-progress">
                          <div
                            className="progress-container"
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                          >
                            <div className="progress-line">
                              <div
                                className="progress-filled"
                                style={{ width: `${progress}%` }}
                              />
                              <div
                                className="progress-indicator"
                                style={{ left: `${progress}%` }}
                                onMouseDown={handleMouseDown}
                              />
                            </div>
                            <div className="trophy-icon">
                              <img
                                src={card.trophyIcon}
                                alt="trophy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="live-progress-points">
                          <p className="lc-text-4">Points: {card.points}</p>
                          <p className="lc-text-4">Days: {card.days}</p>
                        </div>
                        <div className="live-card-date">
                          <p className="lc-text-5">
                            Date & Time: {card.date} ({card.time})
                          </p>
                          <div className={card.bgname1}>
                            <div className={card.bgname2}>
                              <p className="lc-text-6">{card.classStatus}</p>
                            </div>
                          </div>
                        </div>
                        <div className="live-card-foot">
                          <div className="live-card-foot-1">
                            <img
                              src={profileimg}
                              alt="profile"
                              className="profile-img"
                            />
                            <div className="live-tutor-name">
                              <p className="lc-text-7">{card.tutorName}</p>
                              <p className="lc-text-8">{card.tutorRole}</p>
                            </div>
                          </div>
                          <div className="live-card-foot-2">
                            <button className="btn-continue">
                              Continue Learning
                              <img src={rightarrow} alt="rightarrow" />
                            </button>
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
      </div>
      <div className="dasboard-upcoming">
        <h6 className="u-text-1">Upcoming Lession</h6>
        <div className="upcoming-row">
          <div className="card up-card">
            <div className="up-card-row">
              <img src={Gcap} alt="cap" className="g-cap" />
              <div className="up-name">
                <p className="u-text-2">Ux Design Fundaments</p>
                <p className="u-text-3">5.30pm</p>
              </div>
              <button className="btn-join-dashboard">Join</button>
            </div>
          </div>
          <div className="card up-card">
            <div className="up-card-row">
              <img src={check} alt="cap" className="g-cap" />
              <div className="up-name">
                <p className="u-text-2">Ux Design Fundaments</p>
                <p className="u-text-3">5.30pm</p>
              </div>
              <button className="btn-join-dashboard-1">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
