import signupImg from "../assets/loginimage.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join With us!"
      description1="Lets Drive to the very end."
      description2="Get you Driving Licencing ."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
