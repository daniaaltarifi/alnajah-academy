import React from "react";
import "../Css/auth.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-md-6 col-sm-12 box_purple_auth">
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
                  <button type="button" className="btn auth_btn">
                  إنشاء حساب
                  </button>
                
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 cont_input_auth ">
              <div className="row m-5">
                <p className="title_of_input_auth">البريد الالكتروني</p>
                <input
                  type="text"
                  className="search_blog"
                  //   onChange={handleInputChange}
                />
              </div>
              <div className="row m-5">
                <p className="title_of_input_auth">كلمة المرور</p>
                <input
                  type="text"
                  className="search_blog"
                  //   onChange={handleInputChange}
                />
                <Link to="" className="forget_pass_auth">نسيت كلمة المرور</Link>
              </div>
              <button type="button" className="btn purple_btn mb-2">تسحيل الدخول</button>

            </div>
            
            <div className="col-lg-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
