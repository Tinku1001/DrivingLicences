import loginImg from "../assets/login_women.jpg"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
    title="Join With us!"
    description1="Lets Drive to the very end."
    description2="Get you Driving Licencing ."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
