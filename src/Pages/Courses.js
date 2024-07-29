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
  const [department, setDepartment] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [courseByDep, setCourseByDep] = useState([]);

  const title_popup = "تسجيل الدخول";
  const description_popup = "لشراء قسم يجب تسجيل الدخول";
  const title_popup_confirm = " تنبيه";
  const description_popup_confirm = "تمت العملية ، طلبك قيد الأنتظار";
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the courses based on the search query
    const filteredResults = courses.filter((course) =>
      course.subject_name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardsPerSlide = 9; // Maximum cards per slide

  const numSlides = Math.ceil(courses.length / cardsPerSlide);

  const nextSlide = () => {
    // setCurrentSlide((currentSlide + 1) % numSlides);
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % courses.length);
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, courses.length - 1));
  };

  const prevSlide = () => {
    // setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const startIndex = currentSlide * cardsPerSlide;
  const title = "ادرس اون لاين مواد المناهج الدراسية الأردنية";
 
  const fetchCoursesBasedDepartment = async () => {
    try {
      const url = selectedDepartment
        ? `http://localhost:8080/courses/getbydep/${selectedDepartment}`
        : `http://localhost:8080/courses`;

      const response = await axios.get(url);
      setCourses(response.data.slice(startIndex, startIndex + cardsPerSlide));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {

    fetchCoursesBasedDepartment();
  }, [selectedDepartment, startIndex, cardsPerSlide]);
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/department");
        setDepartment(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);
  // useEffect(() => {
  //   const fetchCoursesBasedDepartment = async () => {
  //     if (selectedDepartment) {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:8080/courses/getbydep/${selectedDepartment}`
  //         );
  //         setSearchResults(response.data);
  //         console.log(searchResults)
  //       } catch (error) {
  //         console.error(
  //           `Error fetching courses for department ${selectedDepartment}:`,
  //           error
  //         );
  //       }
  //     } else {
  //       // Fetch all courses if no department is selected
  //       fetchCourses();
  //     }
  //   };

  //   fetchCoursesBasedDepartment();
  // }, [selectedDepartment]);
  const handleDepartment = (e) => {
    const selectedDepartmentId = e.target.value;
    setSelectedDepartment(selectedDepartmentId);
  };
  useEffect(() => {
    if (searchResults.length > 0) {
      setCourses(searchResults);
    } else {
      // If searchResults is empty, reset to original library data
      fetchCoursesBasedDepartment(); // Fetch original library data again
    }
  }, [searchResults]);
  return (
    <>
      <SliderComp title={title} />
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
                onChange={handleInputChange}
              />
              <a
                href="#"
                className="btn btn-s purple_btn search_btn"
                onChange={handleInputChange}
              >
                بحث
              </a>
              {/* {searchQuery && (
                <ul className="search_dropdown">
                  {searchResults.length > 0 ? (
                    searchResults.map((course) => (
                      <li
                        key={course.id}
                        onClick={() => {
                          navigate(`/coursedetails/${course.id}`);
                          console.log(course.id);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img
                          src={`http://localhost:8080/${course.img}`}
                          alt={course.subject_name}
                        />
                        {course.subject_name}
                      </li>
                    ))
                  ) : (
                    <li>لا يوجد مادة</li>
                  )}
                </ul>
              )} */}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <select
              name="department"
              value={selectedDepartment}
              onChange={handleDepartment}
              id="lang"
              className="select_dep"
            >
              <option value="">اختر قسم</option>
              {department.map((dep) => (
                <option key={dep.id} value={dep.id}>
                  {dep.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12"></div>
        </div>
      </div>

      <div className="slick-wrapper">
        <div className="container ">
          {courses.length > 0 && (
          <div className="row justify-content-center align-items-center">
            {courses.map((card, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                >
                  <Link to={`/coursedetails/${card.id}`} className="link_card">
                    <div className="card card_cont">
                      <img
                        src={`http://localhost:8080/${card.img}`}
                        className="card-img-top img-fluid card_img"
                        alt="..."
                      />
                      <div className="card-body">
                        <div>
                          {/* rating here */}
                          <p className="card-text card_dep">
                            {" "}
                            {card.department_name}{" "}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="course_title_card">
                            {card.subject_name}
                          </p>{" "}
                          <p className=" teacher_name_card">
                            {card.teacher_name}
                          </p>
                        </div>
                        <hr style={{ marginTop: "1px" }} />
                        <div className="d-flex justify-content-between">
                          <i
                            className="fa-solid fa-file card_icon"
                            style={{ color: "#F57D20" }}
                          ></i>
                          <p className="details_courses_card">20طالب </p>
                          <i
                            className="fa-solid fa-graduation-cap card_icon"
                            style={{ color: "#F57D20" }}
                          ></i>{" "}
                          <p className="details_courses_card">2درس</p>
                          <i
                            className="fa-solid fa-clock card_icon"
                            style={{ color: "#F57D20" }}
                          ></i>{" "}
                          <p className="details_courses_card">
                            {card.created_date}
                          </p>
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
                <span style={{ fontWeight: "bold",paddingRight:"10px",paddingLeft:"10px" }}>{currentSlide + 1}</span>
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
                    )}

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
