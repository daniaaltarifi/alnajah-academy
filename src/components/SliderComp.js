import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/slider.css"; 
import { Link } from "react-router-dom";

function SliderComp({title,description,image}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <>
    {/* slider section */}
      <Slider {...settings} style={{ overflow: "hidden" }}>
        <div className="slide-item">
          <img
            src={require("../assets/slider.jfif")}
            alt={`slider img`}
            className="img_home"
          />
          <div className="overlay">
            <div className="overlay-content">
              <img src={image} alt="" />{" "}
              <h1  className="title_of_slidercomp">{title}</h1>
              <p className="paragraph_slider">
              {description}
              </p>
              <Link to="/cardprice"  className="btn btn-s purple_btn ">
                اطلب بطاقتك هنا
              </Link>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <img
            src={require("../assets/slide.jpg")}
            alt={`Contact Video`}
            className="img_home"
          />
           <div className="overlay">
            <div className="overlay-content">
              <img src={require("../assets/logo.png")} alt="" />
          <p  >{title}</p>

              <p className="paragraph_slider">
                في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
                اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام
                التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم
                المفاهيم المعقدة بسهولة أكبر.
              </p>
              <Link to="/cardprice"  className="btn btn-s purple_btn btn_slider">
                اطلب بطاقتك هنا
              </Link>
            </div>
          </div>
        </div>
        
      </Slider>
      </>
  )
}

export default SliderComp;