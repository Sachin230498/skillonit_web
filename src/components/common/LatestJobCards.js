import React, { useState } from "react";
import cardimg from "../../assets/images/latestjobcardimg.svg";
import { Link } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
  {
    id: 2,
    title: "Node.js Developer",
    company: "Tech Solutions",
    salary: "10LPA To 12LPA",
  },
  {
    id: 3,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
  {
    id: 4,
    title: "Node.js Developer",
    company: "Tech Solutions",
    salary: "10LPA To 12LPA",
  },
  {
    id: 5,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
  {
    id: 6,
    title: "Node.js Developer",
    company: "Tech Solutions",
    salary: "10LPA To 12LPA",
  },
  {
    id: 7,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
  {
    id: 8,
    title: "Node.js Developer",
    company: "Tech Solutions",
    salary: "10LPA To 12LPA",
  },
  {
    id: 9,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
  {
    id: 10,
    title: "React Developer",
    company: "Malgo Technologies",
    salary: "12LPA To 14LPA",
  },
];

const LatestJobCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobsData.length / itemsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="latest-job-card-section">
      <div className="row g-4">
        {currentJobs.map((job) => (
          <div key={job.id} className="col-lg-4 col-md-6 col-12">
            <div className="l-job-card">
              <div className="l-job-card-head">
                <img src={cardimg} className="l-card-img" />
              </div>
              <div className="l-job-card-body">
                <h6 className="l-j-text-1">{job.title}</h6>
                <p className="l-j-text-2">{job.company}</p>
                <p className="l-j-text-2">Salary Range: {job.salary}</p>
                <Link to="/explore-job">
                  <button className="btn-job-apply">Apply Now!!</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination job-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LatestJobCards;
