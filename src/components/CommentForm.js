import React,{useState} from "react";
import "../Css/commentForm.css";
function CommentForm({title,btn_title,handleSubmit}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  // const [blog_id, setBlog_id] = useState(id);
  // let blog_id=id
// console.log("first",id)
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

 

  const handleSubmitForm = async (event) => {
    event.preventDefault(); 
    try {
      await handleSubmit(name, email, comment); 
   
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };
  return (
    <>
      <section className="margin_section">
        <div className="container ">
          <div className="row">
            {/* <div className="col-lg-5 col-md-6 col-sm-12">

            </div> */}
            <div className="col-lg-12 col-md-6 col-sm-12">
          <h2 className="leave_comment_title">{title}</h2>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_comment_form">الاسم</p>
                  <input
                    type="text"
                    className="comment_form_input"
                      onChange={handleNameChange}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_comment_form">البريد الالكنروني</p>
                  <input
                    type="email"
                    className="comment_form_input"
                      onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <p className="title_of_comment_form">التعليق </p>
                  <input
                    type="textarea"
                    className="textarea_input_commentForm"
                      onChange={handleCommentChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                    <button onClick={handleSubmitForm}className="submit_button_commentForm">
                      {btn_title}
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
