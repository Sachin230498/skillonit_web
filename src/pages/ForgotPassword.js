import React, { useState } from "react";
import image from "../assets/images/login-banner.png";
import logo from "../assets/images/Skilonit_new_logo.svg";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserFrgtPassApi, } from "../components/Helper/Redux/ReduxThunk/Homepage";
import OtpPage from "./OtpPage";
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

});
Notiflix.Notify.init({
  position: "center-top",
  distance: "10px",
  timeout: 2000,
  showOnlyTheLastOne: true,
});
const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [otpTime, setOtpTime] = useState("")
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
  const handleEmailSubmit = async (data) => {
    let params = {
      email: data.email,
    };
    setLoading(true);
    await dispatch(
      UserFrgtPassApi(params, (resp) => {
        if (resp.status === true) {
          sessionStorage.setItem("email", data.email)
          setOtpTime(resp?.data)
          Notiflix.Notify.success(resp?.message);
          reset();
          resetForm();
          setLoading(false);
          // navigate("/otp?status=verified");
          handleShow();
        } else {
          setLoading(false);
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  const resetForm = () => {
    reset();
    setValue("email", "");
  };



  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="login">
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
                      onSubmit={handleSubmit(handleEmailSubmit)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSubmit(handleEmailSubmit)();
                        }
                      }}
                      className="signup-form-div signup-form-div-2"
                    >
                      <h1 className="h-text-1 mt-5">Forgot Password</h1>
                      <p className="p-text-1">
                        Forgot your password? Reset it easily with SkillonIT to regain access to your account.
                      </p>

                      <div className="form-floating">
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              className={`form-control ${errors.email ? "form-control-border invalid" : ""}`}
                              placeholder="Email"
                              autoComplete="off"
                            />
                          )}
                        />
                        <label htmlFor="email">Email</label>
                      </div>

                      {!loading && <button
                        type="submit"
                        className="btn-signup"

                      >
                        Send OTP
                      </button>}
                      {loading && <button className='btn-signup' disabled>
                        <div className="text-center">
                          <div className="spinner-border text-light" role="status">
                          </div>
                        </div>
                      </button>}
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
      <OtpPage show={showModal} handleClose={handleClose} otpTime={otpTime} />

    </div>
  );
};

export default ForgotPassword;
