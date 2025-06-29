import React, { Fragment, useState } from "react";
import image from "../assets/images/login-banner.png";
import logo from "../assets/images/Skilonit_new_logo.svg";
import eye from "../assets/images/eye.svg";
import eyeclose from "../assets/images/eyeclose.svg";
import line from "../assets/images/vline.svg";
import google from "../assets/images/signgoogle.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  GetCurrentUserDetailsApi,
  UserLoginSubmitApi,
  UserOauthLoginApi,
} from "../components/Helper/Redux/ReduxThunk/Homepage";
import FullScreenLoader from "../components/common/FullScreenLoader";
import { useUserContext } from "../components/Helper/UserContext";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
Notiflix.Notify.init({
  position: "center-top",
  distance: "10px",
  timeout: 2000,
  showOnlyTheLastOne: true,
});
const Login = ({ show, handleLoginClose }) => {
  const [loading, setLoading] = useState(false);
  const [Floading, setFLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const { updateUserDetails } = useUserContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    await dispatch(
      UserLoginSubmitApi(params, (resp) => {
        if (resp.status === true) {
          let Token = resp?.data?.token;
          localStorage.setItem("token", Token);
          localStorage.setItem("isLoggedin", true);
          Notiflix.Notify.success("Login Successfully");
          reset();
          resetForm();
          setLoading(false);
          navigate("/");
          handleLoginClose();
        } else {
          setLoading(false);
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
    dispatch(
      GetCurrentUserDetailsApi((response) => {
        if (response.status === true) {
          updateUserDetails(response.data);
        } else {
          console.error("Failed to fetch user details");
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
    reset();
    setValue("email", "");
    setValue("password", "");
  };
  return (
    <Fragment>
      <div className="login">
        <div className="signup">
          <div className="sigup-modal-content">
            <div className="row h-100 g-0 align-items-center">
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
                    className="signup-form-div signup-form-div-2"
                  >
                    <h1 className="h-text-1">Sign in</h1>
                    <p className="p-text-1">
                      Access your SkillonIT account to explore courses, track progress, and enhance your skills seamlessly.{" "}
                    </p>

                    <div className="form-floating">
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="email"
                            className={`form-control ${errors.email ? "form-control-border invalid" : ""
                              }`}
                            placeholder="Email"
                            autoComplete="off"
                          />
                        )}
                      />
                      <label htmlFor="email">Email</label>
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
                    <div className="w-100 d-flex justify-content-end">
                      <Link to="/forgot-password">
                        <button className="btn-forgot" type="button">
                          Forgot Password
                        </button>
                      </Link>
                    </div>
                    {!loading && (
                      <button type="submit" className="btn-signup">
                        Sign in
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
                      Create an account?
                      <Link to="/signup"
                        className="sign-link"
                        reloadDocument
                      >
                        Sign Up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 tab-hide mobile-hide p-0">
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
      <FullScreenLoader isLoading={Floading} />
    </Fragment>
  );
};

export default Login;

