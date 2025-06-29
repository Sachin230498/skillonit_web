import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Skilonit_new_logo.svg";
import dropArrow from "../../assets/images/headerDropdown.svg";
import navprofile from "../../assets/images/profile-placeholder.svg";
import navopen from "../../assets/images/navOpen.svg";
import navclose from "../../assets/images/nav-Close.svg";
import { useUserContext } from "../Helper/UserContext";

const Navbar = ({ routes }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { userDetails } = useUserContext();
  let isLogin = localStorage.getItem("token");
  const isActiveLink = (route) => pathname === route;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };


  return (
    <div className={`top-navbar `}>
      <div className="navbar">
        <Link to="/" className="nav-logo-link" reloadDocument>
          <img src={logo} alt="skillonit" className="nav-logo" width={121} height={31} />
        </Link>
        <div className="menu-bar-btn-div">
          <button
            className="menu-btn"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <img src={navclose} alt="open" className="menu-btn-img" />
            ) : (
              <img src={navopen} alt="open" className="menu-btn-img" />
            )}
          </button>
        </div>
        <div className={`nav-link-div ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-ul">
            <li>
              <Link
                to="/about-us"
                className={`nav-link ${isActiveLink("/about") ? "active" : ""
                  }`}
                onClick={handleMenuToggle}
                reloadDocument
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`nav-link ${isActiveLink("/courses") ? "active" : ""
                  }`}
                onClick={handleMenuToggle}
                reloadDocument
              >
                Courses
              </Link>
            </li>
            <li>
              <div className="dropdown source-dropdown">
                <button
                  className={`dropbtn ${isActiveLink("/scholarship") ||
                    isActiveLink("/corporate") ||
                    isActiveLink("/internship") || isActiveLink("/workshops")
                    ? "active"
                    : ""
                    }`}
                >
                  Solutions
                  <img
                    src={dropArrow}
                    alt="arrow"
                    className="header-arrow-img"
                  />
                </button>
                <div className="dropdown-content">
                  <ul className="drop-ul">
                    <li>
                      <Link
                        to="/scholarship"
                        className="drop-link"
                        reloadDocument
                      >
                        Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/corporate"
                        className="drop-link"
                        reloadDocument
                      >
                        Corporate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/internship"
                        className="drop-link"
                        reloadDocument
                      >
                        Internship
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/workshops"
                        className="drop-link"
                        reloadDocument
                      >
                        Workshops
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Solutions
                      <img
                        src={dropArrow}
                        alt="arrow"
                        className="header-arrow-img"
                      />
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="drop-ul">
                        <li>
                          <Link
                            to="/scholarship"
                            className="drop-link"
                            reloadDocument
                          >
                            Scholarship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/corporate"
                            className="drop-link"
                            reloadDocument
                          >
                            Corporate
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/internship"
                            className="drop-link"
                            reloadDocument
                          >
                            Internship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/workshops"
                            className="drop-link"
                            reloadDocument
                          >
                            Workshops
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown source-dropdown">
                <button
                  className={`dropbtn ${isActiveLink("/refer-and-earn") || isActiveLink("/careers")
                    ? "active"
                    : ""
                    }`}
                >
                  Resources
                  <img
                    src={dropArrow}
                    alt="arrow"
                    className="header-arrow-img"
                  />
                </button>
                <div className="dropdown-content">
                  <ul className="drop-ul">
                    <li>
                      <Link
                        to="/refer-and-earn"
                        className="drop-link"
                        reloadDocument
                      >
                        Refer & Earn
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="drop-link" reloadDocument>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="drop-link" reloadDocument>
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="accordion  " id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button accordion-button-three collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Resources
                      <img
                        src={dropArrow}
                        alt="arrow"
                        className="header-arrow-img"
                      />
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="drop-ul">
                        <li>
                          <Link
                            to="/refer-and-earn"
                            className="drop-link"
                            reloadDocument
                          >
                            Refer & Earn
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" className="drop-link" reloadDocument>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" className="drop-link" reloadDocument>
                            Careers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>


            {isLogin && (<li>

              <Link
                to={`/profile/${userDetails?.unId}`}
                className={`nav-link desktop-hide ${isActiveLink(`/profile/${userDetails?.unId}`) ? "active" : ""
                  }`}
                onClick={handleMenuToggle}
                reloadDocument
              >
                Profile
              </Link>
            </li>)}



            {!isLogin && (
              <>
                <li>
                  <Link to="/signin">
                    <button className="btn-signup">Sign in</button>
                  </Link>
                </li>
              </>
            )}

            {isLogin && (
              <button
                className="btn-signup desktop-hide"
                onClick={() => logOut()}
              >
                Sign out
              </button>
            )}
            {isLogin && (
              <>
                <li>
                  <div className="dropdown source-dropdown">
                    <button className="btn-nav-profile btn-cart-res dropbtn">
                      <img
                        src={userDetails?.image || navprofile}
                        alt="profile"
                        className="nav-profile-img"
                      />
                      <img
                        src={dropArrow}
                        alt="arrow"
                        className="header-arrow-img"
                      />
                    </button>
                    <div className="dropdown-content">
                      <ul className="drop-ul">
                        <li className="drop-link" style={{ cursor: "pointer" }}>
                          <Link className="drop-link" to={`/profile/${userDetails?.unId}`} reloadDocument>
                            Profile
                          </Link>
                        </li>
                        <li
                          className="drop-link"
                          onClick={() => logOut()}
                          style={{ cursor: "pointer" }}
                        >
                          Sign out
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
