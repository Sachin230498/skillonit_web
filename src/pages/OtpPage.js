import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import logo from "../assets/images/Skilonit_new_logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserOTPSubmitApi, UserResendOTPSubmitApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import { Modal } from "react-bootstrap";

const loginSchema = yup.object().shape({
    otp: yup.string()
        .length(6, "OTP must be exactly 6 digits")
        .matches(/^\d+$/, "OTP must contain only digits")
        .required("OTP is required"),
});

Notiflix.Notify.init({
    position: "center-top",
    distance: "10px",
    timeout: 2000,
    showOnlyTheLastOne: true,
});

const OtpPage = ({ show, handleClose, otpTime }) => {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);
    const [canResend, setCanResend] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleSubmit, control, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onChange",
        defaultValues: { otp: "" },
    });

    useEffect(() => {
        if (show) {
            const otpExpirationTime = new Date(otpTime).getTime();
            const currentTime = new Date().getTime();
            const diffInSeconds = Math.max(Math.floor((otpExpirationTime - currentTime) / 1000), 0);

            setTimeLeft(diffInSeconds);
            setCanResend(diffInSeconds <= 0);
        }
    }, [show, otpTime]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const handleOtpSubmit = async (data) => {
        let usermail = sessionStorage.getItem("email");
        let params = { email: usermail, otp: data.otp };

        setLoading(true);
        await dispatch(
            UserOTPSubmitApi(params, (resp) => {
                if (resp.status === true) {
                    Notiflix.Notify.success(resp.message);
                    sessionStorage.setItem("accesID", resp?.data?.id);
                    reset();
                    resetForm();
                    setLoading(false);
                    handleClose();
                    navigate("/reset-password");
                } else {
                    setLoading(false);
                    Notiflix.Notify.failure(resp?.message);
                }
            })
        );
    };

    const resetForm = () => {
        reset();
        setValue("otp", "");
        setOtp("");
    };

    const handleResendOtp = async () => {
        if (canResend) {
            let usermail = sessionStorage.getItem("email");
            let params = { email: usermail };

            setOtp("")
            setCanResend(false);
            setTimeLeft(100);

            await dispatch(
                UserResendOTPSubmitApi(params, (resp) => {
                    if (resp.status === true) {
                        Notiflix.Notify.success(resp.message);
                    } else {
                        Notiflix.Notify.failure(resp?.message);
                    }
                })
            );
        }
    };

    return (
        <Modal show={show}
            onHide={loading ? null : handleClose}
            backdrop="static"
            dialogClassName="profile-modal otp-modal"
            backdropClassName="modal-backdrop"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className="login">
                <div className="signup">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="sigup-modal-content">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="signup-left">
                                            <div className="sign-head">
                                                <img src={logo} alt="logo" className="sign-logo" />
                                            </div>
                                            <form
                                                onSubmit={handleSubmit(handleOtpSubmit)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        e.preventDefault();
                                                        handleSubmit(handleOtpSubmit)();
                                                    }
                                                }}
                                                className="signup-form-div signup-form-div-2 mt-0"
                                            >

                                                <h1 className="h-text-1 mt-5">Verify OTP</h1>
                                                <p className="p-text-1">
                                                    Enter the OTP sent to your email.
                                                </p>

                                                <div className="form-floating">
                                                    <Controller
                                                        name="otp"
                                                        control={control}
                                                        render={({ field: { onChange, value } }) => (
                                                            <OtpInput
                                                                value={value}
                                                                onChange={(val) => {
                                                                    onChange(val);
                                                                    setOtp(val);
                                                                }}
                                                                numInputs={6}
                                                                containerStyle="otp-container"
                                                                inputStyle={`otp-input ${errors.otp ? "otp-invalid" : ""}`}
                                                                renderSeparator={<span className="otp-separator">-</span>}
                                                                renderInput={(props) => <input {...props} />}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                                <div className="expire-section">
                                                    <p className="p-text-1 m-0">
                                                        OTP expires in ({formatTime(timeLeft)})
                                                    </p>

                                                    <button
                                                        type="button"
                                                        onClick={handleResendOtp}
                                                        disabled={!canResend}
                                                        className={`btn-resend ${canResend ? "active" : "c-not-allowed"}`}>
                                                        Resend OTP
                                                    </button>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className={`btn-signup ${otp.length === 6 ? "" : "c-not-allowed"}`}
                                                    disabled={otp.length !== 6 || loading}>
                                                    {loading ? (
                                                        <div className="text-center">
                                                            <div className="spinner-border text-light" role="status"></div>
                                                        </div>
                                                    ) : (
                                                        "Verify OTP"
                                                    )}
                                                </button>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OtpPage;
