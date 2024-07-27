import { useState, useEffect } from "react";
import React from "react";
import SliderComp from "../components/SliderComp";
import { useNavigate } from "react-router-dom";
import "../Css/courses.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MiniPopUpLogin from "../components/MiniPopUpLogin.js";
import MiniPopUpConfirm from "../components/MiniPopUpConfirm.js";
import axios from "axios";
function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([]);

  const title_popup = "تسجيل الدخول";
  const description_popup = "لشراء قسم يجب تسجيل الدخول";
  const title_popup_confirm=" تنبيه"
  const description_popup_confirm="تمت العملية ، طلبك قيد الأنتظار"
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cards = [
    { id: 1, content: 'مكثفات جيل 2006 1' },
    { id: 2, content: 'مكثفات جيل 2006 2' },
    { id: 3, content: 'مكثفات جيل 2006 3' },
    { id: 4, content: 'مكثفات جيل 2006 4' },
    { id: 5, content: 'مكثفات جيل 2006 5' },
    { id: 6, content: 'مكثفات جيل 2006 6' },
    { id: 7, content: 'مكثفات جيل 2006 7' },
    { id: 8, content: 'مكثفات جيل 2006 8' },
    { id: 9, content: 'مكثفات جيل 2006 9' },
    { id: 10, content: 'مكثفات جيل 2006 10' },
    { id: 11, content: 'مكثفات جيل 2006 11' },
    { id: 12, content: 'مكثفات جيل 2006 12' },
    { id: 13, content: 'مكثفات جيل 2006 13' },
    { id: 14, content: 'مكثفات جيل 2006 14' },
    { id: 15, content: 'مكثفات جيل 2006 15' },
    // Add more cards as needed
  ];

  const cardsPerSlide = 9; // Maximum cards per slide

  const numSlides = Math.ceil(cards.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
  };
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  const startIndex = currentSlide * cardsPerSlide;
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerSlide);
  const title = "ادرس اون لاين مواد المناهج الدراسية الأردنية";
  useEffect(()=>{
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses");
        // setCourses(response.data);
        setCourses(response.data.slice(startIndex, startIndex + cardsPerSlide));
   
        console.log("first",response.data);
      } catch (error) {}
    };
    fetchCourses();

  }, [cards, startIndex, cardsPerSlide])
  return (
    <>
      <SliderComp title={title}/>
      <div className="container text-center slider_box">
        <h2 className="h_home_box">شراء قسم </h2>
        <p className="p_home_box">
          في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية،
          ومعها
        </p>
        <button
          type="button"
          className="btn btn-light click_here_btn"
          onClick={handleShow}
        >
          اضغط هنا
        </button>
        {/* Modal */}
        <Modal show={show} onHide={handleClose} dir="rtl">
          <Modal.Title className="modal_title">شراء قسم</Modal.Title>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field ">اسم الطالب</Form.Label>
                <Form.Control type="text" className="input_filed_modal" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field text-center">
                  الأيميل{" "}
                </Form.Label>
                <Form.Control type="email" className="input_filed_modal" />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field text-center">
                  مكان السكن
                </Form.Label>
                <Form.Control type="text" className="input_filed_modal" />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field text-center">
                  رقم الهاتف{" "}
                </Form.Label>
                <Form.Control type="text" className="input_filed_modal" />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field text-center">
                  القسم{" "}
                </Form.Label>
                <select name="languages" id="lang" className="select_dep">
                  <option value="javascript" className="specific_dep">
                    JavaScript
                  </option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                </select>
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text_field text-center">
                  الكوبون{" "}
                </Form.Label>
                <Form.Control type="text" className="input_filed_modal" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
            <Button onClick={handleClose} className="buy_department_btn">
              شراء الآن{" "}
            </Button>
          </Modal.Footer>
        </Modal>
        {/*End Modal */}
      </div>
      <div className="container courses_margin">
        <div className="row ">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="navbar__search">
              <span>
                <i
                  className="fa-solid fa-magnifying-glass fa-sm"
                  style={{ color: "#833988" }}
                ></i>{" "}
              </span>
              <input
                type="text"
                placeholder="ابحث عن مادة"
                value={searchQuery}
                className="search_course"
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
          <div className="col-lg-3 col-md-4 col-sm-12">
            <select name="languages" id="lang" className="select_dep " >
            <option value="javascript" className="specific_dep">
                  مكثفات جيل 2006
                </option>
                <option value="php"> مكثفات جيل 2007</option>
                <option value="java"> مكثفات جيل 2008</option>  
            </select>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12"></div>
        </div>
      </div>

      <div className="slick-wrapper">
        <div className="container ">
          <div className="row justify-content-center align-items-center">
          {courses.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
                <Link to={`/coursedetails/${card.id}`} className="link_card">
                <div className="card card_cont"  >
                  <img
                    src={require("../assets/course.png")}
                    className="card-img-top img-fluid card_img"
                    alt="..."
                  />
                  <div className="card-body">
                    <div>
                      {/* rating here */}
                      <p className="card-text card_dep"> {card.department_name} </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="course_title_card">{card.subject_name}</p>{" "}
                      <p className=" teacher_name_card">{card.teacher_name}</p>
                    </div>
                    <hr style={{ marginTop: "1px" }} />
                    <div className="d-flex justify-content-between">
                        <i
                          className="fa-solid fa-file card_icon"
                          style={{ color: "#F57D20" }}
                        ></i>
                          <p className="details_courses_card">20طالب  </p>
                      <i
                        className="fa-solid fa-graduation-cap card_icon"
                        style={{ color: "#F57D20" }}
                      ></i>{" "}
                    <p className="details_courses_card">2درس</p>
                        <i
                          className="fa-solid fa-clock card_icon"
                          style={{ color: "#F57D20" }}
                        ></i>{" "}
                        <p className="details_courses_card">{card.created_date}</p>
                       
                      

                      </div>

                  </div>
                </div>
                </Link>
              </div>{" "}
          </div>
        ))}
            <div
              className="col-md-12 col-sm-12 col_btn_prevNext"
              style={{ marginTop: "10px" }}
            >
              <button onClick={nextSlide} className="btn mb-3  ">
                {" "}
                <i className="fa fa-arrow-right"></i>
              </button>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "18px",
                }}
              >
                {" "}
                {/* Current Slide Number */}
                <span style={{ fontWeight: "bold",paddingRight:"2px" }}>{currentSlide + 1}</span>
                {/* Next Slide Number */}
                {currentSlide < 3 && ( // Replace `3` with the total number of slides minus one
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => goToSlide(currentSlide + 1)}
                  >
                    {currentSlide + 2}
                  </span>
                )}{" "}
                {/* Previous Slide Number */}
                {currentSlide > 0 && (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => goToSlide(currentSlide - 1)}
                  >
                    {currentSlide}
                  </span>
                )}
              </div>
              <button onClick={prevSlide} className="btn  mb-3  ">
                {" "}
                <i className="fa fa-arrow-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* <MiniPopUpLogin
    title_popup={title_popup}  
    description_popup={description_popup}
    />
    <MiniPopUpConfirm 
     title_popup_confirm={title_popup_confirm}  
     description_popup_confirm={description_popup_confirm}
      /> */}
    </>
  );
}

export default Courses;
