import React, { useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import Lottie from "react-lottie";
import * as welcomeanimation from "../../lottie/login.json";
import { useFormik } from "formik"; // Formik import kiya gaya hai
import * as Yup from "yup"; // Yup import kiya gaya hai
import "./login.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect,logout,user,isAuthenticated} = useAuth0();
  const [showPassword, setShowPassword] = useState(false);

  // Formik ka istemal karke form validation aur form state management kiya gaya hai
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or greater")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await loginWithRedirect({
          screen_hint: 'login',
          login_hint: values.email,
          password: values.password,
        });
      } catch (error) {
        console.error("Login error:", error.message);
      }
    },
  });

  return (
    <div className="login-main">
      <div className="login-left">
        {/* <img src={Image} alt="" /> */}
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: welcomeanimation.default,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {/* <div className="login-logo">
            <img src={Logo} alt="" />
          </div> */}
          <div className="login-center">
            <h2>Welcome Back !</h2>
            <p>Please Login Yourself</p>
            {/* Formik form */}
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email"></label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter valid email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{ backgroundColor: "#feffdd"}}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="required">{formik.errors.email}</div>
              ) : null}

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                style={{ backgroundColor: "#feffdd"}}

              />
              {formik.touched.password && formik.errors.password ? (
                <div className="required">{formik.errors.password}</div>
              ) : null}
              <br />
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button"  onClick={() => loginWithRedirect({ screen_hint: 'login', connection: 'google-oauth2' })}>
                  <img src={GoogleSvg} alt="" />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account?
            <NavLink to="/signup">
              <a href="#">Sign Up</a>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
