import React from "react";
import "../Css/home.css";
import Slider from "react-slick";
import StudentsOpinions from "../components/StudentsOpinions";
import PurpleBox from "../components/PurpleBox";
function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  return (
    <>
      {/* About section */}
      <div class="container text-center about-section">
        <div class="row ">
        <div class="col-lg-5 col-md-6 col-sm-12">
            <h2 className="about_title">بصمة </h2>
            <p className="p_about">
              في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
              اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام
              التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم
              المعقدة بسهولة أكبر
            </p>
          </div> <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-md-center align-items-center">
            <img
              src={require("../assets/about.png")}
              alt="about"
              className="about_img img-fluid "
            />
          </div>
         
        </div>
      </div>
      {/* End About section */}
      {/* Home Box */}
      <PurpleBox
     title={" دورات بصمة "}
     description={"في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلةمثالية لتكميل النظام التعليمي التقليدي. هذه الطريق الجديدة تمكن الطلاب من فهم المفاهيم المعقدة بسهولة أكبر"}
link={'/courses'}
/>
      {/* <BoxCont title={title} description={description} linkPage={linkPage} /> */}

      {/* FAQ section */}
      <section className="margin_section">
        <div class="container text-center">
          <h1 className="faq">الأسئلة المتكررة</h1>
          <div class="row">
            <div class="col">
              <details open>
                <summary>ممكن أعرف أكثر عن بصمة ؟ </summary>
                <div>
                بصمة هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
              <details>
                <summary>كيف طريقة التسجيل للدورات على الموقع ؟ </summary>
                <div>
                بصمة  هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
              <details>
                <summary>
                  حاب أسجل بالموقع ، في وقت محدد للتسجيل بالدورات ؟{" "}
                </summary>
                <div>
                 بصمة هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
              <details>
                <summary>كيف ممكن أجرب حصص مجانية على الموقع ؟ </summary>
                <div>
                 بصمة هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
              <details>
                <summary>كم جهاز بقدر أستخدم الموقع ؟ </summary>
                <div>
                 بصمة هو منصة تعليميّة ( تعليم اون لاين ) بديله عن
                  الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون
                  لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل
                  للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح
                  استفسار على المعلم ويرجع يرد عليك
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <h1 className="faq">أراء وتجارب طلابنا </h1>

      <StudentsOpinions />
    </>
  );
}

export default Home;
