import React, { useState } from "react";
import search from "../../assets/images/Dashboard/search.svg";
import thumbnail from "../../assets/images/Dashboard/thumbnail.svg";
import clock from "../../assets/images/Dashboard/Clock.svg";
import note from "../../assets/images/Dashboard/notes.svg";
import watch from "../../assets/images/Dashboard/watch.svg";
import download from "../../assets/images/Dashboard/download.svg";

const recordings = [
  {
    thumbnail: thumbnail,
    title: "Color Styles - 01",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "02 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 02",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "03 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 01",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "02 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 02",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "03 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 01",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "02 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 02",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "03 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 01",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "02 Lessons",
    watch: watch,
    download: download,
  },
  {
    thumbnail: thumbnail,
    title: "Color Styles - 02",
    clock: clock,
    duration: "1.30 hrs",
    note: note,
    lessons: "03 Lessons",
    watch: watch,
    download: download,
  },
];

const Recording = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Number of cards per page

  // Calculate total pages
  const totalPages = Math.ceil(recordings.length / cardsPerPage);

  // Get the cards to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recordings.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="recording assignment dashboard-tab">
      <div className="assignment-head">
        <div className="assignment-head-1">
          <h1 className="d-text-1">All Class Recordings</h1>
          <p className="d-text-2"> Access and review past class sessions </p>
        </div>
        <div className="assignment-head-2">
          <img src={search} alt="search" className="search-img" />
          <p className="p-filter">
            {" "}
            Filtered by
            <span className="filter-span"> dates </span>
            <span className="filter-span"> Status </span>
          </p>
        </div>
      </div>
      <div className="recording-section">
        <div className="row g-2">
          {currentCards.map((recording, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="card r-card">
                <div className="r-card-box">
                  <img
                    src={recording.thumbnail}
                    alt="thumbnail"
                    className="thumbnail-img"
                  />
                </div>
                <div className="r-box-content">
                  <h6 className="thumbnail-text">{recording.title}</h6>
                  <div className="r-box-center">
                    <p className="p-clock">
                      <img
                        src={recording.clock}
                        alt="clock"
                        className="clock-img"
                      />
                      {recording.duration}
                    </p>
                    <p className="p-clock">
                      <img
                        src={recording.note}
                        alt="note"
                        className="clock-img"
                      />
                      {recording.lessons}
                    </p>
                  </div>
                  <div className="r-box-end">
                    <button className="btn-watch">
                      <img
                        src={recording.watch}
                        alt="watch"
                        className="watch-img"
                      />
                      Watch Now
                    </button>
                    <button className="btn-r-download">
                      <img
                        src={recording.download}
                        alt="download"
                        className="watch-img"
                      />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-section-assignment">
          <div className="pagination-show">
            <p className="p-show">Show</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>10 </option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
            </select>
            <p className="p-show">Row</p>
          </div>
          <div className="pagination assignment-pagination">
            <button
              className="btn-navigation-assignment"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="btn-navigation-assignment"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recording;
