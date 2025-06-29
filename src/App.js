import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/style1.css";
import "./assets/css/socialmedia.css";
import "./assets/fonts/font.css";
import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Homepage";
import SocialMedia from "./components/common/SocialMedia";
import Footer from "./components/layout/Footer";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Enroll from "./pages/Enroll";
import Blog from "./pages/Blog";
import BlogContents from "./pages/BlogContents";
import Signup from "./pages/Signup";
import CertificateBadge from "./components/common/CertificateBadge";
import Scholarship from "./pages/Scholarship";
import Corporate from "./pages/Corporate";
import Internship from "./pages/Internship";
import Login from "./pages/Login";
import ContactusModal from "./components/common/ContactusModal";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch } from "react-redux";
import { useUserContext } from "./components/Helper/UserContext";
import { GetCurrentUserDetailsApi } from "./components/Helper/Redux/ReduxThunk/Homepage";
import Careers from "./pages/Careers";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";
import ErrorRoutePage from "./pages/404Page/ErrorRoutePage";
import ReferEarnNew from "./pages/ReferEarnNew";
import BlogCategory from "./pages/BlogCategory";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";
import RefundPolicy from "./pages/RefundPolicy";
import ReferralSignup from "./pages/ReferralSignup";
import Events from "./pages/Events/Events";
import EventDetailView from "./pages/EventDetailView/EventDetailView";
import PopupFormModal from "./components/common/PopupFormModal/PopupFormModal";

const routes = [
  "/",
  "/profile/:profileid",
  "/refer-and-earn",
  "/scholarship",
  "/corporate",
  "/internship",
  "/terms-and-conditions",
  "/privacy-policy",
  "/signup",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/careers",
  "/about-us",
  "/about-us",
  "/blog",
  "/:url",
  "/contact-us",
  "/refund-policy",
  "/courses",
  "/signup/:referralCode",
  "/workshops",
  "/workshops/:eventTitle",
];

function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const [popupModal, setPopupModal] = useState(false);
  const hideNavbarAndFooter =
    currentPath.startsWith("/signup") ||
    currentPath === "/signin" ||
    currentPath === "/forgot-password" ||
    currentPath === "/reset-password";
  let isLogin = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { updateUserDetails } = useUserContext();

  const togglePopupModal = (isOpen) => {
    setPopupModal(isOpen);
    if (!isOpen) {
      localStorage.setItem("popupClosed", "true");
    }
  };

  useEffect(() => {
    dispatch(
      GetCurrentUserDetailsApi((response) => {
        if (response.status == true) {
          updateUserDetails(response.data);
        } else {
          console.error("Failed to fetch user details");
        }
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const hasPopupBeenClosed = localStorage.getItem("popupClosed");
    if (!hasPopupBeenClosed) {
      const timer = setTimeout(() => {
        setPopupModal(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  function ScrollToSectionOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash === "#contact-us") {
        scrollToSection("contact-us");
      }
    }, [location]);

    return null;
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      <LocationLogger onPathChange={setCurrentPath} />
      {!hideNavbarAndFooter && <Navbar routes={routes} />}
      <ScrollToSectionOnRouteChange />
      <SocialMedia routes={routes} />
      <CertificateBadge />
      <Routes>
        <Route path="/" element={<Homepage isLogin={isLogin} handleOpen={() => setPopupModal(true)} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:url" element={<Enroll />} />
        <Route path="/profile/:profileid" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:categoryurl" element={<BlogCategory />} />
        <Route path="/:url" element={<BlogContents />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route
          path="/refer-and-earn"
          element={<ReferEarnNew isLogin={isLogin} />}
        />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute isLogin={isLogin}>
              <Signup />
            </RestrictedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <Login />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RestrictedRoute isLogin={isLogin}>
              <ForgotPassword />
            </RestrictedRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <RestrictedRoute isLogin={isLogin}>
              <ResetPassword />
            </RestrictedRoute>
          }
        />
        <Route path="/signup/:referralCode" element={<ReferralSignup />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/workshops" element={<Events />} />
        <Route path="/workshops/:workshopTitle" element={<EventDetailView />} />
        <Route path="*" element={<ErrorRoutePage />} />
      </Routes>
      <ContactusModal />
      <PopupFormModal show={popupModal} handleClose={() => togglePopupModal(false)} />
      {!hideNavbarAndFooter && (
        <Footer routes={routes} scrollToSection={scrollToSection} />
      )}
    </div>
  );
}

function RestrictedRoute({ isLogin, children }) {
  return isLogin ? <Navigate to="/" replace /> : children;
}

function LocationLogger({ onPathChange }) {
  const location = useLocation();

  React.useEffect(() => {
    onPathChange(location.pathname);
  }, [location.pathname, onPathChange]);

  return null;
}

export default App;