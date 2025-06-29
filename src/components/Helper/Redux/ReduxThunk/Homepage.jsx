import { createSlice } from "@reduxjs/toolkit";
import * as apiHelper from "../../apiHelper";
const initialState = {
  RegistrationSuccess: [],
  CountryList: [],
};
const slice = createSlice({
  name: "homepage",
  initialState: initialState,

  reducers: {
    SubscribeFormSubmit: (state, action) => {
      state.SubscribeFormSubmit = action.payload;
    },
    GetallCourse: (state, action) => {
      state.GetallCourse = action.payload;
    },
  },
});
export default slice.reducer;

const {
  UserRegisterSubmit,
  UserLoginSubmit,
  UserOauthLogin,
  UserFrgtPass,
  UserOTPSubmit,
  UserResendOTPSubmit,
  UserRstPass,
  GetallCourse,
  GetSingleCourse,
  AddtoCardCourse,
  GetMyCart,
  CreateCourseOrderid,
  GetCurrentUserDetails,
  GetAnyUserDetails,
  UpdateCurrentUserDetails,
  UpdateCurrentUserProfile,
  UpdateEducation,
  DeleteEducation,
  UpdateProfessionalExp,
  DeleteProfessionalExp,
  UpdateProject,
  DeleteProject,
  UpdateSkills,
  DeleteSkills,
  ConfirmPurchase,
  ContactUs,
  ApplyJob,
  Subscribe,
  GetAllBlogs,
  GetSingleBlog,
  GetAllBlogsCategory,
  GetCategoryBlogs,
  GetTokenVerify,
  GetAllKeySpeakers,
  GetAllWorkshops,
  GetGallery,
} = slice.actions;

export const UserRegisterSubmitApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/signup", data);
        callback(response);
        dispatch(UserRegisterSubmit(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserLoginSubmitApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/signin", data);
        callback(response);
        dispatch(UserLoginSubmit(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserOauthLoginApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/oauth", data);
        callback(response);
        dispatch(UserOauthLogin(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserFrgtPassApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(
          "user/forgot-password",
          data
        );
        callback(response);
        dispatch(UserFrgtPass(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserOTPSubmitApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/verify-otp", data);
        callback(response);
        dispatch(UserOTPSubmit(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserResendOTPSubmitApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/regenerateOTP", data);
        callback(response);
        dispatch(UserResendOTPSubmit(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UserRstPassApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest("user/reset-password", data);
        callback(response);
        dispatch(UserRstPass(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetCurrentUserDetailsApi =
  (callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`user/profile`);
        callback(response);
        dispatch(GetCurrentUserDetails(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetAnyUserDetailsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`user/userUNProfile?id=${data}`);
        callback(response);
        dispatch(GetAnyUserDetails(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateCurrentUserDetailsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.putRequest(`user/profile`, data, true);
        callback(response);
        dispatch(UpdateCurrentUserDetails(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateCurrentUserProfileApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/ProfileImageUpdate`, data, true);
        callback(response);
        dispatch(UpdateCurrentUserProfile(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateEducationApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/educationalQualification`, data);
        callback(response);
        dispatch(UpdateEducation(response));
        if (response) {
        }
      } catch (e) { }
    };

export const DeleteEducationApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/deleteEducationalQualification`, data);
        callback(response);
        dispatch(DeleteEducation(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateProfessionalExpApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/professionalExperience`, data);
        callback(response);
        dispatch(UpdateProfessionalExp(response));
        if (response) {
        }
      } catch (e) { }
    };

export const DeleteProfessionalExpApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/deleteprofessionalExperience`, data);
        callback(response);
        dispatch(DeleteProfessionalExp(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateProjectApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/Projects`, data);
        callback(response);
        dispatch(UpdateProject(response));
        if (response) {
        }
      } catch (e) { }
    };

export const DeleteProjectApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/deleteProjects`, data);
        callback(response);
        dispatch(DeleteProject(response));
        if (response) {
        }
      } catch (e) { }
    };

export const UpdateSkillsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/skillsAreasOfInterest`, data);
        callback(response);
        dispatch(UpdateSkills(response));
        if (response) {
        }
      } catch (e) { }
    };

export const DeleteSkillsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/deleteskillsAreasOfInterest`, data);
        callback(response);
        dispatch(DeleteSkills(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetallCourseApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      let page = data.page || 1;
      let limit = data.limit || 11;
      try {
        const response = await apiHelper.getRequest(
          `course?page=${page}&limit=${limit}`
        );
        callback(response);
        dispatch(GetallCourse(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetSingleCourseApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`course/${data}`);
        callback(response);
        dispatch(GetSingleCourse(response));
        if (response) {
        }
      } catch (e) { }
    };

export const AddtoCardCourseApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/cart`, data);
        callback(response);
        dispatch(AddtoCardCourse(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetMyCartApi =
  (callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`course/cart`);
        callback(response);
        dispatch(GetMyCart(response));
        if (response) {
        }
      } catch (e) { }
    };

export const CreateCourseOrderidApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/purchase`, data);
        callback(response);
        dispatch(CreateCourseOrderid(response));
        if (response) {
        }
      } catch (e) { }
    };

export const ConfirmPurchaseApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(
          `course/confirm-purchase`,
          data
        );
        callback(response);
        dispatch(ConfirmPurchase(response));
        if (response) {
        }
      } catch (e) { }
    };

export const ContactUsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/contact-us`, data);
        callback(response);
        dispatch(ContactUs(response));
        if (response) {
        }
      } catch (e) { }
    };

export const ApplyJobApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/job-form`, data, true);
        callback(response);
        dispatch(ApplyJob(response));
        if (response) {
        }
      } catch (e) { }
    };

export const SubscribeApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/SubscribeUs`, data);
        callback(response);
        dispatch(Subscribe(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetAllBlogsApi =
  (callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`course/getBlogs`);
        callback(response);
        dispatch(GetAllBlogs(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetSingleBlogApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/getSingleBlogs`, data);
        callback(response);
        dispatch(GetSingleBlog(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetAllBlogsCategoryApi =
  (callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`course/getBlogCat`);
        callback(response);
        dispatch(GetAllBlogsCategory(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetCategoryBlogsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/getBlogsCategory`, data);
        callback(response);
        dispatch(GetCategoryBlogs(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetTokenVerifyApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/verifyToken`, data);
        callback(response);
        dispatch(GetTokenVerify(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetAllKeySpeakersApi =
  (callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.getRequest(`course/getKeySpeakers`);
        callback(response);
        dispatch(GetAllKeySpeakers(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetAllWorkshopsApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/getEvents`, data);
        callback(response);
        dispatch(GetAllWorkshops(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetGalleryApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/getEventsImage`, data);
        callback(response);
        dispatch(GetGallery(response));
        if (response) {
        }
      } catch (e) { }
    };

export const GetSingleWorkshopApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/getSingleEvent`, data);
        callback(response);
        dispatch(GetGallery(response));
        if (response) {
        }
      } catch (e) { }
    };

export const EventRegisterFormApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`course/createEventForm`, data);
        callback(response);
        dispatch(GetGallery(response));
        if (response) {
        }
      } catch (e) { }
    };

export const PopupFormApi =
  (data, callback = () => { }) =>
    async (dispatch) => {
      try {
        const response = await apiHelper.postRequest(`user/popupForm`, data);
        callback(response);
        dispatch(UpdateProfessionalExp(response));
        if (response) {
        }
      } catch (e) { }
    };