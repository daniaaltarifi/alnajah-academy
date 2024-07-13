import React,{useState} from "react";
import "../Css/courseDetails.css";
import Video from '../Pages/Video.js';
import { Link } from "react-router-dom";
import Tabs from "../Pages/Tabs.js";
import Tab from "../Pages/Tab.js";
function CourseDetails() {

  return (
    <>
    {/* header of course details */}
      <div className="container text-center cont_course_details">
        <div className="row">
          <div className="col-lg-6 col-md-6 cl-sm-12 d-flex justify-content-center ">
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
    <Video/>
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
          <div className="row">
            <div className="col">
              <details open className="topics_cont_coursedetails">

                <summary id="title_of_video_coursedetails">ممكن أعرف أكثر عن أكاديمية النجاح ؟ </summary>
               
               
                <span>
                  أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </span>
              </details>
              <details className="topics_cont_coursedetails">
                
                <summary id="title_of_video_coursedetails">كيف طريقة التسجيل للدورات على الموقع ؟ </summary>
               
                <div>
                  أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
              <details className="topics_cont_coursedetails">
                <summary id="title_of_video_coursedetails">
                  حاب أسجل بالموقع ، في وقت محدد للتسجيل بالدورات ؟{" "}
                </summary>
                <div>
                  أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
            
          
            </div>
          </div>
        </div>
        </div>
    
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
      <Tab title="الأراء">tab 4</Tab>
    </Tabs>
    </div>
   
  </div>
</div>
</section>
    </>
  );
}

export default CourseDetails;
