import React, { useState, useEffect, useRef } from "react";
import "../Css/courseDetails.css";
import { Link, useParams } from "react-router-dom";
import Tabs from "../Pages/Tabs.js";
import Tab from "../Pages/Tab.js";
import CommentForm from "../components/CommentForm.js";
import { IoIosArrowDown } from "react-icons/io";
import videoplay from "../assets/videoplayback.mp4";
import video2 from "../assets/video2.mp4";
import Rating from "../components/Rating.js";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactPlayer from "react-player";
import Courses from "./Courses.js";
import axios from "axios";




function CourseDetails({ user }) {


  const { id } = useParams();
  const [totalVideos, setTotalVideos] = useState(15); // Replace with actual total number of videos
  const [videosWatched, setVideosWatched] = useState(3); // Number of videos watched
  const [progress, setProgress] = useState(0);
  const [courseDetails, setCourseDetails] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [commentCourse, setCommentCourse] = useState([]);
  
  const [isRecording, setIsRecording] = useState(false);
  const [courseCount, setCourseCount] = useState(0);
  const [teacherId, settecherId] = useState(null);
  const [studentCount, setStudentCount] = useState(0);
  const [lessonCounts, setLessonCounts] = useState(0);
  const [student_teacherCount, setstudent_teacherCount] = useState(0);
  const [courseId, setcourseId] = useState(null);
  const watermarkText = user ? user.username || user.ip : 'Anonymous';
  const videoEl = useRef(null);

  useEffect(() => {
  const fetchVideosData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/courses/getbyvideo/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video details");
      }
      const data = await response.json();
      setVideosData(data);
      // Properly log the fetched data to see its structure
      console.log("Fetched video details Details:", data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };
  fetchVideosData();
}, [id]);



useEffect(() => {
  const handleContextMenu = (e) => e.preventDefault();
  const handleKeyDown = (e) => {
    if (e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) || e.keyCode === 'C'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) || // Ctrl+Shift+I/C/J
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) { // Ctrl+U
      e.preventDefault();
    }
  };
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);

useEffect(() => {
  const checkForScreenRecording = () => {
    const videoElement = videoEl.current;
    // Note: `captureStream` does not detect screen recording
    if (videoElement) {
        // Placeholder logic, cannot detect screen recording this way
        setIsRecording(false);
    } 
  };
  const intervalId = setInterval(checkForScreenRecording, 1000);
    return () => clearInterval(intervalId);
  }, [videoEl]);
  

  useEffect(() => {
    const fetchCourseCount = async () => {
      console.log("teacherId: " + teacherId);
      try {
        const response = await axios.get(`http://localhost:8080/courses/course-counts/${teacherId}`);
        // Assume response.data is an array with one object
        const data = response.data;
        if (data.length > 0) {
          setCourseCount(data[0].course_count); // Set the course count from the first item in the array
        }
      } catch (error) {
        console.error('Error fetching course count:', error);
      }
    };
  
    if (teacherId) {
      fetchCourseCount();
    }
  }, [teacherId]);
  




  useEffect(() => {
    const fetchStudentCount = async () => {
      console.log("StudentId: " + courseId);
      try {
        const response = await axios.get(`http://localhost:8080/courses/users-counts/${courseId}`);
        const data = response.data;
        if (data && data.student_count !== undefined) {
          setStudentCount(data.student_count); // Set the course count from the response
          console.log("Fetched student count: ", data.student_count);
        }
      } catch (error) {
        console.error('Error fetching course count:', error);
      }
    };
  

    if (courseId) {
      fetchStudentCount();
    }
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/courses/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog details");
      }
      const data = await response.json();
      setCourseDetails(data);
      settecherId( data[0].teacher_id)
      setcourseId( data[0].id )
      // Properly log the fetched data to see its structure
      console.log("Fetched course details Details:", data[0].teacher_id);
      console.log("Fetched course details Details:", data[0].id);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };
  

  useEffect(() => {
    const fetchLessonCounts = async () => {
      console.log("Fetching lesson count for courseId: " + courseId);
      try {
        const response = await axios.get(`http://localhost:8080/courses/lesson-counts/${courseId}`);
        const data = response.data;
        console.log("Fetched bbbbbbbbbbbbbbbbbbbbbbstudent count: ", data[0].lesson_count);
        if (data.length > 0) {
          setLessonCounts(data[0].lesson_count); // Set the lesson count from the first item in the array
          console.log("Fetched lesson count: ", data[0].lesson_count);
        } else {
          setLessonCounts(0); // In case no lessons are found
        }
      } catch (error) {
        console.error('Error fetching course count:', error);
      }
    };
  

    if (courseId) {
      fetchLessonCounts();
    }
  }, [courseId]);

  
  useEffect(() => {
    const TeacherStudentCount  = async () => {
      console.log("Fetching lesson count for teacherId: " + teacherId);
      try {
        const response = await axios.get(`http://localhost:8080/teacher/student-counts/${teacherId}`);
        const data = response.data;
        console.log("Fetched bbbbbbbbbbbbbbbbbbbbbbstudent count: ", data[0].student_count);
        if (data.length > 0) {
          setstudent_teacherCount(data[0].student_count); // Set the lesson count from the first item in the array
          console.log("Fetched lesson count: ", data[0].student_count);
        } else {
          setstudent_teacherCount(0); // In case no lessons are found
        }
      } catch (error) {
        console.error('Error fetching course count:', error);
      }
    };
  

    if (teacherId) {
      TeacherStudentCount ();
    }
  }, [teacherId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    fetchCourseDetails();
    
   
    const fetchCommentCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/commentcourse`);
        const comments = response.data;
        const approvedComments = comments.filter(
          (comment) => comment.action === "approved"
        );
        setCommentCourse(approvedComments);
        console.log("Approved comments:", approvedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    fetchCommentCourses();
  }, []);

  const handleSubmit = async (name, email, comment ,rating) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/commentcourse/add",
        {
          name: name,
          email: email,
          comment: comment,
          rating : rating ,
          course_id: id, // Assuming `id` is the correct identifier for `blog_id`
        }
      );
       if (response.status === 200) {
        // Append the new comment to the existing state
        console.log("Comment submitted for approval:", response.data);
        console.log("res", response.data);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };











  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/courses/getbyvideo/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch video details");
        }
        const data = await response.json();
        setVideosData(data);
        // Properly log the fetched data to see its structure
        console.log("Fetched video details Details:", data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    fetchVideosData();
  }, [id]);
  useEffect(() => {
    // Calculate circle progress bar percentage
    const calculateProgress = () => {
      if (totalVideos > 0 && videosWatched > 0) {
        const percent = (videosWatched / totalVideos) * 100;
        setProgress(percent);
      }
    };

    calculateProgress();
  }, [totalVideos, videosWatched]);
  const value = progress / 100;
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
    // Add more comments as needed
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

  const [expandedItemId, setExpandedItemId] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // Initial video index
  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleClick = (itemId) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  // handle prvent recordeing
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const [isBlackScreen, setIsBlackScreen] = useState(false);

  const handleKeyDown = (event) => {
    // Check for common screen recording and screenshot shortcuts
    const isRecordingShortcut =
      (event.metaKey && event.shiftKey && event.key === "5") || // macOS: Command + Shift + 5
      (event.ctrlKey && event.altKey && event.key === "r") || // Windows: Ctrl + Alt + R
      (event.metaKey && event.key === "4") || // macOS: Command + Shift + 4 (for screenshots)
      event.key === "PrintScreen" || // Windows: Print Screen
      event.key === "Meta"; // Check if the key is Windows key (in some cases)

    if (isRecordingShortcut) {
      setIsBlackScreen(true);
    }
  };

  const handleKeyUp = () => {
    setTimeout(() => {
      setIsBlackScreen(false);
    }, 7000); // 7 seconds
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  console.log("Current Video Index:", currentVideoIndex);
  console.log("Video Data:", videosData[currentVideoIndex]);
  const [videoDurations, setVideoDurations] = useState([]);
  const videoRefs = useRef([]);


 
  const [duration, setDuration] = useState(null);


  // const videoEl = useRef(null);
  
  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(formatDuration(video.duration));
  };
  useEffect(() => {
    const fetchVideoDurations = () => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                video.addEventListener('loadedmetadata', () => {
                    setVideoDurations(prevDurations => {
                        const newDurations = [...prevDurations];
                        newDurations[index] = video.duration;
                        return newDurations;
                    });
                });
                // Trigger metadata loading
                video.load();
            }
        });
    };

    fetchVideoDurations();

    // Clean up event listeners
    return () => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.removeEventListener('loadedmetadata', () => {});
            }
        });
    };
}, [videosData]);

const formatDuration = (durationInSeconds) => {
    if (isNaN(durationInSeconds) || durationInSeconds < 0) {
        return 'Invalid Duration';
    }

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};


  return (
    <>
      {/* header of course details */}
      {courseDetails.map((course) => (
        <div
          className="container text-center cont_course_details"
          key={course.id}
        >
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
              <img
                src={`http://localhost:8080/${course.img}`}
                alt="coursedetails"
                className="img-fluid img_coursedetails"
              />{" "}
            </div>
            <div className="col-lg-6 col-md-6 cl-sm-12 ">
              <div className="dep_teacher_coursedetails ">
                <p className="dep_coursedetaile">{course.department_name}</p>
                <p className="teacher_coursedetails">{course.teacher_name}</p>
              </div>
              <h1 className="title_coursedetails">{course.subject_name}</h1>
              <div className="d-flex justify-content-around ">
                <div className="d-flex">
                  <i
                    class="fa-solid fa-clock card_icon"
                    style={{ color: "#F57D20" }}
                  ></i>
                  <p className="details_courses_card "> 2:33:32</p>
                </div>
                <div className="d-flex">
                  <i
                    class="fa-solid fa-graduation-cap card_icon"
                    style={{ color: "#F57D20" }}
                  ></i>
                  <p className="details_courses_card">  {studentCount}   طالب </p>
                </div>
                <div className="d-flex">
                  <i
                    class="fa-solid fa-file card_icon"
                    style={{ color: "#F57D20" }}
                  ></i>
                  <p className="details_courses_card ">   {lessonCounts}  درس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End header of course details */}

      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12"
              onContextMenu={handleContextMenu}
            >
              {/* <Video/> */}

              {videosData.length > 0 && (
                <div className="video_cont">
                  {/* Render default video if currentVideoIndex is null */}
                  {currentVideoIndex === null ? (
                    <div>
                      <video
                      ref={videoEl} onLoadedMetadata={handleLoadedMetadata}
                        controls
                        className="video_play"
                        style={{ width: "100%", height: "auto" }}
                      >
                        <source
                          src={`http://localhost:8080/${videosData[0].defaultvideo}`} // Assuming first video is default
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                   
                      <div className="d-flex justify-content-center">
                        <p className="after_price_coursedetails">
                          {videosData[0].after_offer} دينار
                        </p>
                        <p className="before_price_coursedetails">
                          {videosData[0].before_offer} دينار
                        </p>
                      </div>
                      <button className="purchase_now_coursedetails">
                        شراء الان
                      </button>
                    </div>
                  ) : (
                    // Render selected video
                    videosData[currentVideoIndex] && (
                      <div className="video-container">
                        <video
                          ref={videoEl}  onLoadedMetadata={() => console.log('Metadata Loaded')}
                          key={currentVideoIndex}
                          controls
                          className="video_play"
                          style={{ width: "100%", height: "auto" }}
                        >
                          <source
                            src={`http://localhost:8080/${videosData[currentVideoIndex].url}`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className="watermark">{watermarkText}</div>
                        {isRecording && <div className="overlay" id="video-overlay"></div>}
                        <p>
                         {videosData[currentVideoIndex].duration}
                        </p>

                        <div className="d-flex justify-content-center">
                          <p className="after_price_coursedetails">
                            {videosData[currentVideoIndex].after_offer} دينار
                          </p>
                          <p className="before_price_coursedetails">
                            {videosData[currentVideoIndex].before_offer} دينار
                          </p>
                        </div>
                        <button className="purchase_now_coursedetails">
                          شراء الان
                        </button>
                        
                      </div>
                    )
                  )}
                </div>
              )}

              {/*End video  */}
            </div>
            {courseDetails.map((course) => (
              <div
                className="col-lg-7 col-md-12 col-sm-12 col_tabs_coursedetails"
                key={course.id}
              >
                <Tabs>
                  <Tab title="عن المادة">
                    <div className="description_coursedetails">
                      {course.descr}
                    </div>
                  </Tab>
                  <Tab title="الموضوعات">
                    <div>
                      <p className="description_coursedetails">
                        مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب
                        وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع المواضيع
                        التي يغطيها هذا التخصص
                      </p>
                      
                      <div className="container text-center">
                      {videosData.map((item, index) => (
                        
                <div
                    className="row topic_list_tabs_cont"
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                >
                    <div
                        className={`col-lg-6 col-md-6 col-sm-12 ${
                            expandedItemId === item.id ? "mb-3" : ""
                        }`}
                    >
                        <div className="d-flex align-items-center pt-2">
                            <IoIosArrowDown />
                            <li style={{ cursor: "pointer" }}>
                                {item.title}
                            </li>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex justify-content-evenly">
                            <div className="d-flex">
                                <i
                                    className="fa-solid fa-file card_icon"
                                    style={{ color: "#F57D20" }}
                                ></i>
                                <p className="details_courses_card">1 درس</p>
                            </div>
                            <div className="d-flex">
                                <i
                                    className="fa-solid fa-clock card_icon"
                                    style={{ color: "#F57D20" }}
                                ></i>
                                <p className="details_courses_card">
                                   {item.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                    {expandedItemId === item.id && (
                        <div className="d-flex justify-content-between">
                            <p style={{ marginTop: "10px" }}>
                                {item.description}
                            </p>
                            <div className="d-flex">
                                <button
                                    className="show_video_btn"
                                    onClick={() => handleVideoSelect(index)}
                                >
                                    مشاهدة{" "}
                                    <i
                                        className="fa-regular fa-circle-play"
                                        style={{ color: "#fff" }}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Video Element */}
                    <video
                        ref={(el) => videoRefs.current[index] = el}
                        src={item.videoUrl} // Ensure this is the correct video URL
                        style={{ display: 'none' }} // Hide video element
                    />
                </div>
            ))}
                      </div>{" "}
                    </div>
                  </Tab>
                  <Tab title="المدرب">
                    <div className="container text-center">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <img
                            src={`http://localhost:8080/${course.img}`}
                            alt="teacher img"
                            height={"80vh"}
                            width={"80vh"}
                          />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                          <p className="teacher_name_coursedetails">
                            {course.teacher_name}{" "}
                          </p>
                          <p className="desc_of_teacher_coursedetails">
                            {course.teacher_descr}{" "}
                          </p>
                          <div className="d-flex">
                            <i
                              className="fa-solid fa-file card_icon ps-2"
                              style={{ color: "#F57D20" }}
                            ></i>
                        
                        <p className="details_courses_card">  {courseCount}    عدد المواد: </p>
                          </div>
                          <div className="d-flex">
                            <i
                              className="fa-solid fa-graduation-cap card_icon ps-2"
                              style={{ color: "#F57D20" }}
                            ></i>
                            <p className="details_courses_card">   {student_teacherCount}  طالب </p>
                          </div>
                          <div className="d-flex">
                            <p>للمتابعة:</p>
                            <Link to="">
                              <i
                                className="fa-brands fa-facebook-f m-2"
                                style={{ color: "#000" }}
                              ></i>
                            </Link>
                            <Link to="">
                              <i
                                className="fa-brands fa-x-twitter m-2"
                                style={{ color: "#000" }}
                              ></i>
                            </Link>
                            <Link to="">
                              <i
                                className="fa-brands fa-instagram m-2"
                                style={{ color: "#000" }}
                              ></i>
                            </Link>
                            <Link to="">
                              <i
                                className="fa-brands fa-linkedin-in m-2"
                                style={{ color: "#000" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  {/* comment slide */}
                  <Tab title="الأراء">
                    <Rating comments={commentCourse} />
                    <div className="container">
                      <div className="slider">
                        <div className="slider-content">
                          {commentCourse.map((comment, index) => (
                            <div className="slider-item" key={index}>
                              {comment && (
                                <div className="row mb-2">
                                  <div className="col-lg-3 col-md-3 col-sm-12">
                                    <img
                                      src={require("../assets/account.png")}
                                      alt=""
                                      height={"70vh"}
                                      width={"70vh"}
                                    />
                                  </div>
                                  <div className="col-lg-9 col-md-9 col-sm-12">
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
                  </Tab>
                  {/* End comment slide */}
                </Tabs>
                <CommentForm
                  title="اترك تعليق"
                  btn_title="تعليق"
                  handleSubmit={handleSubmit}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
