import React, { useEffect, useState } from "react";
import "../Css/blogDetails.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import CommentForm from "../components/CommentForm";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function BlogDetails() {
  const [blogDetails, setBlogDetails] = useState(null);
  const [lastThreeBlogs, setLastThreeBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [commentBlogs, setCommentBlogs] = useState([]);
 

  const { id } = useParams();
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blog/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlogDetails(data);

        // Properly log the fetched data to see its structure
        console.log("Fetched Blog Details:", data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    const fetchLastThreeBlogs = async () => {
      const response = await axios.get("http://localhost:8080/blog/lastthree");
      setLastThreeBlogs(response.data);
    };
    const fetchTags = async () => {
      const response = await axios.get("http://localhost:8080/tag");
      setTags(response.data);
    };
    const fetchCommentBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/commentblog`);
        const comments = response.data;
const approvedComments=comments.filter(comment=>comment.action ==='approved')
        setCommentBlogs(approvedComments);
        console.log("Approved comments:", approvedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchBlogDetails();
    fetchLastThreeBlogs();
    fetchTags();
    fetchCommentBlogs();
  }, [id]);
  const [comments] = useState([
    {
      teacher_name: "عبد العزيز الجمال",
      comment_date: "14/7/2024",
      desc_of_teacher:
        "شخص متخصص وملم بمفاهيم علم الحاسوب وتطبيقاته المختلفة. يمتلك الأستاذ خبرة عميقة في المجال وقدرة على نقل المعرفة وتوجيه الطلاب بشكل فعال",
    },
    {
      teacher_name: "محمد أحمد",
      comment_date: "12/7/2024",
      desc_of_teacher:
        "أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!",
    },
    {
      teacher_name: "kkkkk أحمد",
      comment_date: "12/7/2024",
      desc_of_teacher:
        "أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!",
    },
    {
      teacher_name: "ADFD أحمد",
      comment_date: "12/7/2024",
      desc_of_teacher:
        "أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!",
    },
    {
      teacher_name: "محمد SDFDSF",
      comment_date: "12/7/2024",
      desc_of_teacher:
        "أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!",
    },
    {
      teacher_name: "EWTRETG SDFDSF",
      comment_date: "12/7/2024",
      desc_of_teacher:
        "أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!",
    },
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = Math.ceil(comments.length / 3);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  // Calculate which comments to display based on current slide index
  const startIndex = currentSlideIndex * 3;
  const endIndex = startIndex + 3;
  const visibleComments = comments.slice(startIndex, endIndex);

  // Adjust the visible comments to ensure exactly three are displayed
  while (visibleComments.length < 3) {
    visibleComments.push(null); // Add placeholders if there are fewer than three comments
  }
  const handleSubmit = async (name,email,comment) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/commentblog/add",
        {name: name, email:email, comment:comment,blog_id: id // Assuming `id` is the correct identifier for `blog_id`
        }
      );
      console.log("res", response.data);
   window.location.reload();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  
  return (
    <>
      {/* header of course details */}
      {blogDetails && (
        <div>
          <div className="container text-center cont_course_details">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 cl-sm-12 d-flex justify-content-center">
                <img
                  src={`http://localhost:8080/${blogDetails[0].img}`}
                  alt="coursedetails"
                  className="img-fluid img_blogdetails"
                />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12  justify-content-center align-items-center">
                <div className="d-flex justify-content-evenly ">
                  <p className="title_blogdetails">
                    {blogDetails[0].department_name}
                  </p>
                  <p className="teacher_coursedetails ms-5">
                    {blogDetails[0].author}{" "}
                  </p>
                  <i
                    className="fa-solid fa-clock card_icon "
                    style={{ color: "#F57D20" }}
                  ></i>
                  <p className="date_blogdetails">
                    {" "}
                    {blogDetails[0].created_date}
                  </p>
                </div>
                <h1 className="title_coursedetails">{blogDetails[0].title}</h1>
              </div>
            </div>
          </div>
          {/* End header of course details */}
          <section className="margin_section">
            <div className="container ">
              <div className="row ">
                <div className="col-lg-8 col-md-12 col-sm-12 cont_blogdetails">
                  <p className="desc_blogdetails">{blogDetails[0].descr}</p>

                  <div className="tags_btn_blogdetails_cont">
                    <p className="categories_title">التاغات </p>
                    {tags.map((tag) => (
                      <button
                        type="button"
                        className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                      >
                        {tag.title}
                      </button>
                    ))}
                  </div>
                  <div className="share_blogdetails_cont ">
                    <div>
                      <p className="categories_title">مشاركة: </p>
                    </div>

                    <div className="social_blogdetails">
                      <FaFacebookF className="social_icon_blogdetails" />
                      <FaPinterestP className="social_icon_blogdetails" />
                      <FaYoutube className="social_icon_blogdetails" />
                      <FaInstagramSquare className="social_icon_blogdetails" />
                      <BsTwitterX className="social_icon_blogdetails" />
                    </div>
                  </div>
                  <div className="container slider_blogdetails">
                    <div className="slider">
                      <div className="slider-content">
                        {commentBlogs.map((comment, index) => (
                          <div className="slider-item" key={index}>
                            {comment && (
                              <div className="row mb-2">
                                <div className="col-lg-1 col-md-2 col-sm-12">
                                  <img
                                    src={require("../assets/acc_icon.png")}
                                    alt=""
                                    height={"70vh"}
                                    width={"70vh"}
                                    className="ps-3"
                                  />
                                </div>
                                <div className="col-lg-11 col-md-10 col-sm-12 ">
                                  <div className="d-flex justify-content-between">
                                    <p className="teacher_name_coursedetails">
                                      {comment.name}
                                    </p>
                                    <p className="comment_date_coursedetails">
                                      {comment.created_date}
                                    </p>
                                  </div>
                                  <p className="desc_of_teacher_coursedetails">
                                    {comment.comment}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <div
                      className="col-md-12 col-sm-12 col_btn_prevNext"
                      style={{ marginTop: "10px" }}
                    >
                      <button onClick={goToNextSlide} className="btn mb-3">
                        <i className="fa fa-arrow-right"></i>
                      </button>
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: "5px",
                          fontSize: "18px",
                        }}
                      >
                        {/* Displaying current slide number in bold */}
                        <span style={{ fontWeight: "bold" }}>
                          {currentSlideIndex + 1}
                        </span>{" "}
                        / {totalSlides}
                      </div>
                      <button onClick={goToPrevSlide} className="btn mb-3">
                        <i className="fa fa-arrow-left"></i>
                      </button>
                    </div>
                  </div>
                  <CommentForm
                    title="اترك تعليق"
                    btn_title="تعليق"
                    handleSubmit={handleSubmit}
                  />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 ">
                  {/* <p className="categories_title">الأصناف</p>
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div>{" "}
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div>{" "}
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div> */}
                  <p className="categories_title">المقالات الأخيرة</p>
                  {lastThreeBlogs.map((lastthreeblogs) => (
                    <Link
                      to={`/blogdetails/${lastthreeblogs.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <div className="categ_lastblog_cont">
                        <img
                          src={`http://localhost:8080/` + lastthreeblogs.img}
                          alt=""
                          className="img-fluid img_last_blog"
                        />
                        <p className="desc_last_blog">{lastthreeblogs.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default BlogDetails;
