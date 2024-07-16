import React from "react";
import "../Css/auth.css";
function SignUp() {
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
                  <button type="button" className="btn auth_btn">
                    تسجيل الدخول
                  </button>
                  <p className="have_account_auth">
                    لديك حساب قم بتسجيل الدخول{" "}
                    <span className="have_account_here_auth">من هنا</span>{" "}
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 cont_input_auth ">
                <div className="row m-5">

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">الاسم</p>
                  <input
                    type="text"
                    className="search_blog"
                    //   onChange={handleInputChange}
                  /> 
                
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="title_of_input_auth">البريد الالكتروني</p>
                  <input
                    type="text"
                    className="search_blog"
                    //   onChange={handleInputChange}
                  /> 
                 
                </div>
                </div>
<div className="row m-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="title_of_input_auth">كلمة المرور</p><input
                  type="text"
                  className="search_blog"
                  //   onChange={handleInputChange}
                />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <p className="title_of_input_auth">نأكيد كلمة المرور   </p><input
                  type="text"
                  className="search_blog"
                  //   onChange={handleInputChange}
                />
                </div>
              </div>
              <button type="button" className="btn purple_btn mb-2 px-5">التسحيل </button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
