import axios from "axios";
import { API } from "../Api";
import Cookies from "js-cookie";

var mobile = Cookies.get("mobile");
var bearerToken = Cookies.get("token");

export const CheckUserExistance = async (formData) => {
  try {
    const postData = {
      mobile: formData.mobile,
      email: formData.email,
    };

    const response = await axios.post(
      `${API.url}user/check-user-existence`,
      postData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userRegistration = async (userData) => {
  try {
    const postData = {
      user_name: userData.user_name,
      mobile: userData.mobile,
      password: userData.password,
      email: userData.email,
    };

    const response = await axios.post(`${API.url}user/register`, postData);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (userData) => {
  try {
    const postData = {
      mobile: userData.mobile,
      password: userData.password,
    };

    const response = await axios.post(`${API.url}user/login`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SendOtp = async (formData) => {
  try {
    const dataToSend = {
      email: formData.email,
    };
    const response = await axios.post(`${API.url}user/get-otp`, dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CheckToken = async () => {
  const postData = {
    mobile: mobile,
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  try {
    const response = await axios.post(
      `${API.url}user/token-check`,
      postData,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
