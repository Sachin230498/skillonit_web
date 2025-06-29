import React, { Fragment, useState } from "react";
import image from "../assets/images/login-banner.png";
import logo from "../assets/images/Skilonit_new_logo.svg";
import eyeclose from "../assets/images/eyeclose.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    UserRstPassApi,
} from "../components/Helper/Redux/ReduxThunk/Homepage";
import FullScreenLoader from "../components/common/FullScreenLoader";

const loginSchema = yup.object().shape({
    password: yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
});
Notiflix.Notify.init({
    position: "center-top",
    distance: "10px",
    timeout: 2000,
    showOnlyTheLastOne: true,
});
const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });
    const onSubmit = async (data) => {
        let Id = sessionStorage.getItem("accesID")
        let params = {
            newPassword: data.password,
            confirmNewPassword: data.confirmPassword,
            id: Id
        };
        setLoading(true);
        await dispatch(
            UserRstPassApi(params, (resp) => {
                if (resp.status === true) {
                    Notiflix.Notify.success(resp?.message);
                    reset();
                    resetForm();
                    setLoading(false);
                    navigate("/signin");
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
        setValue("password", "");
    };


    return (
        <Fragment>
            <div className="login">
                <div className="signup">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="sigup-modal-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="signup-left">
                                            <div className="sign-head">
                                                <img src={logo} alt="logo" className="sign-logo" />
                                            </div>
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
                                                <h1 className="h-text-1 mt-5">Reset password</h1>
                                                <div className="form-floating">
                                                    <Controller
                                                        name="password"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <input
                                                                {...field}
                                                                type={showPassword ? "text" : "password"}
                                                                className={`form-control ${errors.password ? "form-control-border invalid" : ""}`}
                                                                placeholder="Password"
                                                                autoComplete="off"
                                                            />
                                                        )}
                                                    />

                                                    <label htmlFor="email">Password</label>
                                                    <button className="btn-eye" type="button" onClick={togglePasswordVisibility}>
                                                        <img src={eyeclose} alt="eye" />
                                                    </button>
                                                </div>
                                                <div className="form-floating">
                                                    <Controller
                                                        name="confirmPassword"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <input
                                                                {...field}
                                                                type={showConfirmPassword ? "text" : "password"}
                                                                className={`form-control ${errors.confirmPassword ? "form-control-border invalid" : ""}`}
                                                                placeholder="Password"
                                                                autoComplete="off"
                                                            />
                                                        )}
                                                    />
                                                    <label htmlFor="email">Confirm Password</label>
                                                    <button className="btn-eye" type="button" onClick={toggleConfirmPasswordVisibility}>
                                                        <img src={eyeclose} alt="eye" />
                                                    </button>
                                                </div>
                                                {!loading && <button type="submit" className="btn-signup">Submit</button>}
                                                {loading && <button type="button" disabledclassName="btn-signup">Submit</button>}
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
            </div>
            <FullScreenLoader isLoading={loading} />
        </Fragment>
    );
};

export default ResetPassword;
