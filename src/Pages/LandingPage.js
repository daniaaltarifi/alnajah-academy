import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/slider.css";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Footer from "../components/Footer";
import SliderComp from "../components/SliderComp";
function LandingPage() {
 

  return (
    <>
      {/* slider section */}
      <SliderComp />
      <div className="container text-center slider_box">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12">
                <h5 className="h_box_slider"> خطة دراسية متكاملة </h5>
                <p className="p_box_slider">
                  {" "}
                  محاضرات مبوبة سهلة الاستخدام وبأسلوب سلس من قبل نخبة من
                  الاساتذة المميزين، ونشر فيديوهات وأوراق عمل واختبارات محوسبة
                  وتمارين وحلول لمساعدة الطلاب على التمكن من المواد بشكل تام{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">
                <img
                  src={require("../assets/vectorBook.png")}
                  alt="vector book"
                  className="vector_icon"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12">
                <h5 className="h_box_slider"> بطاقات مدفوعة مسبقاً</h5>
                <p className="p_box_slider">
                  {" "}
                  يوفر الموقع بطاقات مدفوعة مسبقاً لتسهيل عملية الاشتراك بالمواد
                  التعليمية، يمكنك شراء البطاقة من الفئة المناسبة للمادة المواد
                  التي ترغب بشرائها{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">
                <img
                  src={require("../assets/wallet.png")}
                  alt="vector book"
                  className="vector_icon"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12">
                <h5 className="h_box_slider"> مميزاتنا</h5>
                <p className="p_box_slider">
                  {" "}
                  يؤمن الموقع لطالب التوجيهي جميع ما يحتاجه من مواد تعليمية
                  منوعة بجودة عالية، حيث يستطيع الطالب متابعة الدروس من أي مكان
                  وفي أي وقت{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">
                <img
                  src={require("../assets/heart.png")}
                  alt="vector book"
                  className="vector_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End slider section */}
      <Home />
      <Footer />
    </>
  );
}

export default LandingPage;
