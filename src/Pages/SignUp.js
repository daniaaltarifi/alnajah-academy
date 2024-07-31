import React from "react";
import "../Css/auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // default role

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateName = (name) => {
    if (name.trim() === "") {
      setNameError("الرجاء أدخال الاسم !");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("الرجاء ادخال بريد الكتروني صحيح");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("الرجاء ادخال كلمة مرور قوية");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("كلمة المرور غير متطابقة");
      return;
    } else {
      setConfirmPasswordError("");
    }

    try {
      const res = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
        role,
        confirmPassword,
      });
      console.log(res.data);

      console.log("Registration successful");

      // Store authentication data in local storage
localStorage.setItem('auth',  res.data.token);
localStorage.setItem('name', name);
localStorage.setItem('id', res.data.id);
localStorage.setItem('img', res.data.img);
      window.location.href = "/"; // Redirect to home page after registration
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 box_purple_auth">
              <div className="">
                <div className="hello_logo_auth_cont">
                  <p className="hi_auth">مرحباً بك</p>
                  <img
                    src={require("../assets/ba9ma2.png")}
                    alt="ba9ma logo"
                    className="img-fluid logo_auth"
                  />
                </div>
                <div>
                  <Link to="/login">
                    <button type="button" className="btn auth_btn">
                      تسجيل الدخول
                    </button>
                  </Link>
                  <Link to="/login">
                    <p className="have_account_auth">
                      لديك حساب قم بتسجيل الدخول{" "}
                      <span className="have_account_here_auth">من هنا</span>{" "}
                    </p>
                  </Link>
                </div>
              </div>{" "}
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12 cont_input_auth ">
              <div className="row mx-5 mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">الاسم</p>
                  <input
                    type="text"
                    className={`search_blog ${nameError ? "error" : ""}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validateName(name)}
                  />
                  {nameError && <p className="error_message">{nameError}</p>}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">البريد الالكتروني</p>
                  <input
                    type="email"
                    className={`search_blog ${emailError ? "error" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => validateEmail(email)}
                  />
                  {emailError && (
                    <span className="error_message">{emailError}</span>
                  )}
                </div>
              </div>
              <div className="row m-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">كلمة المرور</p>
                  <input
                    type="password"
                    className={`search_blog ${passwordError ? "error" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => validatePassword(password)}
                  />
                  {passwordError && (
                    <p className="error_message">{passwordError}</p>
                  )}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <p className="title_of_input_auth">نأكيد كلمة المرور </p>

                  <input
                    type="password"
                    className={`search_blog ${
                      confirmPasswordError ? "error" : ""
                    }`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordError && (
                    <p className="error_message">{confirmPasswordError}</p>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                <select
                  className="select_role_auth"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">طالب </option>
                  <option value="teacher">معلم</option>
                </select>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRegister}
                className="btn purple_btn mb-2 px-5"
              >
                التسحيل{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
