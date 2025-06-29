import Notiflix from "notiflix";

let cancelController;

const url = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
    case "devel":
      // return "http://192.168.1.114:8080/api/v1";
      // return "http://192.168.1.116:3000/api/v1";
      return "https://api.skillonit.com/api/v1";
    default:
      // return "http://192.168.1.114:8080/api/v1";
      // return "http://192.168.1.116:3000/api/v1";
      return "https://api.skillonit.com/api/v1";
  }
})();

export const getRequest = async (endpoint, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "GET", isCancel);
};

export const putRequest = async (endpoint, body, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "PUT", body, isCancel);
};

export const postRequest = async (
  endpoint,
  body,
  isFormData = false,
  isCancel = false
) => {
  return makeRequest(`${url}/${endpoint}`, "POST", body, isCancel, isFormData);
};

export const deleteRequest = async (endpoint, body, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "DELETE", body, isCancel);
};

const makeRequest = async (
  endpoint,
  method,
  data,
  isCancel = false,
  isFormData = false
) => {
  let token = localStorage.getItem("token") || "";
  const headers = {
    Authorization: "Bearer " + token,
  };
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  const options = {
    method: method,
    headers: headers,
    body: data ? (isFormData ? data : JSON.stringify(data)) : undefined,
  };

  try {
    const response = await fetch(endpoint, options);
    return await handleResponse(response);
  } catch (error) {
    await handleErrors(error);
  }
};

const ErrorReload = (res) => {
  if (res !== undefined && window.location.pathname !== "/") {
    window.location.replace("/");
    localStorage.clear();
  }
};

const handleErrors = (error) => {
  if (error.name === "AbortError") {
    return; // Request was canceled, no need to handle error
  }

  if (error !== undefined) {
    if (
      error.message === "jwt expired" ||
      error.message === "Please authenticate" ||
      error.message === "jwt must be provided"
    ) {
      ErrorReload(error);
    } else if (error.status === 500) {
      // Handle other error cases accordingly
    } else if (error.status === 400) {
      // Handle other error cases accordingly
    } else if (error.status === 401) {
      // Handle other error cases accordingly
    } else if (error.status === 429) {
      // Handle other error cases accordingly
    } else {
      // Handle other error cases accordingly
    }
  }
};

const handleResponse = async (response) => {
  if (response) {
    const responseData = await response.json();

    if (responseData.expired && responseData.message === "Token expired, please log in again") {
      localStorage.removeItem("token");
      localStorage.setItem("isLoggedin", false);
      Notiflix.Notify.success("Your session has expired. Please log in again.");
      return responseData
    }

    return responseData;
  } else if (response.status === 401 || response.message === "jwt expired") {
    throw new Error("Unauthorized");
  } else if (response.status === 500) {
    if (
      response.message === "jwt expired" ||
      response.message === "Please authenticate"
    ) {
      localStorage.removeItem("token");
      Notiflix.Notify.info("Token expired, please log in again")
    } else {
      throw new Error("Server error");
    }
  } else {
    throw new Error("Unknown error occurred");
  }
};


export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = padZero(date.getMinutes());
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours}:${minutes} ${ampm}`;

  return `${month}-${day}-${year} ${strTime}`;
};

export default {
  getRequest,
  putRequest,
  postRequest,
  deleteRequest,
  formatDate,
};
