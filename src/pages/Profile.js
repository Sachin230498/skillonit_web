import React, { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {
  DeleteEducationApi,
  DeleteProfessionalExpApi,
  DeleteProjectApi,
  DeleteSkillsApi,
  GetAnyUserDetailsApi,
  GetCurrentUserDetailsApi,
  GetTokenVerifyApi,
  UpdateCurrentUserProfileApi,
  UpdateEducationApi,
  UpdateProfessionalExpApi,
  UpdateProjectApi,
  UpdateSkillsApi,
} from "../components/Helper/Redux/ReduxThunk/Homepage";
import BreadCrumb from "../components/common/BreadCrumbs";
import ProfileDetailsModal from "../components/common/ProfileDetailsModal";
import profile from "../assets/images/profile-placeholder.svg";
import edit from "../assets/images/profile/edit.svg";
import line from "../assets/images/profile/line.svg";
import verify from "../assets/images/profile/verified.svg";
import add from "../assets/images/profile/add.svg";
import profileBtn from "../assets/images/profile-edit-btn.png";
import { useParams } from "react-router-dom";
import { useUserContext } from "../components/Helper/UserContext";
import Notiflix from "notiflix";
import ProfileEmailVerifyModal from "../components/common/ProfileEmailVerifyModal";

const qualificationSchema = yup.object().shape({
  qualifications: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Qualification is required"),
    })
  ),
});

const experienceSchema = yup.object().shape({
  experience: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Experience is required"),
    })
  ),
});

const projectsSchema = yup.object().shape({
  projects: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Project is required"),
    })
  ),
});

const skillsSchema = yup.object().shape({
  skills: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Skill is required"),
    })
  ),
});

const Profile = () => {
  const { profileid } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const { updateUserDetails } = useUserContext();
  const [tokenVerify, setTokenVerify] = useState(false);

  const transformArrayToFormData = (array = []) => {
    return array.map(item => ({ value: item }));
  };


  const getAnyUsersData = async () => {
    await dispatch(
      GetAnyUserDetailsApi(profileid, (resp) => {
        if (resp.status === true) {
          setUserDetails(resp.data);
        }
      })
    );
  };

  useEffect(() => {
    getAnyUsersData();
  }, [profileid]);

  const getTokenVerifyData = async () => {
    let data = {
      unId: profileid,
    }
    await dispatch(
      GetTokenVerifyApi(data, (resp) => {
        if (resp.status === true) {
          setTokenVerify(true);
        } else {
          setTokenVerify(false)
        }
      })
    );
  };

  useEffect(() => {
    getTokenVerifyData();
  }, [dispatch]);

  const {
    control: qualificationControl,
    handleSubmit: submitQualifications,
    formState: { errors: qualificationErrors },
    reset: resetQualifications,
  } = useForm({
    resolver: yupResolver(qualificationSchema),
    defaultValues: {
      qualifications: transformArrayToFormData(userDetails?.educationalQualifications || []),
    },
  });

  const {
    fields: qualificationFields,
    append: appendQualification,
    remove: removeQualification,
  } = useFieldArray({
    control: qualificationControl,
    name: "qualifications",
  });

  const {
    control: experienceControl,
    handleSubmit: submitExperience,
    formState: { errors: experienceErrors },
    reset: resetExperience,
  } = useForm({
    resolver: yupResolver(experienceSchema),
    defaultValues: {
      experience: transformArrayToFormData(userDetails?.professionalExperience || []),
    },
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: experienceControl,
    name: "experience",
  });

  const {
    control: projectsControl,
    handleSubmit: submitProjects,
    formState: { errors: projectsErrors },
    reset: resetProjects,
  } = useForm({
    resolver: yupResolver(projectsSchema),
    defaultValues: {
      projects: transformArrayToFormData(userDetails?.Projects || []),
    },
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control: projectsControl,
    name: "projects",
  });

  const {
    control: skillsControl,
    handleSubmit: submitSkills,
    formState: { errors: skillsErrors },
    reset: resetSkills,
  } = useForm({
    resolver: yupResolver(skillsSchema),
    defaultValues: {
      skills: transformArrayToFormData(userDetails?.skillsAreasOfInterest || []),
    },
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: skillsControl,
    name: "skills",
  });

  useEffect(() => {
    if (userDetails) {
      resetQualifications({
        qualifications: transformArrayToFormData(userDetails.educationalQualifications),
      });
      resetExperience({
        experience: transformArrayToFormData(userDetails.professionalExperience),
      });
      resetProjects({
        projects: transformArrayToFormData(userDetails.Projects),
      });
      resetSkills({
        skills: transformArrayToFormData(userDetails.skillsAreasOfInterest),
      });
    }
  }, [userDetails]);

  const onQualificationSubmit = async (data) => {
    try {
      await dispatch(UpdateEducationApi(data, (resp) => {
        if (resp?.status === true) {
          Notiflix.Notify.success("Educational qualifications updated successfully");
          getAnyUsersData();
        } else {
          Notiflix.Notify.failure("Failed to update educational qualifications");
        }
      }));

    } catch (error) {
      Notiflix.Notify.failure("Something went wrong! Please try again.");
    }
  };

  const handleDeleteEducation = (d) => {
    let data = { qualification: d };

    dispatch(DeleteEducationApi(data, (resp) => {
      if (resp.status === true) {
        Notiflix.Notify.success("Qualification Deleted Successfully");

        getAnyUsersData();
      } else {
        Notiflix.Notify.failure(resp?.message);
      }
    }));
  };

  const onExperienceSubmit = async (data) => {
    try {
      await dispatch(UpdateProfessionalExpApi(data, (resp) => {
        if (resp?.status === true) {
          Notiflix.Notify.success("Professional experience updated successfully");
          getAnyUsersData();
        } else {
          Notiflix.Notify.failure("Failed to update Professional experience");
        }
      }));

    } catch (error) {
      Notiflix.Notify.failure("Something went wrong! Please try again.");
    }
  };

  const handleDeleteExperience = (d) => {
    let data = { qualification: d };

    dispatch(DeleteProfessionalExpApi(data, (resp) => {
      if (resp.status === true) {
        Notiflix.Notify.success("Professional Experience Deleted Successfully");

        getAnyUsersData();
      } else {
        Notiflix.Notify.failure(resp?.message);
      }
    }));
  };

  const onProjectsSubmit = async (data) => {
    try {
      await dispatch(UpdateProjectApi(data, (resp) => {
        if (resp?.status === true) {
          Notiflix.Notify.success("Project url updated successfully");
          getAnyUsersData();
        } else {
          Notiflix.Notify.failure("Failed to update Project url");
        }
      }));

    } catch (error) {
      Notiflix.Notify.failure("Something went wrong! Please try again.");
    }
  };

  const handleDeleteProjects = (d) => {
    let data = { qualification: d };

    dispatch(DeleteProjectApi(data, (resp) => {
      if (resp.status === true) {
        Notiflix.Notify.success("Project Url Deleted Successfully");

        getAnyUsersData();
      } else {
        Notiflix.Notify.failure(resp?.message);
      }
    }));
  };

  const onSkillsSubmit = async (data) => {
    try {
      await dispatch(UpdateSkillsApi(data, (resp) => {
        if (resp?.status === true) {
          Notiflix.Notify.success("Skills and area of intrest updated successfully");
          getAnyUsersData();
        } else {
          Notiflix.Notify.failure("Failed to update Skills and area of intrest");
        }
      }));

    } catch (error) {
      Notiflix.Notify.failure("Something went wrong! Please try again.");
    }
  };

  const handleDeleteSkills = (d) => {
    let data = { qualification: d };

    dispatch(DeleteSkillsApi(data, (resp) => {
      if (resp.status === true) {
        Notiflix.Notify.success("Skills and area of intrest Deleted Successfully");

        getAnyUsersData();
      } else {
        Notiflix.Notify.failure(resp?.message);
      }
    }));
  };

  const handleImageUpload = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('profile_image', file);

      await dispatch(UpdateCurrentUserProfileApi(formData));

      dispatch(
        GetCurrentUserDetailsApi((response) => {
          if (response?.status === true) {
            updateUserDetails(response.data);
            Notiflix.Notify.success("Profile Updated Successfully");
          } else {
            console.error("Failed to fetch user details");
            Notiflix.Notify.failure(response?.message);
          }
        })
      );

      setProfileImage(URL.createObjectURL(file));
    } catch (error) {
      console.error("Error uploading Profile:", error);
    }
  };


  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleVerifyClose = () => setVerifyModal(false);

  const handleShare = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        Notiflix.Notify.success("Profile link copied to clipboard!");
      })
      .catch(err => {
        Notiflix.Notify.failure("Failed to copy link. Try again!");
        console.error("Copy failed:", err);
      });
  };

  const handleDownloadClick = () => {
    Notiflix.Notify.warning("CV download is not available right now.");
  };

  return (
    <div className="profile">
      <BreadCrumb pagename="Profile" cname="profile-bread-top" />
      <section className="profile-banner">
        <div className="profile-banner-head">
          <div className="profile-banner-head-content">
            <div className={`profile-upload-container ${tokenVerify === true ? "" : "c-not-allowed"}`}>
              <img
                src={profileImage || userDetails?.image || profile}
                className={`profile-img ${tokenVerify === true ? "" : "c-not-allowed"}`}
                alt="profile"
              />
              <div className={`profile-upload-btn ${tokenVerify === true ? "" : "c-not-allowed"}`}>
                <button
                  disabled={!tokenVerify}
                  className={`btn-edit ${tokenVerify === true ? "" : "c-not-allowed"}`}
                >
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <img src={profileBtn} alt="edit" className={`profile-edit-img ${tokenVerify === true ? "" : "c-not-allowed"}`} />
                  </label>
                </button>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={!tokenVerify}
                  className={`${tokenVerify === true ? "" : "c-not-allowed"}`}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-banner-content">
          <div className="profile-banner-body">
            <div className="profile-edit-div">
              <button
                className={`btn-edit ${tokenVerify === true ? "" : "c-not-allowed"}`}
                onClick={handleShow}
                disabled={!tokenVerify}
              >
                <img src={edit} alt="edit" className="edit-im" />
              </button>
            </div>
            <h1 className="h-text-1">
              {userDetails?.name}
              {/* <span className="s-text-1">(SKLP123456)</span> */}
            </h1>
            <div className="profile-designation">
              <span className={`s-text-1 ${userDetails?.designation ? "" : "d-none"}`}>{userDetails?.designation}</span>
              <span className={`s-text-2 ${userDetails?.city || userDetails?.state ? "" : "d-none"}`}>{userDetails?.city}, {userDetails?.state}, India.</span>
            </div>
            <img src={line} alt="line" className="line-img" />
            <div className="verification-div">
              <div className="row g-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="profile-ban-card">
                    <p className="p-text-2">
                      Email ID (Private to you)
                      <span className="s-text-2">
                        <img src={verify} alt="verify" className="verify-img" />
                        Verified
                      </span>
                    </p>
                    <p className="p-text-3">{userDetails?.email}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="profile-ban-card">
                    <p className="p-text-2">
                      Mobile (Private to you)
                    </p>
                    <p className="p-text-3">{userDetails?.mobile}</p>
                  </div>
                </div>
              </div>
              <div className="profile-banner-btn-div">
                <button className="btn-share" onClick={() => handleShare()}>Share profile</button>
                <button className="btn-download btn-share" onClick={() => handleDownloadClick()}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section-2">
        <form onSubmit={submitQualifications(onQualificationSubmit)}>
          <div className="profile-section-2-head">
            <p className="p-text-3">Educational Qualifications</p>
            {qualificationFields.length < 6 && (
              <button
                type="button"
                className={`btn-add ${tokenVerify === true ? "" : "c-not-allowed"}`}
                disabled={!tokenVerify}
                onClick={() => appendQualification({ value: "" })}
              >
                <img src={add} className="add-img" alt="add" />
              </button>
            )}
          </div>

          <div className="profile-section-2-body">
            {qualificationFields.length === 0 && (
              <p className="no-projects-message">
                Share your educational qualifications like your{" "}
                <br className="break" /> schooling and university name.
              </p>
            )}
            <div className="profile-section-form">
              {qualificationFields.map((field, index) => (
                <div key={field.id} className="profile-form-div">
                  <Controller
                    name={`qualifications.${index}.value`}
                    control={qualificationControl}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="form-control"
                        disabled={!tokenVerify}
                        placeholder="Enter qualification"
                      />
                    )}
                  />
                  {qualificationErrors.qualifications?.[index]?.value && (
                    <p className="error-message">
                      {qualificationErrors.qualifications[index].value.message}
                    </p>
                  )}
                  <button
                    type="button"
                    className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                    disabled={!tokenVerify}
                    onClick={() => {
                      if (!qualificationFields[index]?.value) {
                        removeQualification(index);
                        Notiflix.Notify.success("Qualification Deleted Successfully");
                      } else {
                        handleDeleteEducation(qualificationFields[index].value);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="profile-section-form-button">
              {qualificationFields.length < 6 && (
                <button
                  type="button"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                  onClick={() => appendQualification({ value: "" })}>
                  Add Qualification
                </button>
              )}
              {qualificationFields.length > 0 && (
                <button
                  type="submit"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      <section className="profile-section-2">
        <form onSubmit={submitExperience(onExperienceSubmit)}>
          <div className="profile-section-2-head">
            <p className="p-text-3">Professional Experience</p>
            {experienceFields.length < 6 && (
              <button
                type="button"
                className={`btn-add ${tokenVerify === true ? "" : "c-not-allowed"}`}
                disabled={!tokenVerify}
                onClick={() => appendExperience({ value: "" })}
              >
                <img src={add} className="add-img" alt="add" />
              </button>
            )}
          </div>

          <div className="profile-section-2-body">
            {experienceFields.length === 0 && (
              <p className="no-projects-message">
                Share your professional experience like your{" "}
                <br className="break" /> previous working role and company name.
              </p>
            )}
            <div className="profile-section-form">
              {experienceFields.map((field, index) => (
                <div key={field.id} className="profile-form-div">
                  <Controller
                    name={`experience.${index}.value`}
                    control={experienceControl}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="form-control"
                        disabled={!tokenVerify}
                        placeholder="Enter experience"
                      />
                    )}
                  />
                  {experienceErrors.experience?.[index]?.value && (
                    <p className="error-message">
                      {experienceErrors.experience[index].value.message}
                    </p>
                  )}
                  <button
                    type="button"
                    className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                    disabled={!tokenVerify}
                    onClick={() => {
                      if (!experienceFields[index].value) {
                        removeExperience(index);
                        Notiflix.Notify.success("Professional Experience Deleted Successfully");
                      } else {
                        handleDeleteExperience(experienceFields[index].value);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="profile-section-form-button">
              {experienceFields.length < 6 && (
                <button
                  type="button"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                  onClick={() => appendExperience({ value: "" })}
                >
                  Add Experience
                </button>
              )}
              {experienceFields.length > 0 && (
                <button
                  type="submit"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      <section className="profile-section-2">
        <form onSubmit={submitProjects(onProjectsSubmit)}>
          <div className="profile-section-2-head">
            <p className="p-text-3">Projects</p>
            {projectFields.length < 6 && (
              <button
                type="button"
                className={`btn-add ${tokenVerify === true ? "" : "c-not-allowed"}`}
                disabled={!tokenVerify}
                onClick={() => appendProject({ value: "" })}
              >
                <img src={add} className="add-img" alt="add" />
              </button>
            )}
          </div>

          <div className="profile-section-2-body">
            {projectFields.length === 0 && (
              <p className="no-projects-message">
                Share your project url like your{" "}
                <br className="break" /> previously worked project deployment link.
              </p>
            )}
            <div className="profile-section-form">
              {projectFields.map((field, index) => (
                <div key={field.id} className="profile-form-div">
                  <Controller
                    name={`projects.${index}.value`}
                    control={projectsControl}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="form-control"
                        disabled={!tokenVerify}
                        placeholder="Enter project URL"
                      />
                    )}
                  />
                  {projectsErrors.projects?.[index]?.value && (
                    <p className="error-message">
                      {projectsErrors.projects[index].value.message}
                    </p>
                  )}
                  <button
                    type="button"
                    className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                    disabled={!tokenVerify}
                    onClick={() => {
                      if (!projectFields[index].value) {
                        removeProject(index);
                        Notiflix.Notify.success("Project Url Deleted Successfully");
                      } else {
                        handleDeleteProjects(projectFields[index].value);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="profile-section-form-button">
              {projectFields.length < 6 && (
                <button
                  type="button"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                  onClick={() => appendProject({ value: "" })}
                >
                  Add Project Url
                </button>
              )}
              {projectFields.length > 0 && (
                <button
                  type="submit"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      <section className="profile-section-2">
        <form onSubmit={submitSkills(onSkillsSubmit)}>
          <div className="profile-section-2-head">
            <p className="p-text-3">Skills & Areas of Interest</p>
            {skillFields.length < 12 && (
              <button
                type="button"
                className={`btn-add ${tokenVerify === true ? "" : "c-not-allowed"}`}
                disabled={!tokenVerify}
                onClick={() => appendSkill({ value: "" })}
              >
                <img src={add} className="add-img" alt="add" />
              </button>
            )}
          </div>

          <div className="profile-section-2-body">
            {skillFields.length === 0 && (
              <p className="no-projects-message">
                Share your Skills and Area of Intrests
              </p>
            )}
            <div className="profile-section-form">
              {skillFields.map((field, index) => (
                <div key={field.id} className="profile-form-div">
                  <Controller
                    name={`skills.${index}.value`}
                    control={skillsControl}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="form-control"
                        disabled={!tokenVerify}
                        placeholder="Enter skill"
                      />
                    )}
                  />
                  {skillsErrors.skills?.[index]?.value && (
                    <p className="error-message">
                      {skillsErrors.skills[index].value.message}
                    </p>
                  )}
                  <button
                    type="button"
                    className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                    disabled={!tokenVerify}
                    onClick={() => {
                      if (!skillFields[index].value) {
                        removeSkill(index);
                        Notiflix.Notify.success("Skills and area of intrest Deleted Successfully");
                      } else {
                        handleDeleteSkills(skillFields[index].value);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="profile-section-form-button">
              {skillFields.length < 12 && (
                <button
                  type="button"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                  onClick={() => appendSkill({ value: "" })}
                >
                  Add Skills and Interests
                </button>
              )}
              {skillFields.length > 0 && (
                <button
                  type="submit"
                  className={`btn-delete ${tokenVerify === true ? "" : "c-not-allowed"}`}
                  disabled={!tokenVerify}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      <ProfileDetailsModal show={showModal} handleClose={handleClose} getAnyUsersData={getAnyUsersData} />
      <ProfileEmailVerifyModal show={verifyModal} handleClose={handleVerifyClose} />
    </div>
  );
};

export default Profile;