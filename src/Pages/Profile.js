import React from "react";

function Profile() {
  return (
    <>
      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <p className="profile_title">حسابي</p>
              <button className="img_profile">
                <img
                  src={require("../assets/profile.png")}
                  alt="profile img"
                  className="img-fluid "
                />
              </button>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
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
<button type="button" className="btn purple_btn mb-2 px-5">حفظ </button>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
