import Axios from "axios";

const USER_URL = import.meta.env.VITE_BACKEND_URL;

export const signInUser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/user/signin`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
};

// ===========================  SIGNUP  ============================
export const signUpUser = async ({ email, password, firstName, lastName }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/user/signup`, {
      email,
      password,
      firstName,
      lastName,
    });
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
};

// ==================================  SEND VERIFY EMAIL ==============================

export const sendVerifyEmail = async ({ email }) => {
  try {
    const { data } = await Axios.post(
      `${USER_URL}/user/send-verification-mail`,
      {
        email,
      }
    );
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
};

// ================================= VERIFY MAIL SUCCESS ==============================

export const verifyEmailSuccess = async ({ token }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/user/verfiy-user-mail`, {
      token,
    });
    console.log(token);
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
};


// ==================================  FORGOT PASSWORD  ===========================

export const sendForgotMail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/user/forgot-password`, {
      email,
    });
    console.log(token);
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    throw new Error(errorMessage);
  }
};

// ================================== FORGOT PASSWORD SUCCESS ===============================

