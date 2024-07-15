import React,{useState} from "react";
import "../Css/blogDetails.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import CommentForm from '../components/CommentForm'
function BlogDetails() {
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
  return (
    <>
      {/* header of course details */}
      <div className="container text-center cont_course_details">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 cl-sm-12 d-flex justify-content-center">
            <img
              src={require("../assets/blog.jpg")}
              alt="coursedetails"
              className="img-fluid img_blogdetails"
            />{" "}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  justify-content-center align-items-center">
            <div className="d-flex justify-content-evenly ">
              <p className="title_blogdetails">مكثفات جيل 2006</p>
              <p className="teacher_coursedetails ms-5">عبد العزيز الجمال</p>
              <i
                className="fa-solid fa-clock card_icon "
                style={{ color: "#F57D20" }}
              ></i>
              <p className="date_blogdetails"> 24/7/2024</p>
            </div>
            <h1 className="title_coursedetails">كيف تختار اللابتوب المناسب</h1>
          </div>
        </div>
      </div>
      {/* End header of course details */}
      <section className="margin_section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-sm-12 cont_blogdetails">
              <p className="desc_blogdetails">
                مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب وفهم كيفية
                عملها واستخدامها بشكل فعّال. تتنوع المواضيع التي يغطيها هذا
                التخصص من تاريخ الحوسبة وتطورها إلى مفاهيم البرمجة والتصميم
                الحاسوبي وهندسة البرمجيات والشبكات والأمان السيبراني. يمكن لطلاب
                مادة الحاسوب أن يتعلموا العديد من المفاهيم الأساسية مثل البرمجة
                بلغات مختلفة مثل C++، Python، Java، وغيرها، بالإضافة إلى مفاهيم
                الهندسة البرمجية التي تشمل تطوير البرمجيات وإدارة المشاريع
                البرمجية. كما يتعلم الطلاب عادةً عن بنية الحواسيب وكيفية عملها،
                ويمكنهم أيضًا التخصص في مجالات مثل الذكاء الاصطناعي، وتعلم
                الآلة، والروبوتيات، والواقع الافتراضي، وغيرها من التطبيقات
                التكنولوجية الحديثة. تعتبر مادة الحاسوب مجالًا ديناميكيًا
                ومتطورًا يتطلب التحديث المستمر ومواكبة التطورات التكنولوجية
                الجديدة، وتقديم حلول مبتكرة للتحديات التي تواجه العالم الرقمي
                المعاصر. مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب
                وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع المواضيع التي
                يغطيها هذا التخصص من تاريخ الحوسبة وتطورها إلى مفاهيم البرمجة
                والتصميم الحاسوبي وهندسة البرمجيات والشبكات والأمان السيبراني.
                يمكن لطلاب مادة الحاسوب أن يتعلموا العديد من المفاهيم الأساسية
                مثل البرمجة بلغات مختلفة مثل C++، Python، Java، وغيرها، بالإضافة
                إلى مفاهيم الهندسة البرمجية التي تشمل تطوير البرمجيات وإدارة
                المشاريع البرمجية. كما يتعلم الطلاب عادةً عن بنية الحواسيب
                وكيفية عملها، ويمكنهم أيضًا التخصص في مجالات مثل الذكاء
                الاصطناعي، وتعلم الآلة، والروبوتيات، والواقع الافتراضي، وغيرها
                من التطبيقات التكنولوجية الحديثة. تعتبر مادة الحاسوب مجالًا
                ديناميكيًا ومتطورًا يتطلب التحديث المستمر ومواكبة التطورات
                التكنولوجية الجديدة، وتقديم حلول مبتكرة للتحديات التي تواجه
                العالم الرقمي المعاصر. مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل
                مع الحواسيب وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع
                المواضيع التي يغطيها هذا التخصص من تاريخ الحوسبة وتطورها إلى
                مفاهيم البرمجة والتصميم الحاسوبي وهندسة البرمجيات والشبكات
                والأمان السيبراني. يمكن لطلاب مادة الحاسوب أن يتعلموا العديد من
                المفاهيم الأساسية مثل البرمجة بلغات مختلفة مثل C++، Python،
                Java، وغيرها، بالإضافة إلى مفاهيم الهندسة البرمجية التي تشمل
                تطوير البرمجيات وإدارة المشاريع البرمجية. كما يتعلم الطلاب عادةً
                عن بنية الحواسيب وكيفية عملها، ويمكنهم أيضًا التخصص في مجالات
                مثل الذكاء الاصطناعي، وتعلم الآلة، والروبوتيات، والواقع
                الافتراضي، وغيرها من التطبيقات التكنولوجية الحديثة. تعتبر مادة
                الحاسوب مجالًا ديناميكيًا ومتطورًا يتطلب التحديث المستمر ومواكبة
                التطورات التكنولوجية الجديدة، وتقديم حلول مبتكرة للتحديات التي
                تواجه العالم الرقمي المعاصر.
              </p>
              <div className="tags_btn_blogdetails_cont">
                <p className="categories_title">التاغات </p>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                >
                  التسويق
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                >
                  التصميم
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                >
                  هندسة العمارة
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                >
                  الفن
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mb-1 tags_btn_blogdetails"
                >
                  علم الحاسوب
                </button>
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
                        {visibleComments.map((comment, index) => (
                          <div className="slider-item" key={index}>
                            {comment && (
                              <div className="row mb-2">
                                <div className="col-lg-2 col-md-3 col-sm-12">
                                  <img
                                    src={require("../assets/account.png")}
                                    alt=""
                                    height={"70vh"}
                                    width={"70vh"}
                                  />
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-12">
                                  <div className="d-flex justify-content-between">
                                    <p className="teacher_name_coursedetails">
                                      {comment.teacher_name}
                                    </p>
                                    <p className="comment_date_coursedetails">
                                      {comment.comment_date}
                                    </p>
                                  </div>
                                  <p className="desc_of_teacher_coursedetails">
                                    {comment.desc_of_teacher}
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
      <CommentForm/>
           
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 ">
              <p className="categories_title">الأصناف</p>
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
              </div>
              <p className="categories_title">المقالات الأخيرة</p>
              <div className="categ_lastblog_cont">
                <img
                  src={require("../assets/blog.jpg")}
                  alt=""
                  className="img-fluid img_last_blog"
                />
                <p className="desc_last_blog">
                  كيف تختار كاميرا تصوير مناسبة للمناسبتك
                </p>
              </div>
              <div className="categ_lastblog_cont">
                <img
                  src={require("../assets/lastBlog.png")}
                  alt=""
                  className="img-fluid img_last_blog"
                />
                <p className="desc_last_blog">
                  كيف تختار كاميرا تصوير مناسبة للمناسبتك
                </p>
              </div>
              <div className="categ_lastblog_cont">
                <img
                  src={require("../assets/lastBlog.png")}
                  alt=""
                  className="img-fluid img_last_blog"
                />
                <p className="desc_last_blog">
                  كيف تختار كاميرا تصوير مناسبة للمناسبتك
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
