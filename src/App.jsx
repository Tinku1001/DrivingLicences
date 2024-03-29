import { useEffect } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import Exam from "./components/core/Dashboard/Exam"
import Print from "./components/core/Dashboard/Print"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import { getUserDetails } from "./services/operations/profileAPI"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={ <Login /> }/>
        <Route path="signup" element={ <Signup /> } />
        <Route path="verify-email" element={  <VerifyEmail /> } />
        
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
        
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route path="dashboard/Exam" element={<Exam />} />
          <Route path="dashboard/Print" element={<Print />} />
          


        </Route>

       

      </Routes>
    </div>
  )
}

export default App
