import { useState, useEffect, useRef } from "react";
import React from "react";
import SliderComp from "../components/SliderComp";
import { useNavigate } from "react-router-dom";
import "../Css/courses.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "../components/Rating";
function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [slider, setSlider] = useState(null);

  const navigate = useNavigate();
  // const handleInputChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);

  //   // Filter the courses based on the search query
  //   const filteredResults = CoursesInfo.filter((course) =>
  //     course.courseName.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setSearchResults(filteredResults);
  // };
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
       
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <ul style={{ listStyle: 'none', padding: '0px' }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div style={{ cursor: 'pointer', fontSize: '18px' }}>{i + 1}</div>
      ),
      beforeChange: (current, next) => setCurrentSlide(next),

    };
    const sliderRef = useRef(null);

  const goToSlide = (slideIndex) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };
  const goToPrevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };
  useEffect(() => {
    if (slider) {
      // You can access the slider methods here, e.g., slider.slickNext(), slider.slickPrev()
    }
  }, [slider]);
 
  return (
    <>
      <SliderComp />
      <div className="container text-center slider_box">
        <h2 className="h_home_box">شراء قسم </h2>
        <p className="p_home_box">
          {" "}
          في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية،
          ومعها
        </p>
        <button type="button" className="btn btn-light click_here_btn">
          اضغط هنا
        </button>
      </div>
      <div class="container courses_margin">
        <div class="row ">
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="navbar__search">
              <span>
                <i
                  class="fa-solid fa-magnifying-glass fa-sm"
                  style={{ color: "#833988" }}
                ></i>{" "}
              </span>
              <input
                type="text"
                placeholder="ابحث عن مادة"
                value={searchQuery}
                //   onChange={handleInputChange}
              />
              <a href="#" className="btn btn-s purple_btn search_btn">
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
          <div class="col-lg-3 col-md-4 col-sm-12">
            <select name="languages" id="lang" className="select_dep">
              <option value="javascript" className="specific_dep">JavaScript</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
            </select>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12"></div>
        </div>
      </div>

      <div class="slick-wrapper">
        <div class="container ">
          <div class="row justify-content-center align-items-center">
            <Slider {...settings} ref={(slider) => setSlider(slider)} >
        
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div> <div className="col-lg-4 col-md-12 col-sm-12 ">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div class="card card_cont">
                  <img
                    src={require("../assets/course.png")}
                    class="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div class="card-body">
                    <div>
                      {/* rating here */}
                      <p class="card-text card_dep">مكثفات جيل 2006</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                      <p className="course_title_card">الحاسوب</p>{" "}
                    </div>
                    <hr style={{marginTop:"1px"}}/>
                    <div className="d-flex justify-content-between">
                      <p className="details_courses_card"> 2:33:32</p>
                      <i
                        class="fa-solid fa-clock card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 200طالب </p>
                      <i
                        class="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                      <p className="details_courses_card"> 20درس</p>
                      <i
                        class="fa-solid fa-file card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div
              className="col-md-12 col-sm-12 col_btn_prevNext"
              style={{ marginTop: "10px" }}
            >
              <button
                onClick={goToNextSlide}
                className="btn mb-3  "
              >
                {" "}
                <i className="fa fa-arrow-right"></i>
              </button>
              <button
                onClick={goToPrevSlide}
                className="btn  mb-3  "
              >
                {" "}
                <i className="fa fa-arrow-left" ></i>
              </button>
            </div>
            {/* <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>
        Current Slide: {currentSlide + 1}
      </div> */}
       <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>
        {/* Previous Slide Number */}
        {currentSlide > 0 && (
          <span style={{ cursor: 'pointer' }} onClick={() => goToSlide(currentSlide - 1)}>
            {currentSlide}
          </span>
        )}
        {' '}
        {/* Current Slide Number */}
        <span style={{ fontWeight: 'bold' }}>{currentSlide + 1}</span>
        {' '}
        {/* Next Slide Number */}
        {currentSlide < 3 && ( // Replace `3` with the total number of slides minus one
          <span style={{ cursor: 'pointer' }} onClick={() => goToSlide(currentSlide + 1)}>
            {currentSlide + 2}
          </span>
        )}
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
