import React, { useState } from "react";
import search from "../../assets/images/Dashboard/search.svg";

const assignments = [
  {
    id: 1,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Done",
    submit: "Submitted",
  },
  {
    id: 2,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Progress",
    submit: "Submitted",
  },
  {
    id: 3,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Pending",
    submit: "Submitted",
  },
  {
    id: 4,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Done",
    submit: "Submitted",
  },
  {
    id: 5,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Progress",
    submit: "Submitted",
  },
  {
    id: 6,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Pending",
    submit: "Submitted",
  },
  {
    id: 7,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Done",
    submit: "Submitted",
  },
  {
    id: 8,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Progress",
    submit: "Submitted",
  },
  {
    id: 9,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Pending",
    submit: "Submitted",
  },
  {
    id: 10,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Done",
    submit: "Submitted",
  },
  {
    id: 11,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Progress",
    submit: "Submitted",
  },
  {
    id: 12,
    title: "Conducting User Research",
    course: "User Research and Permission",
    dueDate: "July 1, 2024",
    status: "Pending",
    submit: "Submitted",
  },
];

const Assignment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(assignments.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = assignments.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="assignment dashboard-tab">
      <div className="assignment-head">
        <div className="assignment-head-1">
          <h1 className="d-text-1">Assignments</h1>
          <p className="d-text-2"> View and manage your course assignments </p>
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
      <div className="assignment-table">
        <table className="table">
          <thead className="a-table-head">
            <tr>
              <th>Assignment Title</th>
              <th>Course/Lesson</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.course}</td>
                <td>{assignment.dueDate}</td>
                <td>
                  <div
                    className={
                      assignment.status === "Done"
                        ? "div-done"
                        : assignment.status === "Progress"
                        ? "div-progress-bg"
                        : "div-pending-bg"
                    }
                  >
                    <div
                      className={
                        assignment.status === "Done"
                          ? "done-round"
                          : assignment.status === "Progress"
                          ? "progress-round"
                          : "pending-round"
                      }
                    />
                    <p
                      className={
                        assignment.status === "Done"
                          ? "done-p"
                          : assignment.status === "Progress"
                          ? "progress-ptext"
                          : "pending-ptext"
                      }
                    >
                      {assignment.status}
                    </p>
                  </div>
                </td>
                <td>{assignment.submit}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default Assignment;
