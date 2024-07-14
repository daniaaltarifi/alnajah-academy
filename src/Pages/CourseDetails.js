import React,{useState,useEffect} from "react";
import "../Css/courseDetails.css";
import Video from '../Pages/Video.js';
import { Link } from "react-router-dom";
import Tabs from "../Pages/Tabs.js";
import Tab from "../Pages/Tab.js";
import TopicsList from '../components/TopicsList.js';
import CommentForm from "../components/CommentForm.js";
import { IoIosArrowDown } from "react-icons/io";
import videoplay from '../assets/videoplayback.mp4'
import video2 from '../assets/video2.mp4'
import Rating from "../components/Rating.js";
function CourseDetails() {
 useEffect(() => {
   window.scrollTo(0,0)
 }
 ,[])
  
  const [comments] = useState([
    {
      teacher_name: 'عبد العزيز الجمال',
      comment_date: '14/7/2024',
      desc_of_teacher:
        'شخص متخصص وملم بمفاهيم علم الحاسوب وتطبيقاته المختلفة. يمتلك الأستاذ خبرة عميقة في المجال وقدرة على نقل المعرفة وتوجيه الطلاب بشكل فعال',
    },
    {
      teacher_name: 'محمد أحمد',
      comment_date: '12/7/2024',
      desc_of_teacher:
        'أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!',
    },{
      teacher_name: 'kkkkk أحمد',
      comment_date: '12/7/2024',
      desc_of_teacher:
        'أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!',
    },{
      teacher_name: 'ADFD أحمد',
      comment_date: '12/7/2024',
      desc_of_teacher:
        'أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!',
    },{
      teacher_name: 'محمد SDFDSF',
      comment_date: '12/7/2024',
      desc_of_teacher:
        'أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!',
    },{
      teacher_name: 'EWTRETG SDFDSF',
      comment_date: '12/7/2024',
      desc_of_teacher:
        'أستاذ ممتاز، يشرح بوضوح ويتفاعل مع الطلاب بشكل جيد جدًا. أنصح بالدراسة معه بشدة!',
    },
    // Add more comments as needed
  ]);
 
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = Math.ceil(comments.length / 3);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };



  // Calculate which comments to display based on current slide index
  const startIndex = currentSlideIndex * 3;
  const endIndex = startIndex + 3;
  const visibleComments = comments.slice(startIndex, endIndex);

  // Adjust the visible comments to ensure exactly three are displayed
  while (visibleComments.length < 3) {
    visibleComments.push(null); // Add placeholders if there are fewer than three comments
  }
  const items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', lessons: 20, duration: '2:33:32',url: videoplay },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', lessons: 15, duration: '1:45:12',url: video2},
    { id: 3, name: 'Item 3', description: 'Description of Item 3', lessons: 25, duration: '3:00:00' },
  ];

  const [expandedItemId, setExpandedItemId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const handleClick = (itemId) => {
    if (itemId === expandedItemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
    }
  };
  
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  
  console.log(selectedVideo);
  return (
    <>
    {/* header of course details */}
      <div className="container text-center cont_course_details">
        <div className="row ">
          <div className="col-lg-6 col-md-6 cl-sm-12 d-flex justify-content-center">
            <img
              src={require("../assets/course.png")}
              alt="coursedetails"
              className="img-fluid "
            />{" "}
          </div>
          <div className="col-lg-6 col-md-6 cl-sm-12 ">
            <div className="dep_teacher_coursedetails ">
              <p className="dep_coursedetaile">مكثفات جيل 2006</p>
              <p className="teacher_coursedetails">عبد العزيز الجمال</p>
            </div>
            <h1 className="title_coursedetails">الحاسوب</h1>
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
                <p className="details_courses_card"> 200طالب </p>
              </div>
              <div className="d-flex">
                <i
                  class="fa-solid fa-file card_icon"
                  style={{ color: "#F57D20" }}
                ></i>
                <p className="details_courses_card "> 20درس</p>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* End header of course details */}
          <section className="margin_section">

          <div className="container text-center">
  <div className="row">
    <div className="col-lg-6 col-md-12 col-sm-12">
    {/* <Video/> */}
    {selectedVideo && (
        <div className="video-container">
          <video controls className="">
            <source src={selectedVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
   {/* video here */}
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 col_tabs_coursedetails">
    <Tabs>
      <Tab title="عن المادة" >
        <div className='description_coursedetails'>مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع المواضيع التي يغطيها هذا التخصص من تاريخ الحوسبة وتطورها إلى مفاهيم البرمجة والتصميم الحاسوبي وهندسة البرمجيات والشبكات والأمان السيبراني.
يمكن لطلاب مادة الحاسوب أن يتعلموا العديد من المفاهيم الأساسية مثل البرمجة بلغات مختلفة مثل C++، Python، Java، وغيرها، بالإضافة إلى مفاهيم الهندسة البرمجية التي تشمل تطوير البرمجيات وإدارة المشاريع البرمجية. كما يتعلم الطلاب عادةً عن بنية الحواسيب وكيفية عملها، ويمكنهم أيضًا التخصص في مجالات مثل الذكاء الاصطناعي، وتعلم الآلة، والروبوتيات، والواقع الافتراضي، وغيرها من التطبيقات التكنولوجية الحديثة.
تعتبر مادة الحاسوب مجالًا ديناميكيًا ومتطورًا يتطلب التحديث المستمر ومواكبة التطورات التكنولوجية الجديدة، وتقديم حلول مبتكرة للتحديات التي تواجه العالم الرقمي المعاصر. </div>
      </Tab>
      <Tab title="الموضوعات">
        <div><p className='description_coursedetails'>مادة الحاسوب هي تخصص دراسي يهتم بالتفاعل مع الحواسيب وفهم كيفية عملها واستخدامها بشكل فعّال. تتنوع المواضيع التي يغطيها هذا التخصص</p>
  
        <div className="container text-center">
      {items.map((item) => (
        <div className="row topic_list_tabs_cont" key={item.id} onClick={() => handleClick(item.id)}>
          <div className={`col-lg-6 col-md-6 col-sm-12  ${expandedItemId === item.id ? 'mb-3' : ''}`}>
          
          <div className='d-flex align-items-center pt-2'>
            <IoIosArrowDown className=''/>

            <li  style={{ cursor: 'pointer' }}>
              {item.name}
            </li>
            </div>
           
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-evenly">
              <div className="d-flex">
                <i className="fa-solid fa-file card_icon" style={{ color: '#F57D20' }}></i>
                <p className="details_courses_card">{item.lessons} درس</p>
              </div>
              <div className="d-flex">
                <i className="fa-solid fa-clock card_icon" style={{ color: '#F57D20' }}></i>
                <p className="details_courses_card">{item.duration}</p>
              </div>
            </div>
          </div>
          {expandedItemId === item.id && (
      <div className="d-flex justify-content-between">
        <p style={{ marginTop: '10px' }}>{item.description}</p>
        <div className='d-flex'>
          <button className='show_video_btn' onClick={() => handleVideoSelect(item)}>مشاهدة <i class="fa-regular fa-circle-play" style={{color: "#fff"}}></i></button>
        </div>
      </div>
    )}
        </div>
      ))}

    </div>        </div>

    
      </Tab>
      <Tab title="المدرب">
      <div className="container text-center">
  <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-12">
      <img src={require("../assets/account.png")} alt="" height={"80vh"} width={"80vh"}/>
    </div>
    <div className="col-lg-9 col-md-9 col-sm-12">
<p className="teacher_name_coursedetails">عبد العزيز الجمال</p>
<p className="desc_of_teacher_coursedetails">شخص متخصص وملم بمفاهيم علم الحاسوب وتطبيقاته المختلفة. يمتلك الأستاذ خبرة عميقة في المجال وقدرة على نقل المعرفة وتوجيه الطلاب بشكل فعال.</p>
<div className="d-flex">
                <i
                  class="fa-solid fa-file card_icon ps-2"
                  style={{ color: "#F57D20" }}
                ></i>
                <p className="details_courses_card "> 20مادة</p>
              </div>
              <div className="d-flex">
                <i
                  class="fa-solid fa-graduation-cap card_icon ps-2"
                  style={{ color: "#F57D20" }}
                ></i>
                <p className="details_courses_card"> 200طالب </p>
              </div>
  <div className="d-flex">
    <p>للمتابعة:</p>
    <Link to=""> <i className="fa-brands fa-facebook-f m-2" style={{"color": "#000"}}></i></Link>
<Link to=""><i className="fa-brands fa-x-twitter m-2" style={{"color": "#000"}}></i></Link>
<Link to=""><i className="fa-brands fa-instagram m-2"style={{"color": "#000"}}></i></Link>
<Link to=""><i className="fa-brands fa-linkedin-in m-2" style={{"color": "#000"}}></i></Link>
  </div>
    </div>
   
  </div>
</div>
      </Tab>
      {/* comment slide */}
      <Tab title="الأراء">
        <Rating/>
      <div className="container">
      <div className="slider">
        <div className="slider-content">
          {visibleComments.map((comment, index) => (
            <div className="slider-item" key={index}>
              {comment && (
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <img src={require("../assets/account.png")} alt="" height={"80vh"} width={"80vh"} />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12">
                    <div className="d-flex justify-content-between">
                      <p className="teacher_name_coursedetails">{comment.teacher_name}</p>
                      <p className="comment_date_coursedetails">{comment.comment_date}</p>
                    </div>
                    <p className="desc_of_teacher_coursedetails">{comment.desc_of_teacher}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center mt-3">
        <div className="col-md-12 col-sm-12 col_btn_prevNext" style={{ marginTop: "10px" }}>
          <button onClick={goToNextSlide} className="btn mb-3"><i className="fa fa-arrow-right"></i></button>
          <div style={{ textAlign: "center", marginTop: "5px", fontSize: "18px" }}>
            {/* Displaying current slide number in bold */}
            <span style={{ fontWeight: "bold" }}>{currentSlideIndex + 1}</span> / {totalSlides}
          </div>
          <button onClick={goToPrevSlide} className="btn mb-3"><i className="fa fa-arrow-left"></i></button>
        </div>
      </div>

      </Tab>
            {/* End comment slide */}

    </Tabs>
    </div>
   
  </div>
</div>
</section>
<CommentForm/>
</>
  );
}

export default CourseDetails;
