import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../Common/ConfirmationModal"
import { RiHomeOfficeLine } from "react-icons/ri";
import { PiExamFill } from "react-icons/pi";
import { MdOutlineCreditScore } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";


export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />

        <div className="flex flex-col gap-4">
        <button
            onClick={() =>
             navigate("/")
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <RiHomeOfficeLine className="text-lg" />
              <span>Home</span>
            </div>
          </button>
        <button
            onClick={() =>
             navigate("/dashboard/my-profile")
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <MdDashboardCustomize  className="text-lg" />
              <span>Dashboard</span>
            </div>
          </button>

          <button
            onClick={() =>
             navigate("/dashboard/Exam")
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <PiExamFill  className="text-lg" />
              <span>Give Exam</span>
            </div>
          </button>

          <button
           onClick={() =>
            navigate("/dashboard/Exam")
           }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <MdOutlineCreditScore   className="text-lg" />
              <span>Test Score : {(user?.score) ? (user?.score) : "Give Exam" }</span>
            </div>
          </button>

          <button
            onClick={() =>
             navigate("/dashboard/Print")
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <FaDownload  className="text-lg" />
              <span>Print License</span>
            </div>
          </button>


          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
