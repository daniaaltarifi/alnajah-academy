import React, { useState } from "react";
import "../Css/blogs.css";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "كيف تختار اللابتوب المناسب",
      description:
        "مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع المواضيع التي يغطيها هذا التخصص من تاريخ الحوسبة وتطورها إلى مفاهيم البرمجة والتصميم الحاسوبي وهندسة البرمجيات والشبكات والأمان السيبراني.",
      teacher: "عبدالعزيز الجمال",
      dep: "الحاسوب",
      date: "20.5.2024",
    },
    {
      id: 2,
      title: "التعليم العلمي عن التكنولوجيا",
      description:
        "التكنولوجيا هي علومة تتمثل في تحويل المعلومات والتعليمات من المكان الأصلى إلى المكان النهائي، مثل الكمبيوترات والأجهزة اللوجية والويب. التكنولوجيا تتيح للمعلمين والطلاب التعليم في تحويل المعلومات والتعليمات من مكان الأصلى إلى المكان النهائ",
      teacher: "عبدالعزيز الجمال",
      dep: "الحاسوب",
      date: "20.5.2024",
    },
    {
      id: 3,
      title: "التعليم العلمي عن التكنولوجيا",
      description:
        "التكنولوجيا هي علومة تتمثل في تحويل المعلومات والتعليمات من المكان الأصلى إلى المكان النهائي، مثل الكمبيوترات والأجهزة اللوجية والويب. التكنولوجيا تتيح للمعلمين والطلاب التعليم في تحويل المعلومات والتعليمات من مكان الأصلى إلى المكان النهائ",
      teacher: "عبدالعزيز الجمال",
      dep: "الحاسوب",
      date: "20.5.2024",
    },
    {
      id: 4,
      title: "التعليم العلمي عن التكنولوجيا",
      description:
        "التكنولوجيا هي علومة تتمثل في تحويل المعلومات والتعليمات من المكان الأصلى إلى المكان النهائي، مثل الكمبيوترات والأجهزة اللوجية والويب. التكنولوجيا تتيح للمعلمين والطلاب التعليم في تحويل المعلومات والتعليمات من مكان الأصلى إلى المكان النهائ",
      teacher: "عبدالعزيز الجمال",
      dep: "الحاسوب",
      date: "20.5.2024",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = Math.ceil(blogs.length / 3);

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Calculate which blogs to display based on current slide index
  const startIndex = currentSlideIndex * 3;
  const endIndex = startIndex + 3;
  const visibleblogs = blogs.slice(startIndex, endIndex);

  // Adjust the visible blogs to ensure exactly three are displayed
  while (visibleblogs.length < 3) {
    visibleblogs.push(null); // Replace null with any default data or empty placeholder
  }
  // const handleInputChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);

  //   // Filter the courses based on the search query
  //   const filteredResults = CoursesInfo.filter((course) =>
  //     course.courseName.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setSearchResults(filteredResults);
  // };

  return (
    <>
      {/* header */}
      <div className="header_blog">
        <p className="title_header_blog">المدونة</p>
        <div className="paragraph_cont">
          <p className="paragraph_header_blog">
            في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية،
            ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام التعليمي
            التقليدي.{" "}
          </p>
        </div>
      </div>
      {/* End header */}
      <section className="margin_section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-sm-12 col_blog">
              {/* search */}
              <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <h1 className="title_blog">جميع المقالات</h1>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="navbar__search">
                    <span>
                      <i
                        className="fa-solid fa-magnifying-glass fa-sm"
                        style={{ color: "#833988" }}
                      ></i>{" "}
                    </span>
                    <input
                      type="text"
                      placeholder="ابحث عن موضوع"
                      value={searchQuery}
                      className="search_blog"
                      //   onChange={handleInputChange}
                    />
                    <a
                      href="#"
                      className="btn btn-s purple_btn search_btn_blog"
                    >
                      بحث{" "}
                    </a>
                    {searchQuery && (
                      <ul className="search_dropdown">
                        {searchResults.length > 0 ? (
                          searchResults.map((course) => (
                            <li
                              key={course.id}
                              onClick={() => {
                                navigate(`/courses/${course.id}`);
                                console.log(course.id);
                                // window.location.reload()
                                window.scrollTo(0, 0);
                              }}
                            >
                              <img src={course.image} alt={course.courseName} />
                              {course.courseName}
                            </li>
                          ))
                        ) : (
                          <li>No courses found.</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {/* End search */}
              <section className="margin_section">
                {visibleblogs.map((blogs, index) => (
                  <div>
                    {blogs ? (
                      <div className="card mb-3 card_cont_blog" key={index}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={require("../assets/blog.jpg")}
                              className="img-fluid img_blog"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <div className="cont_info_blog">
                                <div>
                                  <p className="card-title blog_title ">
                                    {blogs.title}
                                  </p>
                                  <small className="blog_dep">
                                    {blogs.dep}
                                  </small>
                                </div>
                                <div>
                                  <h5 className=" teacher_name_blog">
                                    {blogs.teacher}
                                  </h5>
                                  <div className="d-flex">
                                    <i
                                      class="fa-solid fa-clock card_icon ms-2"
                                      style={{ color: "#F57D20" }}
                                    ></i>
                                    <p className="details_courses_card ">
                                      {" "}
                                      2:33:32
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="card-text desc_blog">
                              {blogs.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`col-md-${
                          12 / visibleblogs.length
                        } col-sm-12`}
                      ></div>
                    )}
                  </div>
                ))}
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
              </section>
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
                <img src={require("../assets/blog.jpg")} alt="" className="img-fluid img_last_blog"/>
                <p className="desc_last_blog">كيف تختار كاميرا تصوير 
                مناسبة للمناسبتك</p>
              </div>
              <div className="categ_lastblog_cont">
                <img src={require("../assets/lastBlog.png")} alt="" className="img-fluid img_last_blog"/>
                <p className="desc_last_blog">كيف تختار كاميرا تصوير 
                مناسبة للمناسبتك</p>
                
              </div>
              <div className="categ_lastblog_cont">
                <img src={require("../assets/lastBlog.png")} alt="" className="img-fluid img_last_blog"/>
                <p className="desc_last_blog">كيف تختار كاميرا تصوير 
                مناسبة للمناسبتك</p>
              </div>
              <p className="categories_title">التاغات </p>
              <div className="tags_btn_cont">
              <button type="button" class="btn btn-outline-secondary mb-1">التسويق</button>
              <button type="button" class="btn btn-outline-secondary mb-1">التصميم</button>
              <button type="button" class="btn btn-outline-secondary mb-1 ">هندسة العمارة</button>
              <button type="button" class="btn btn-outline-secondary mb-1">الفن</button>
              <button type="button" class="btn btn-outline-secondary mb-1">علم الحاسوب</button>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
