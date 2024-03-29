const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  UPDATE_PASSPORT_PIC: BASE_URL + "/profile/updatePassportPic",
  UPDATE_DRIVING_PIC: BASE_URL + "/profile/updateDrivingCard",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_SCORE : BASE_URL + "/profile/updateScore" ,
  GENERATE_LICENCE: BASE_URL + "/profile/generateLincence"

 
}




