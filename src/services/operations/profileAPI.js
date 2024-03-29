import { toast } from "react-hot-toast"
import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
    GET_USER_DETAILS_API,
    UPDATE_DISPLAY_PICTURE_API,
    UPDATE_PROFILE_API,
    DELETE_PROFILE_API,
    UPDATE_PASSPORT_PIC,
    UPDATE_DRIVING_PIC,
    UPDATE_SCORE,
    GENERATE_LICENCE
    
} = profileEndpoints;

export function getUserDetails(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("GET_USER_DETAILS API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.data.image
          ? response.data.data.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
        dispatch(setUser({ ...response.data.data, image: userImage }))
      } catch (error) {
        dispatch(logout(navigate))
        console.log("GET_USER_DETAILS API ERROR............", error)
        toast.error("Could Not Get User Details")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }


  export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector(
          "POST",
          UPDATE_DISPLAY_PICTURE_API,
          formData,
          {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
        )
        console.log(
          "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
          response
        )
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Display Picture Updated Successfully")
        dispatch(setUser(response.data.data))
      } catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function updateProfile(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, 
        {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
          )
        console.log("UPDATE_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
        toast.success("Profile Updated Successfully")
      } catch (error) {
        console.log("UPDATE_PROFILE_API API ERROR............", error)
        toast.error("Could Not Update Profile")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function updatePassportPic(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_PASSPORT_PIC, formData, 
        {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
          )
        console.log("UPDATE_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
        toast.success("Profile Updated Successfully")
      } catch (error) {
        console.log("UPDATE_Passportpic_API API ERROR............", error)
        toast.error("Could Not Update Profile")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function updateDrivingPic(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_DRIVING_PIC, formData, 
        {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
          )
        console.log("UPDATE_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(
          setUser({ ...response.data.updatedUserDetails, image: userImage })
        )
        toast.success("Profile Updated Successfully");
      } catch (error) {
        console.log("UPDATE_Passportpic_API API ERROR............", error)
        toast.error("Could Not Update Profile")
      }
      toast.dismiss(toastId)
    }
  }
  
  
  export function deleteProfile(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("DELETE_PROFILE_API API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Profile Deleted Successfully")
        dispatch(logout(navigate))
      } catch (error) {
        console.log("DELETE_PROFILE_API API ERROR............", error)
        toast.error("Could Not Delete Profile")
      }
      toast.dismiss(toastId)
    }
  }


  export function updateScore(token, score) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector(
          "PUT",
          UPDATE_SCORE,
          score,
          {
            Authorization: `Bearer ${token}`,
          }
        )
        console.log(
          " UPDATE_SCORE API RESPONSE............",
          response
        )
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Score Updated Successfully")
        dispatch(setUser(response.data.data));
      } catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")
      }
      toast.dismiss(toastId)
    }
  }
  
  export function generateLincence(token) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector(
          "PUT",
          GENERATE_LICENCE,
         {body : "heyy"},
          {
            Authorization: `Bearer ${token}`,
          }
        )
        console.log(
          " GENERATE_LICENCE API RESPONSE............",
          response
        )
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Licence generated Successfully")
        dispatch(setUser(response.data.data));
      } catch (error) {
        console.log("GENERATE_LICENCE API ERROR............", error)
        toast.error("Could Not generate liences")
      }
      toast.dismiss(toastId)
    }
  }
  
  

  

