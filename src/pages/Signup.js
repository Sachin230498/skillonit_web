import React, { Fragment, useState } from "react";
import image from "../assets/images/login-banner.png";
import logo from "../assets/images/Skilonit_new_logo.svg";
import eye from "../assets/images/eye.svg";
import eyeclose from "../assets/images/eyeclose.svg";
import line from "../assets/images/vline.svg";
import google from "../assets/images/signgoogle.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import {
  UserOauthLoginApi,
  UserRegisterSubmitApi,
} from "../components/Helper/Redux/ReduxThunk/Homepage";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import FullScreenLoader from "../components/common/FullScreenLoader";
import SignUpOtp from "../components/common/SignUpOtp";

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  dob: yup.date().required("Date of Birth is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone must be a valid 10-digit number"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  referralCode: yup.string().notRequired(),
});
Notiflix.Notify.init({
  position: "center-top",
  distance: "10px",
  timeout: 2000,
  showOnlyTheLastOne: true,
});

const Signup = ({ show, handleClose, handleLogin }) => {
  const [loading, setLoading] = useState(false);
  const [Floading, setFLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signOtpModal, setSignOtpModal] = useState(false);
  const [otpTime, setOtpTime] = useState("")
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const toggleSignOtpModal = (isOpen) => setSignOtpModal(isOpen);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const formattedDob = moment(data.dob).format("DD-MM-YYYY");
    let params = {
      name: data.name,
      dateOfBirth: formattedDob,
      email: data.email,
      mobile: data.phone,
      password: data.password,
      referralCode: "31232321",
      isOAuth: false,
    };
    setLoading(true);
    await dispatch(
      UserRegisterSubmitApi(params, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Form Submitted Successfully");
          localStorage.setItem("email", data.email);
          reset();
          resetForm();
          setLoading(false);
          setOtpTime(resp?.data)
          // navigate("/signin");
          toggleSignOtpModal(true)

          handleLogin();
        } else {
          setLoading(false);

          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;

        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        );

        if (data) {
          let params = {
            name: data.name,
            email: data.email,
          };

          setFLoading(true);

          await dispatch(
            UserOauthLoginApi(params, (resp) => {
              if (resp.status === true) {
                let Token = resp?.data?.token;
                localStorage.setItem("token", Token);
                localStorage.setItem("isLoggedin", true);
                Notiflix.Notify.success("Login Success");
                setFLoading(false);
                reset();
                resetForm();
                navigate("/");
              } else {
                setFLoading(false);
                Notiflix.Notify.failure(resp?.message);
              }
            })
          );
        }
      } catch (error) {
        console.error("Google OAuth error:", error);
        Notiflix.Notify.failure("Google Authentication Failed");
      }
    },
    onError: (error) => {
      console.error("Google OAuth Error:", error);
      Notiflix.Notify.failure("Google Authentication Failed");
    },
  });


  const resetForm = () => {
    reset({
      name: "",
      email: "",
      dob: "",
      phone: "",
      password: "",
      referralCode: "",
    });
  };
  return (
    <Fragment>
      <div className="signup">
        <div className="modal-content">
          <div className="modal-body">
            <div className="sigup-modal-content">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="signup-left">

                    <a href="/" className="sign-head">
                      <img src={logo} alt="logo" className="sign-logo" />
                    </a>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSubmit(onSubmit)();
                        }
                      }}
                      className="signup-form-div"
                      autoComplete="off"
                    >
                      <h1 className="h-text-1">Sign up</h1>
                      <p className="p-text-1">
                        Join SkillonIT today and start your journey with on-demand IT courses!{" "}
                      </p>
                      <div className="form-floating">
                        <Controller
                          name="name"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className={`form-control ${errors.name ? "form-control-border invalid" : ""
                                }`}
                              placeholder="Your Name"
                              autoComplete="off"
                            />
                          )}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                      <div className="form-floating position-relative">
                        <Controller
                          name="dob"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="date"
                              className={`form-control ${errors.dob ? "form-control-border invalid" : ""
                                }`}
                              placeholder="Date of Birth"
                              autoComplete="off"
                            />
                          )}
                        />
                        <label htmlFor="dob">Date of Birth</label>
                      </div>
                      <div className="form-flex">
                        <div className="form-floating">
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="email"
                                className={`form-control ${errors.email
                                  ? "form-control-border invalid"
                                  : ""
                                  }`}
                                placeholder="Email"
                                autoComplete="off"
                              />
                            )}
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating">
                          <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                className={`form-control ${errors.phone
                                  ? "form-control-border invalid"
                                  : ""
                                  }`}
                                placeholder="Phone"
                                autoComplete="off"
                              />
                            )}
                          />
                          <label htmlFor="phone">Phone</label>
                        </div>
                      </div>

                      <div className="form-floating passsword-floation-form">
                        <Controller
                          name="password"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type={showPassword ? "text" : "password"}
                              className={`form-control ${errors.password
                                ? "form-control-border invalid"
                                : ""
                                }`}
                              placeholder="Password"
                              autoComplete="off"
                            />
                          )}
                        />
                        <label htmlFor="password">Password</label>
                        <button
                          className="btn-eye"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          <img src={showPassword ? eye : eyeclose} alt="eye" />
                        </button>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="referralCode"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="form-control"
                              placeholder="Referral Code"
                              autoComplete="off"
                            />
                          )}
                        />
                        <label htmlFor="referralCode">Referral Code</label>
                      </div>
                      {!loading && (
                        <button className="btn-signup" type="submit">
                          Sign Up
                        </button>
                      )}
                      {loading && (
                        <button className="btn-signup" disabled>
                          <div className="text-center">
                            <div
                              className="spinner-border text-light"
                              role="status"
                            ></div>
                          </div>
                        </button>
                      )}
                      <p className="text-or">
                        <img src={line} alt="line" />
                        or
                        <img src={line} alt="line" />
                      </p>
                      <button
                        className="btn-google"
                        type="button"
                        onClick={() => handleGoogleAuth()}
                      >
                        Continue with Google
                        <img src={google} alt="google" />
                      </button>
                      <p className="p-already">
                        Aleady have an account??
                        <Link to="/signin" className="sign-link" reloadDocument>
                          Sign in
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 tab-hide mobile-hide">
                  <div className="signup-right">
                    <img
                      src={image}
                      className="sign-banner-img-2"
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FullScreenLoader isLoading={Floading} />
      <SignUpOtp show={signOtpModal} handleClose={() => toggleSignOtpModal(false)} otpTime={otpTime} />
    </Fragment>
  );
};

export default Signup;
