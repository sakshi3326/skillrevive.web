import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import Lottie from "react-lottie";
import * as welcomeanimation from "../../lottie/login.json";
import { useFormik } from "formik"; // Formik import kiya gaya hai
import * as Yup from "yup"; // Yup import kiya gaya hai
import "./login.css";
import { NavLink, Navigate } from "react-router-dom";
import {
  firebaseAuth,
  signInWithGoogle,
  loginWithEmailAndPassword,
  sendPasswordReset,
} from "../../pages/authenticated/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, loading, error] = useAuthState(firebaseAuth);
  //  console.log (user)

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
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      //handle firebase login with email and password
      const { email, password } = values;
      loginWithEmailAndPassword(email, password);
    },
  });

  //handle password reset

  const handleForgotPassword = async () => {
    try {
      await sendPasswordReset(formik.values.email); // Send password reset email
      alert("Password reset email sent successfully. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(
        "An error occurred while sending the password reset email. Please try again."
      );
    }
  };

  //firebase login navigation
  useEffect(() => {
    if (loading) return;
    if (user) {
      console.log(user);
    }
  }, [user, loading]);

  if (user) {
    return <Navigate to="/" />;
  }

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
                style={{ backgroundColor: "#feffdd" }}
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
                style={{ backgroundColor: "#feffdd" }}
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
                <a
                  href="#"
                  onClick={handleForgotPassword}
                  className="forgot-pass-link"
                >
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button" onClick={signInWithGoogle}>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
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
