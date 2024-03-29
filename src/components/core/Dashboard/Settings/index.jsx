import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import { useNavigate } from "react-router-dom"
import IconBtn from "../../../Common/IconBtn"
import ChangeDocument from "./ChangeDocument"
import ChangePassportPic from "./ChangePassportPic"
import { FaBackward } from "react-icons/fa";




export default function Settings() {
  const navigate = useNavigate()

  return (
    <>
    <div className="flex flex-row justify-between p-4">
    <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      <IconBtn
          text="Go Back To DashBoard"
          onclick={() => {
            navigate("/dashboard/my-profile")
          }}
        >
          <FaBackward />
          
        </IconBtn>
      

    </div>
     
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* upload photo */}
      <ChangePassportPic/>
      <ChangeDocument/>

      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
