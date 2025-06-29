import React, { useState, useEffect } from "react";
import dropicon from "../../assets/images/contactdrop.svg";
import bluewall from "../../assets/images/bluewall.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { ContactUsApi, GetallCourseApi } from "../Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";

const ContactUs = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

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

  const studentSchema = yup.object().shape({
    firstName: yup.string().matches(/^(?!\s*$).+/, "Name is required").required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    city: yup.string().matches(/^(?!\s*$).+/, "City is required").required("Please select a city"),
    mobileNumber: yup
      .string()
      // .matches(/^\+91[6-9]\d{9}$/, "Mobile number must be 10 digits")
      .required("Mobile Number is required"),
    course: yup.string().required("Please select a course"),
    isaccepted: yup.bool().oneOf([true], "NDA agreement is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(studentSchema),
  });

  const onSubmit = async (data) => {
    let params = {
      firstName: data.firstName,
      email: data.email,
      city: data.city,
      mobileNumber: data.mobileNumber,
      course: data.course,
      isaccepted: data.isaccepted,
      type: "footerForm",
    };

    await dispatch(
      ContactUsApi(params, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Success");
          reset({
            firstName: "",
            email: "",
            city: "",
            mobileNumber: "",
            course: "",
            isaccepted: false,
          });
        } else {
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };


  return (
    <div className="contact-us  " id="contact-us">
      <div className="contact-div">
        <div className="row g-3">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-form-div">
              <h1 className="h-text-1">Get in touch</h1>
              <p className="p-text-1">
                Reach out to SkillonIT today and discover how our IT training
                programs can help you develop valuable skills.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              >
                <div className="row g-2">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control contact-form-control"
                      placeholder="Name"
                      {...register("firstName")}
                    />
                    <p className="error-message text-danger">{errors.firstName?.message}</p>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      className="form-control contact-form-control"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <p className="error-message text-danger">{errors.email?.message}</p>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      className="form-control contact-form-control"
                      placeholder="Phone"
                      {...register("mobileNumber")}
                    />
                    <p className="error-message text-danger">
                      {errors.mobileNumber?.message}
                    </p>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      className="form-control contact-form-control"
                      placeholder="City"
                      {...register("city")}
                    />
                    <p className="error-message text-danger">{errors.city?.message}</p>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <Controller
                      name="course"
                      control={control}
                      render={({ field }) => (
                        <div className="dropdown">
                          <button
                            className="contact-dropdown"
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {field.value || "Select Course"}
                            <img
                              src={dropicon}
                              className="contact-drop-icon"
                              alt="dropdown"
                            />
                          </button>

                          {isOpen && (
                            <div className="contact-dropdown-menu">
                              {allCourses.map((course) => (
                                <p
                                  key={course._id}
                                  className="category-dropdown-item"
                                  onClick={() => {
                                    field.onChange(course.heading);
                                    setIsOpen(false);
                                  }}
                                >
                                  {course.heading}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    />
                    <p className="error-message text-danger">{errors.course?.message}</p>
                  </div>
                </div>
                <div className="form-check mt-4 mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("isaccepted")}
                  />
                  <label className="form-check-label">
                    I want to protect my data by signing an NDA
                  </label>
                  <p className="error-message text-danger">{errors.isaccepted?.message}</p>
                </div>

                <button className="btn-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="map-section">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119629.35488128738!2d76.1322535890625!3d20.448045130023573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda1d005f7b8cc3%3A0x8c36565e89364cca!2sSkillonIT%20Learning%20Hub%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739946427060!5m2!1sen!2sin"
                className="map-frame"
                title="Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              <img src={bluewall} className="bluewall-img" alt="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
