import React from "react";
import "../Css/commentForm.css";
function CommentForm() {
  return (
    <>
      <section className="margin_section">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="leave_comment_title">أترك تعليق</h2>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_comment_form">الاسم</p>
                  <input
                    type="text"
                    className="comment_form_input"
                    //   onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_comment_form">البريد الالكنروني</p>
                  <input
                    type="email"
                    className="comment_form_input"
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <p className="title_of_comment_form">التعليق </p>
                  <input
                    type="textarea"
                    className="textarea_input_commentForm"
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                    <button type="submit" className="submit_button_commentForm">
                      تعليق
                    </button>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentForm;
