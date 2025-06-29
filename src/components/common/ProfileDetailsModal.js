import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import applyclose from "../../assets/images/applyclose.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { GetState, GetCity } from "react-country-state-city";
import { useUserContext } from '../Helper/UserContext';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UpdateCurrentUserDetailsApi } from '../Helper/Redux/ReduxThunk/Homepage';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    designation: yup.string().required("Designation is required"),
    gender: yup.string().required("Gender is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
});

const ProfileDetailsModal = ({ show, handleClose, getAnyUsersData }) => {
    const { userDetails } = useUserContext();
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const countryId = 101;
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            firstName: userDetails?.name?.split(" ")[0] || "",
            lastName: userDetails?.name?.split(" ")[1] || "",
            email: userDetails?.email || "",
            phoneNumber: userDetails?.mobile || "",
            designation: userDetails?.designation || "",
            gender: userDetails?.gender || "",
            state: userDetails?.state || "",
            city: userDetails?.city || "",
        }
    });

    const selectedState = watch("state");

    useEffect(() => {
        GetState(countryId).then((result) => {
            setStateList(result || []);
        });
    }, []);

    useEffect(() => {
        const selectedStateObj = stateList.find((state) => state.name === selectedState);
        if (selectedStateObj) {
            GetCity(countryId, selectedStateObj.id).then((result) => {
                setCityList(result || []);
            });
        } else {
            setCityList([]);
        }
    }, [selectedState, stateList]);

    useEffect(() => {
        if (userDetails) {
            reset({
                firstName: userDetails?.name?.split(" ")[0] || "",
                lastName: userDetails?.name?.split(" ")[1] || "",
                email: userDetails?.email || "",
                phoneNumber: userDetails?.mobile || "",
                designation: userDetails?.designation || "",
                gender: userDetails?.gender || "",
                state: userDetails?.state || "",
                city: userDetails?.city || "",
            });
        }
    }, [userDetails, reset]);

    const onSubmit = async (data) => {
        await dispatch(
            UpdateCurrentUserDetailsApi(data, (resp) => {
                if (resp.status === true) {
                    Notiflix.Notify.success("Profile updated successfully!");
                    getAnyUsersData();
                    handleClose();
                } else {
                    Notiflix.Notify.failure("Failed to update profile. Try again.");
                }
            })
        );
    };

    return (
        <Modal show={show}
            onHide={handleClose}
            dialogClassName="profile-modal"
            backdropClassName="modal-backdrop"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='profile-modal-body'>
                <div className='profile-modal-head'>
                    <h1 className='p-text-1'>Personal Details</h1>
                </div>
                <button
                    className="apply-close-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                >
                    <img src={applyclose} alt="close" />
                </button>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit(onSubmit)();
                        }
                    }}
                    className='profile-body-container'
                >
                    <div className="profile-modal-input">
                        <label className="form-label">First Name</label>
                        <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} {...register("firstName")} />
                        <p className="error-message text-danger">{errors.firstName?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">Last Name</label>
                        <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} {...register("lastName")} />
                        <p className="error-message text-danger">{errors.lastName?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">Email</label>
                        <input type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} {...register("email")} readOnly />
                        <p className="error-message text-danger">{errors.email?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">Phone number</label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className={`text-style ${errors.phoneNumber ? "error-input-group" : ""}`}
                                    placeholder="Enter phone number"
                                    countryCallingCodeEditable={false}
                                    disabledCountrySelect
                                    countrySelectProps={{ style: { display: "none" }, showFlags: false }}
                                />
                            )}
                        />
                        <p className="error-message text-danger">{errors.phoneNumber?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">Designation</label>
                        <input type="text" placeholder='Enter Designation' className={`form-control ${errors.designation ? "is-invalid" : ""}`} {...register("designation")} />
                        <p className="error-message text-danger">{errors.designation?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">Gender</label>
                        <select className="form-select" {...register("gender")}>
                            <option value="" className='d-none'>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <p className="error-message text-danger">{errors.gender?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">State</label>
                        <select
                            className="form-select"
                            {...register("state")}
                            onChange={(e) => setValue("state", e.target.value)}
                        >
                            <option value="" className='d-none'>Select a state</option>
                            {stateList.map((state) => (
                                <option key={state.id} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                        <p className="error-message text-danger">{errors.state?.message}</p>
                    </div>

                    <div className="profile-modal-input">
                        <label className="form-label">City</label>
                        <select className="form-select" {...register("city")} disabled={!cityList.length}>
                            <option value="" className='d-none'>Select a city</option>
                            {cityList.map((city) => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        <p className="error-message text-danger">{errors.city?.message}</p>
                    </div>

                    <button type="submit" className="btn-apply-profile">Submit</button>
                </form>
            </div>
        </Modal>
    );
};

export default ProfileDetailsModal;
