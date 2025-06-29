import React, { useState, useEffect } from "react";
import { GetState, GetCity } from "react-country-state-city";
import mailicon from "../../assets/images/mailicon.svg";
import mailtick from "../../assets/images/mailtick.svg";
import mailx from "../../assets/images/in-valid-icon.svg";
import applylogo from "../../assets/images/Skilonit_new_logo.svg";
import applyclose from "../../assets/images/applyclose.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { ContactUsApi, GetallCourseApi } from "../Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";


const studentSchema = yup.object().shape({
  firstName: yup.string().matches(/^(?!\s*$).+/).required("First Name is required"),
  lastName: yup.string().matches(/^(?!\s*$).+/).required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  location: yup.string().required("Please select a location (Rural or Urban)."),
  compound: yup.string().required("Choose Your Learning Path is required"),
  education: yup.string().required("Education is required"),
  state: yup.string().required("Please select a state."),
  city: yup.string().required("Please select a city."),
  PostalCode: yup.string().required("First Name is required"),
  privacyPolicy: yup.bool().oneOf([true], "Privacy Policy must be accepted"),
  mobileNumber: yup
    .string()
    .required("Mobile Number is required!")
    .matches(/^\+91[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
});

const companySchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  contactName: yup.string().required("Contact Person's Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const inquirySchema = yup.object().shape({
  IcompanyName: yup.string().required("Inquiry Name is required"),
  Iemail: yup.string().email("Invalid email").required("Email is required"),
  IcontactName: yup.string().required("Contact Person's Full Name is required"),
});

const ContactusModal = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [allCourses, setAllCourses] = useState([]);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(
      activeTab === "students"
        ? studentSchema
        : activeTab === "companies"
          ? companySchema
          : inquirySchema
    ),
    defaultValues: {
      location: "",
      privacyPolicy: false,
    },
    mode: "onChange",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(
        GetallCourseApi({}, (resp) => {
          if (resp.status) {
            setAllCourses(resp.data);
          }
        })
      );
    };
    fetchCourses();
  }, [dispatch]);

  const onSubmit = async (data) => {
    let params = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      location: data?.location,
      interest: data?.compound,
      education: data?.education,
      state: data?.state,
      city: data?.city,
      postalCode: data?.PostalCode,
      mobileNumber: data?.mobileNumber,
      isaccepted: data?.privacyPolicy,
      type: "contactUsForm",
    };
    await dispatch(
      ContactUsApi(params, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Success");
          reset({
            firstName: "",
            lastName: "",
            email: "",
            location: "",
            compound: "",
            education: "",
            state: "",
            city: "",
            PostalCode: "",
            mobileNumber: "",
            privacyPolicy: false,
          });

          const modal = document.getElementById("signupModal");
          if (modal) {
            const modalInstance = bootstrapBundleMin.Modal.getInstance(modal);
            modalInstance?.hide();
          }
        } else {
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const countryId = 101;

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


  const handleTabChange = (tab) => {
    setActiveTab(tab);
    reset();
  };

  return (
    <div className="contactus-modal">
      <div className="apply-job">
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  className="apply-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={applyclose} alt="close" />
                </button>
                <div className="row g-2">
                  <div className="col-lg-12 col-md-12 col-12">
                    <h2 className="h-text-1">Contact Us!</h2>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="tab-content" id="pills-tabContent">
                      {activeTab === "students" && (
                        <form
                          className="tab-pane fade show active"
                          onSubmit={handleSubmit(onSubmit)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSubmit(onSubmit)();
                            }
                          }}
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="row g-2">
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    First Name
                                  </label>
                                  <div className="input-group">
                                    <Controller
                                      name="firstName"
                                      control={control}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="First Name"
                                          className={`form-control ${errors.firstName ? "is-invalid" : ""
                                            }`}
                                          {...field}
                                        />
                                      )}
                                    />
                                    {/* {errors.firstName && (
                                      <div className="error-message text-danger">
                                        {errors.firstName.message}
                                      </div>
                                    )} */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Last Name
                                  </label>
                                  <div className="input-group">
                                    <Controller
                                      name="lastName"
                                      control={control}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="Last Name"
                                          className={`form-control ${errors.lastName ? "is-invalid" : ""
                                            }`}
                                          {...field}
                                        />
                                      )}
                                    />
                                    {/* {errors.lastName && (
                                      <div className="error-message text-danger">
                                        {errors.lastName.message}
                                      </div>
                                    )} */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <div className={`input-group ${errors.email ? "error-input-group" : ""
                                    }`}>
                                    <span
                                      className="input-group-text"
                                      id="basic-addon3"
                                    >
                                      <img
                                        src={mailicon}
                                        alt="mail"
                                        className="apply-mail-icon"
                                      />
                                    </span>
                                    <Controller
                                      name="email"
                                      control={control}
                                      render={({ field }) => (
                                        <input
                                          type="email"
                                          className={`form-control border-0 ${errors.email ? "is-invalid" : ""
                                            }`}
                                          {...field}
                                        />
                                      )}
                                    />
                                    {/* {errors.email && (
                                      <div className="error-message text-danger">
                                        {errors.email.message}
                                      </div>
                                    )} */}
                                    <span className="input-group-text" id="basic-addon3">
                                      {touchedFields.email ? (
                                        errors.email ? (
                                          <img src={mailx} alt="invalid email" className="apply-mail-icon" />
                                        ) : (
                                          <img src={mailtick} alt="valid email" className="apply-mail-icon" />
                                        )
                                      ) : null}
                                    </span>
                                  </div>
                                  <div>
                                    <Controller
                                      name="location"
                                      control={control}
                                      render={({ field }) => (
                                        <>
                                          <div className="form-check form-check-inline">
                                            <input
                                              type="radio"
                                              value="Rural"
                                              className="form-check-input"
                                              {...field}
                                              checked={field.value === "Rural"}
                                              onChange={() =>
                                                field.onChange("Rural")
                                              }
                                            />
                                            <label
                                              className={`form-check-label ${field.value === "Rural" ? 'text-blue' : ''} ${errors.location ? 'text-danger' : ''}`}
                                              htmlFor="inlineRadio2"
                                            >
                                              Rural
                                            </label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                            <input
                                              type="radio"
                                              value="Urban"
                                              className="form-check-input"
                                              {...field}
                                              checked={field.value === "Urban"}
                                              onChange={() =>
                                                field.onChange("Urban")
                                              }
                                            />
                                            <label
                                              className={`form-check-label ${field.value === "Urban" ? 'text-blue' : ''} ${errors.location ? 'text-danger' : ''}`}
                                              htmlFor="inlineRadio2"
                                            >
                                              Urban
                                            </label>
                                          </div>
                                        </>
                                      )}
                                    />
                                    {/* {errors.location && (
                                      <p className="error-message text-danger">
                                        {errors.location.message}
                                      </p>
                                    )} */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Choose Your Learning Path
                                  </label>
                                  <Controller
                                    name="compound"
                                    control={control}
                                    render={({ field }) => (
                                      <select
                                        className={`form-select ${errors.compound ? "is-invalid" : ""}`}
                                        {...field}
                                        aria-label="Default select example"
                                      >
                                        <option value="" className="d-none">
                                          Select a course
                                        </option>
                                        {allCourses.length > 0 ? (
                                          allCourses.map((course) => (
                                            <option key={course._id} value={course.heading}>
                                              {course.heading}
                                            </option>
                                          ))
                                        ) : (
                                          <option>Loading courses...</option>
                                        )}
                                      </select>
                                    )}
                                  />
                                  {/* {errors.compound && (
                                      <div className="error-message text-danger">
                                        {errors.compound.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Education
                                  </label>
                                  <Controller
                                    name="education"
                                    control={control}
                                    render={({ field }) => (
                                      <select
                                        className={`form-select ${errors.education ? "is-invalid" : ""
                                          }`}
                                        {...field}
                                        aria-label="Default select example"
                                      >
                                        <option value="" className="d-none">Select a education</option>
                                        <option value="High School">
                                          High School
                                        </option>
                                        <option value="Undergraduate">
                                          Undergraduate
                                        </option>
                                        <option value="Graduate">
                                          Graduate
                                        </option>
                                        <option value="Postgraduate">
                                          Postgraduate
                                        </option>
                                        <option value="Doctorate">
                                          Doctorate
                                        </option>
                                        <option value="Other">Other</option>
                                      </select>
                                    )}
                                  />
                                  {/* {errors.education && (
                                      <div className="error-message text-danger">
                                        {errors.education.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12  ">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    State/Provinence
                                  </label>
                                  <Controller
                                    name="state"
                                    control={control}
                                    render={({ field }) => (
                                      <select
                                        {...field}
                                        className={`form-select ${errors.state ? "is-invalid" : ""
                                          }`}
                                        onChange={(e) => setValue("state", e.target.value)}
                                      >
                                        <option value="" className="d-none">Select a state</option>
                                        {stateList.map((state) => (
                                          <option
                                            key={state.id}
                                            value={state.name}
                                          >
                                            {state.name}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  />
                                  {/* {errors.state && (
                                      <div className="error-message text-danger">
                                        {errors.state.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12 ">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    City
                                  </label>
                                  <Controller
                                    name="city"
                                    control={control}
                                    render={({ field }) => (
                                      <select
                                        {...field}
                                        className={`form-select ${errors.city ? "is-invalid" : ""
                                          }`}
                                        disabled={!cityList.length}
                                      >
                                        <option value="" className="d-none">Select a city</option>
                                        {cityList.map((city) => (
                                          <option key={city.id} value={city.name}>
                                            {city.name}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                  />
                                  {/* {errors.city && (
                                      <div className="error-message text-danger">
                                        {errors.city.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>{" "}
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Zip/Postal Code
                                  </label>
                                  <div className="input-group">
                                    <Controller
                                      name="PostalCode"
                                      control={control}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="xxxxx"
                                          className={`form-control ${errors.PostalCode
                                            ? "is-invalid"
                                            : ""
                                            }`}
                                          {...field}
                                        />
                                      )}
                                    />
                                  </div>
                                  {/* {errors.PostalCode && (
                                      <div className="error-message text-danger">
                                        {errors.PostalCode.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className=" apply-form">
                                  <label
                                    htmlFor="basic-url"
                                    className="form-label"
                                  >
                                    Phone Number
                                  </label>
                                  <Controller
                                    name="mobileNumber"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <PhoneInput
                                        defaultCountry="IN"
                                        value={field.value}
                                        withCountryCallingCode
                                        className={`${errors.mobileNumber ? "error-input-group" : ""}`}
                                        countrySelectProps={{
                                          style: { display: "none" },
                                        }}
                                        onChange={(value) => {
                                          field.onChange(value);
                                        }}
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        placeholder="Enter Mobile Number"
                                        autoFocus
                                      />
                                    )}
                                  />
                                  {/* {errors.mobileNumber && (
                                      <div className="error-message text-danger">
                                        {errors.mobileNumber.message}
                                      </div>
                                    )} */}
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-12">
                                <div className="form-check">
                                  <Controller
                                    name="privacyPolicy"
                                    control={control}
                                    render={({ field }) => (
                                      <input
                                        type="checkbox"
                                        className={`form-check-input ${errors.privacyPolicy
                                          ? "is-invalid"
                                          : ""
                                          }`}
                                        id="defaultCheck1"
                                        {...field}
                                      />
                                    )}
                                  />
                                  <Link
                                    to="/privacy-policy"
                                    className="form-check-label"
                                  >
                                    Privacy Policy
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-12">
                                <div className="apply-card-foot">
                                  <img
                                    src={applylogo}
                                    className="applylogo"
                                  />
                                  <button className="btn-apply-submit">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusModal;
