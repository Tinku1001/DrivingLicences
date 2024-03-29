// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import HighlightText from "../components/core/HomePage/HighlightText"


function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white ">
        {/* Become a Instructor Button */}
        <Link to={"/dashboard/my-profile"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Go To DashBoard</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Online Driving Assessment and 
          <HighlightText text={"Licencing System"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        Embark on a Revolutionary Driving Experience with Our Comprehensive Online Driving
         Assessment and Licensing System. Unleash the Future of Safe and Efficient Roads
          as We Redefine Mobility. Our Advanced Platform Ensures a Seamless Transition to
           Driving Excellence. Join the Evolution of Transportation with State-of-the-Art
            Assessments and Licensing. Elevate Your Driving Journey – Where Innovation Meets
             the Open Road!
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Signup
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Login
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <a
          href="https://portfolio-two-smoky-82.vercel.app/"  
          target="_blank"  
          rel="noopener noreferrer"
        >
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none  ">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Lets Chat (Go to my website)</p>
              <FaArrowRight />
            </div>
          </div>
        </a>

        

        
      </div>

      <div className="pt-4 w-full">
      <Footer />
      </div>

    
    </div>
  )
}

export default Home
