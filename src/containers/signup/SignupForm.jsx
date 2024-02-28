import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for form validation
import Image from "../../assets/welcome.png";
import Logo from "../../assets/logo.png";
import './signup.css';
import GoogleSvg from "../../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);

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
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {/* <div className="login-logo">
            <img src={Logo} alt="" />
          </div> */}
          <div className="login-center">
            <h2>Welcome !</h2>
            <p>Please Register Yourself</p>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="userName" // Add a name attribute for formik
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="error">{formik.errors.userName}</div>
              ) : null}
              <input
                type="email"
                placeholder="Email"
                name="email" // Add a name attribute for formik
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password" // Add a name attribute for formik
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <div className="login-center-buttons">
                <button type="submit">SignUp</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

