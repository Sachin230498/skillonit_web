import React, { useEffect, useState } from "react";
import mailicon from "../../assets/images/mailicon.svg";
import mailtick from "../../assets/images/mailtick.svg";
import mailx from "../../assets/images/in-valid-icon.svg";
import applylogo from "../../assets/images/Skilonit_new_logo.svg";
import applyclose from "../../assets/images/applyclose.svg";
import { GetState, GetCity } from "react-country-state-city";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";
import { useDispatch } from "react-redux";
import { ApplyJobApi } from "../Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";
import { FaUpload } from "react-icons/fa";

const schema = yup.object().shape({
  position: yup.string().required("Position is required"),
  fullName: yup.string().matches(/^(?!\s*$).+/, "First Name is required").required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  phoneNumber: yup
    .string()
    .required("Mobile Number is required!")
    .matches(/^\+91[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  experience: yup.string().required("Experience level is required"),
  linkedinUrl: yup
    .string()
    .url("Invalid URL")
    .required("LinkedIn URL is required"),
  resume: yup
    .mixed()
    .test("fileRequired", "Resume is required", (value) => {
      return value && value instanceof File;
    })
    .test(
      "fileType",
      "File format not supported. Please upload a .doc, .docx, or .pdf file.",
      (value) => {
        if (value) {
          return [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type);
        }
        return true;
      }
    )
    .test("fileSize", "File size must be less than 2MB", (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024;
      }
      return true;
    })
    .required("Resume is required"),
  hearAboutUs: yup.string().required("This field is required"),
  declaration: yup.boolean().oneOf([true], "You must accept the declaration"),
});

const ApplyJob = ({ position }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      position: position,
    },
  });

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const countryId = 101;

  useEffect(() => {
    GetState(countryId).then((result) => {
      setStateList(result || []);
    });
  }, []);

  const selectedState = getValues("state");

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

  const handleFileChange = (event, onChange) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onChange(selectedFile);
    }
  };

  useEffect(() => {
    setValue("position", position);
  }, [position, setValue]);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("position", getValues("position"));
    formData.append("firstName", data.fullName);
    formData.append("email", data.email);
    formData.append("state", data.state);
    formData.append("city", data.city);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("experience", data.experience);
    formData.append("linkedinUrl", data.linkedinUrl);
    formData.append("hearAboutUs", data.hearAboutUs);
    formData.append("declaration", data.declaration);
    formData.append("type", "applyJobForm");

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    await dispatch(
      ApplyJobApi(formData, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Success");
          reset({
            position: getValues("position"),
            fullName: "",
            email: "",
            state: "",
            city: "",
            phoneNumber: "",
            experience: "",
            linkedinUrl: "",
            resume: "",
            hearAboutUs: "",
            declaration: false,
          }
          );

          const fileInput = document.getElementById("formFile");
          if (fileInput) {
            fileInput.value = "";
          }


          const modal = document.getElementById("job-close");
          if (modal) {
            modal.click();
          }
        } else {
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  return (
    <div className="contactus-modal">
      <div className="apply-job">
        <div
          className="modal fade"
          id="applyModal"
          tabIndex="-1"
          aria-labelledby="applyModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  className="apply-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="job-close"
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
                >
                  <div className="row g-2">
                    <div className="col-lg-12 col-md-12 col-12">
                      <h2 className="h-text-1">Apply for job!</h2>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="position" className="form-label">
                          Position Applied for
                        </label>
                        <Controller
                          name="position"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Position Applied For"
                              className={`form-control apply-form-control ${errors.position ? "is-invalid" : ""
                                }`}
                              readOnly
                              id="position"
                            />
                          )}
                        />
                        {errors.position && (
                          <div className="error-message text-danger">
                            {errors.position.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <Controller
                          name="fullName"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Full Name"
                              className={`form-control apply-form-control ${errors.fullName ? "is-invalid" : ""
                                }`}
                              id="fullName"
                            />
                          )}
                        />
                        {errors.fullName && (
                          <div className="error-message text-danger">
                            {errors.fullName.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <div
                              className={`input-group ${errors.email ? "error-input-group" : ""
                                }`}
                            >
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
                              <input
                                {...field}
                                type="email"
                                placeholder="Enter Email Address"
                                className={`form-control border-0 ${errors.email ? "is-invalid" : ""
                                  }`}
                                id="email"
                              />
                              <span
                                className="input-group-text"
                                id="basic-addon3"
                              >
                                {touchedFields.email ? (
                                  errors.email ? (
                                    <img
                                      src={mailx}
                                      alt="invalid email"
                                      className="apply-mail-icon"
                                    />
                                  ) : (
                                    <img
                                      src={mailtick}
                                      alt="valid email"
                                      className="apply-mail-icon"
                                    />
                                  )
                                ) : null}
                              </span>
                            </div>
                          )}
                        />
                        {errors.email && (
                          <div className="error-message text-danger">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="row g-1">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="apply-form">
                            <label htmlFor="state" className="form-label">
                              State/Province
                            </label>
                            <Controller
                              name="state"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <select
                                  {...field}
                                  className={`form-select ${errors.state ? "is-invalid" : ""
                                    }`}
                                  id="state"
                                  onChange={(e) => setValue("state", e.target.value)}
                                >
                                  <option value="" className="d-none">
                                    Select a state
                                  </option>
                                  {stateList.map((state) => (
                                    <option key={state.id} value={state.name}>
                                      {state.name}
                                    </option>
                                  ))}
                                </select>
                              )}
                            />
                            {errors.state && (
                              <div className="error-message text-danger">
                                {errors.state.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="apply-form">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <Controller
                              name="city"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <select
                                  {...field}
                                  className={`form-select ${errors.city ? "is-invalid" : ""
                                    }`}
                                  id="city"
                                  disabled={!cityList.length}
                                >
                                  <option value="" className="d-none">
                                    Select a city
                                  </option>
                                  {cityList.map((city) => (
                                    <option key={city.id} value={city.name}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>
                              )}
                            />
                            {errors.city && (
                              <div className="error-message text-danger">
                                {errors.city.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <Controller
                          name="phoneNumber"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <PhoneInput
                              defaultCountry="IN"
                              value={field.value}
                              withCountryCallingCode
                              className={`${errors.phoneNumber ? "error-input-group" : ""
                                }`}
                              countrySelectProps={{
                                style: { display: "none" },
                              }}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                              name="phoneNumber"
                              id="phoneNumber"
                              placeholder="Enter Mobile Number"
                              autoFocus
                            />
                          )}
                        />
                        {errors.phoneNumber && (
                          <div className="error-message text-danger">
                            {errors.phoneNumber.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="experience" className="form-label">
                          What’s Your Experience Level?
                        </label>
                        <Controller
                          name="experience"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <select
                              {...field}
                              className={`form-select ${errors.experience ? "is-invalid" : ""
                                }`}
                              id="experience"
                            >
                              <option value="" className="d-none">
                                Choose Your Experience Level
                              </option>
                              <option value="Intern">Intern</option>
                              <option value="Fresher">Fresher</option>
                              <option value="Less than 1 Year">
                                Less than 1 Year
                              </option>
                              <option value="1 Year">1 Year</option>
                              <option value="2 Years">2 Years</option>
                              <option value="More than 2 Years">
                                More than 2 Year
                              </option>
                            </select>
                          )}
                        />
                        {errors.experience && (
                          <div className="error-message text-danger">
                            {errors.experience.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="linkedinUrl" className="form-label">
                          LinkedIn Url
                        </label>
                        <Controller
                          name="linkedinUrl"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Linkedin Url"
                              className={`form-control apply-form-control ${errors.linkedinUrl ? "is-invalid" : ""
                                }`}
                              id="linkedinUrl"
                            />
                          )}
                        />
                        {errors.linkedinUrl && (
                          <div className="error-message text-danger">
                            {errors.linkedinUrl.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="resume" className="form-label">
                          (Accepted formats: .doc, .docx, .pdf. Max file size is
                          below 2MB.)
                        </label>
                        <Controller
                          name="resume"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <div className="custom-file-input">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  handleFileChange(e, field.onChange)
                                }
                              />
                              <button
                                className={`custom-upload-btn ${errors.resume ? "error-input-group" : ""
                                  }`}
                                type="button"
                                onClick={() =>
                                  document.getElementById("formFile").click()
                                }
                              >
                                {field.value
                                  ? field.value.name
                                  : "Upload Resume"}

                                <FaUpload className="upload-icon" />

                              </button>
                            </div>
                          )}
                        />
                        {errors.resume && (
                          <div className="error-message text-danger">
                            {errors.resume.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3">
                      <div className="apply-form">
                        <label htmlFor="hearAboutUs" className="form-label">
                          How Did You Hear About Us?
                        </label>
                        <Controller
                          name="hearAboutUs"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <select
                              {...field}
                              className={`form-select ${errors.hearAboutUs ? "is-invalid" : ""
                                }`}
                              id="hearAboutUs"
                            >
                              <option value="" className="d-none">
                                How Did You Hear About Us?
                              </option>
                              <option value="Through Linkedin">
                                Through Linkedin
                              </option>
                              <option value="Through Whatsapp">
                                Through Whatsapp
                              </option>
                              <option value="Social Media">Social Media</option>
                              <option value="Refer by a Friend/Colleague">
                                Refer by a Friend/Colleague
                              </option>
                              <option value="Others">Others</option>
                            </select>
                          )}
                        />
                        {errors.hearAboutUs && (
                          <div className="error-message text-danger">
                            {errors.hearAboutUs.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                      <div className="form-check">
                        <Controller
                          name="declaration"
                          control={control}
                          defaultValue={false}
                          render={({ field }) => (
                            <input
                              {...field}
                              className={`form-check-input ${errors.declaration ? "is-invalid" : ""
                                }`}
                              type="checkbox"
                              id="declaration"
                            />
                          )}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="declaration"
                        >
                          I hereby declare that the information provided above
                          is true, complete, and accurate to the best of my
                          knowledge and belief.
                        </label>
                        {/* {errors.declaration  && (
                          <div className="error-message text-danger">{errors.declaration.message}</div>
                        )} */}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="apply-card-foot">
                        <img
                          src={applylogo}
                          className="applylogo"
                          alt="apply logo"
                        />
                        <button type="submit" className="btn-apply-submit-1">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
