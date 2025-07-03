import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavOptions.css";

const NavOptions = () => {
  const [activeTab, setActiveTab] = useState("resources");

  return (
    <div>
      <div className="custom-nav-tabs-bar">
        <button
          className={`custom-nav-tab-btn${activeTab === "resources" ? " active" : ""}`}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
        <button
          className={`custom-nav-tab-btn${activeTab === "company" ? " active" : ""}`}
          onClick={() => setActiveTab("company")}
        >
          Company
        </button>
      </div>
      <div className="w-64 mx-auto pt-2 ">
        {activeTab === "resources" && (
          <ul className="drop-ul  " style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/refer-and-earn" className="drop-link" reloadDocument>
                Refer & Earn
              </Link>
            </li>
            <li>
              <Link to="/live-forum" className="drop-link" reloadDocument>
                Live Forum
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="drop-link" reloadDocument>
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/become-a-tutor"
                className="drop-link"
                reloadDocument
                style={{ color: "#1890ff", fontWeight: 600 }}
              >
                Become a Tutor?
              </Link>
            </li>
            <li>
              <Link
                to="/become-an-affiliate"
                className="drop-link"
                reloadDocument
                style={{ color: "#1890ff", fontWeight: 600 }}
              >
                Become a Affiliate?
              </Link>
            </li>
            <li>
              <Link
                to="/franchise"
                className="drop-link"
                reloadDocument
                style={{ color: "#1890ff", fontWeight: 600 }}
              >
                Franchise
              </Link>
            </li>
          </ul>
        )}
        {activeTab === "company" && (
          <ul className="drop-ul" style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/about-us" className="drop-link" reloadDocument>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="drop-link" reloadDocument>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="drop-link" reloadDocument>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavOptions;