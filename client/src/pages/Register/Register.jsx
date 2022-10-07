import React from "react";
import { useRef } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";
import "./Register.css";
const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const password_confirmation = useRef();
 const history = useNavigate();
  const handleClick = async (e)=>{
    e.preventDefault();
   
    if (password_confirmation.current.value != password.current.value) {
         
      password_confirmation.current.setCustomValidity("Password Not Matching")

    } else {
    try {
      const user ={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
        password_confirmation:password_confirmation.current.value
      }
     const res= await axios.post("http://localhost:5000/register",user);
     if(res.data.message == "success"){
        history("/login");
     }
    } catch (error) {
      console.log(error);
    }
    }

  }
  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">Tarek Social</h3>
            <span className="registerDesc">
              connect with friends and the world around you on tarekSocial
            </span>
          </div>
          <div className="registerRight">
            <form className="registerBox" onSubmit={handleClick}>
              <input placeholder="userName" ref={username} required className="registerInput" />
              <input placeholder="Email" ref={email} required type="email" className="registerInput" />
              <input placeholder="Password" ref={password} required type="password" className="registerInput" />
              <input placeholder="Confirm Password" ref={password_confirmation} required type="password" className="registerInput" />
              <button className="RegisterButton" type="submit"> Register Now </button>
              <button className="loginRegisterButton">
                
                Log Into Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
