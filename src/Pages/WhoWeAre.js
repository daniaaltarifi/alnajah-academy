import React from "react";
import SliderComp from "../components/SliderComp";
import "../Css/whoweare.css";
import StudentsOpinions from "../components/StudentsOpinions.js";
import PurpleBox from "../components/PurpleBox.js";
function WhoWeAre() {
  const title = "من نحن";
  const description =
    "في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم المعقدة بسهولة أكبر";
  return (
    <>
      <SliderComp title={title} description={description} />
      {/* slider box */}
      <div className="container  slider_box">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  1
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  2
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>{" "}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  3
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  4
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  5
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>{" "}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-1">
            <div className="d-flex">
              <div className="vector_cont">
                <h1 className="" style={{ color: "#fff" }}>
                  6
                </h1>
              </div>
              <p className="description_of_steps_who">
                توفير شرح مبسط وشامل لدروس لجميع الصفوف المدرسية.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* End slider box */}
      {/* Our Teachear */}
      <div className="container text-center about-section">
        <div className="row ">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h2 className="about_title">معلمينا</h2>
            <p className="p_about">
              في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
              اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام
              التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم
              المعقدة بسهولة أكبر
            </p>
          </div>{" "}
          <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-md-center align-items-center">
            <img
              src={require("../assets/about.png")}
              alt="about"
              className="about_img img-fluid "
            />
          </div>
        </div>
      </div>
      {/* End Our Teachear */}
      <StudentsOpinions />
      {/* some paragraph */}
      <div className="margin_section">
        <div className="container w-50 pt-4">
          <p className="paragraph_who">
            في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساس يفي حياتنا اليومية،
            ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام التعليمي
            التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم المعقدة
            بسهولة أكبر
          </p>
        </div>
      </div>
      {/* End some paragraph */}

     <PurpleBox
     title={"بطاقات بصمة "}
     description={"في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلةمثالية لتكميل النظام التعليمي التقليدي. هذه الطريق الجديدة تمكن الطلاب من فهم المفاهيم المعقدة بسهولة أكبر"}
link={'/'}

     />
    </>
  );
}

export default WhoWeAre;
