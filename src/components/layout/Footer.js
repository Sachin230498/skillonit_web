import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/skillonit-new-footer-logo.svg";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaMedium, FaPinterest, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  GetallCourseApi,
  SubscribeApi,
} from "../Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";

const Footer = ({ routes }) => {
  const dispatch = useDispatch();
  const [allcourse, setAllcourses] = useState([]);

  const fetchCourseData = async () => {
    dispatch(
      GetallCourseApi({}, (resp) => {
        if (resp.status == true) {
          setAllcourses(resp.data);
        }
      })
    );
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  const requiredCourses = [
    "Full Stack Development Course in Buldhana, Maharashtra",
    "Front End Development Course in Buldhana, Maharashtra",
    "Back End Development Course in Buldhana, Maharashtra",
    "Flutter App Development Course in Buldhana, Maharashtra",
    "Unity Game Development Course in Buldhana, Maharashtra",
    "Blockchain Development Course in Buldhana, Maharashtra",
    "Full Stack Digital Marketing Course in Buldhana, Maharashtra",
  ];

  const filteredCourses = allcourse
    .filter((course) => requiredCourses.includes(course.courseName))
    .sort((a, b) => requiredCourses.indexOf(a.courseName) - requiredCourses.indexOf(b.courseName));

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    let params = { email: data.email };

    await dispatch(
      SubscribeApi(params, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Subscribed successfully!");
          reset({ email: "" });
        } else {
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  return (
    <div
      className={`footer `}
    >
      <div className="footer-content">
        <div className="footer-head">
          <Link to="/" reloadDocument>
            <img src={Logo} className="footer-logo" alt="logo" />
          </Link>
          <h1 className="h-text-1">
            Learn. Grow. Succeed.
          </h1>
        </div>
      </div>

      <div className="footer-content-2">
        <div className="row g-3">
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-link-div">
              <p className="p-text-1">Popular Courses</p>
              <ul className="footer-ul">
                {filteredCourses.map((course, index) => (
                  <li key={index}>
                    <Link
                      to={`/courses/${course.courseUrl}`}
                      className="footer-nav-link"
                      reloadDocument
                    >
                      {course.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <div className="footer-link-div">
              <p className="p-text-1">Resources</p>
              <ul className="footer-ul">
                <li>
                  <Link to="/refer-and-earn" className="footer-nav-link" reloadDocument>
                    Refer & Earn
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer-nav-link" reloadDocument>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-nav-link" reloadDocument>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <div className="footer-link-div">
              <p className="p-text-1">Solutions</p>
              <ul className="footer-ul">
                <li>
                  <Link
                    to="/scholarship"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Scholarship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corporate"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Internship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/workshops"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <div className="footer-link-div">
              <p className="p-text-1">Company</p>
              <ul className="footer-ul">
                <li>
                  <Link to="/about-us" className="footer-nav-link" reloadDocument>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="footer-nav-link" reloadDocument>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="terms-and-conditions"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacy-policy"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="refund-policy"
                    className="footer-nav-link"
                    reloadDocument
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-8 col-12">
            <div className="footer-link-div-1">
              <p className="p-text-1">
                Subscribe to our newsletter and get the latest insights.
              </p>

              <form
                className="footer-form"
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="email"
                      className={`form-control footer-form-control ${errors.email ? "is-invalid" : ""
                        }`}
                      placeholder="Enter Your email"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p className="error-message text-danger">
                    {errors.email.message}
                  </p>
                )}

                <button type="submit" className="btn-subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-foot">
        <div className="row w-100">
          <div className="col-lg-7 col-md-6 col-12 order-lg-1 order-md-1 order-2">
            <p className="copyrights">
              Copyright © 2025 Skillonit Learning Hub Private Limited | All
              Rights Reserved{" "}
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-12 order-lg-2 order-md-2 order-1">
            <div className="footer-social-link">
              <ul className="footer-social-ul">
                <li>
                  <a
                    href="https://x.com/skillonit"
                    className="social-link-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/skillonit-academy"
                    className="social-link-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/skillonit_/"
                    className="social-link-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/skillonitlearninghub"
                    className="social-link-footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@skillonit_learninghub"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-footer"
                  >
                    <IoLogoYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/skillonit/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-footer"
                  >
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/skillonit_announcements"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-footer"
                  >
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/I81RxCvPq8YHxboWJrWeKv"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-footer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@skillonit"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-footer"
                  >
                    <FaMedium />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
