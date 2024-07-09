// import React from 'react'
// import slider from '../Css/slider.css'
// function Slider() {
//   return (
//     <div>
//         <main role="main">

// <div class="contmin">
//   <div id="myCarousel" class="carousel slide" data-ride="carousel">
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img class="d-block w-100" src="https://picsum.photos/1920/1280/?image=1039" alt="Post Picture"/>
//         <div class="container">
//           <div class="carousel-caption text-left">
//             <a href="#"><h1>Title of the post</h1></a>
//             <p class="text-truncate">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//             <p><a class="btn btn-xs btn-outline-primary" href="#" role="button">Category</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="https://picsum.photos/1920/1280/?image=967" alt="Post Picture"/>
//         <div class="container">
//           <div class="carousel-caption text-left">
//                <a href="#"><h1>Title of the post</h1></a>
//                <p class="text-truncate">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//                <p><a class="btn btn-xs btn-outline-primary" href="#" role="button">Another Category</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="https://picsum.photos/1920/1280/?image=1036" alt="Post Picture"/>
//         <div class="container">
//           <div class="carousel-caption text-left">
//             <a href="#"><h1>Title of the post</h1></a>
//             <p class="text-truncate">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//             <p><a class="btn btn-xs btn-outline-primary" href="#" role="button">Diff Cat</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="https://picsum.photos/1920/1280/?image=889" alt="Post Picture"/>
//         <div class="container">
//           <div class="carousel-caption text-left">
//             <a href="#"><h1>Title of the post</h1></a>
//             <p class="text-truncate">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//             <p><a class="btn btn-xs btn-outline-primary" href="#" role="button">Hopefully Last</a></p>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="https://picsum.photos/1920/1280/?image=998" alt=""/>
//         <div class="container">
//           <div class="carousel-caption text-left">
//             <a href="#"><h1>Title of the post</h1></a>
//             <p class="text-truncate">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//             <p><a class="btn btn-xs btn-outline-primary" href="#" role="button">Last Cat</a></p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>
// </div>

// </main>
//     </div>
//   )
// }

// export default Slider

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/slider.css"; // Ensure the correct path to your CSS file

function SliderHome() {
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
      <Slider {...settings} style={{ overflow: "hidden" }}>
        <div className="slide-item">
          <img
            src={require("../assets/slider.jfif")}
            alt={`Contact Video`}
            className="img_home"
          />
          <div className="overlay">
            <div className="overlay-content">
              <img src={require("../assets/logo.png")} alt="" />{" "}
              <p className="paragraph_slider">
                في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
                اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام
                التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم
                المفاهيم المعقدة بسهولة أكبر.
              </p>
              <a href="#" className="btn btn-s purple_btn ">
                اطلب بطاقتك هنا
              </a>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <img
            src="https://picsum.photos/1920/1280/?image=998"
            alt={`Contact Video`}
            className="img_home"
          />
           <div className="overlay">
            <div className="overlay-content">
              <img src={require("../assets/logo.png")} alt="" />{" "}
              <p className="paragraph_slider">
                في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
                اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام
                التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم
                المفاهيم المعقدة بسهولة أكبر.
              </p>
              <a href="#" className="btn btn-s purple_btn btn_slider">
                اطلب بطاقتك هنا
              </a>
            </div>
          </div>
        </div>
        
      </Slider>
      <div className="container text-center slider_box">
  <div className="row">
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
            <h5 className="h_box_slider">   خطة دراسية متكاملة </h5>
            <p className="p_box_slider">   محاضرات مبوبة سهلة الاستخدام وبأسلوب سلس من قبل نخبة من الاساتذة المميزين، ونشر فيديوهات وأوراق عمل واختبارات محوسبة وتمارين وحلول لمساعدة الطلاب على التمكن من المواد بشكل تام </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">

            <img src={require("../assets/vectorBook.png")} alt="vector book" className="vector_icon"/>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
            <h5 className="h_box_slider">   بطاقات مدفوعة مسبقاً</h5>
            <p className="p_box_slider">  يوفر الموقع بطاقات مدفوعة مسبقاً لتسهيل عملية الاشتراك بالمواد التعليمية، يمكنك شراء البطاقة من الفئة المناسبة للمادة المواد التي ترغب بشرائها </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">

<img src={require("../assets/wallet.png")} alt="vector book" className="vector_icon"/>
</div>
      </div>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
            <h5 className="h_box_slider">   مميزاتنا</h5>
            <p className="p_box_slider"> يؤمن الموقع  لطالب التوجيهي جميع ما يحتاجه من مواد تعليمية منوعة بجودة عالية، حيث يستطيع الطالب متابعة الدروس من أي مكان وفي أي وقت </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 vector_cont">

<img src={require("../assets/heart.png")} alt="vector book" className="vector_icon"/>
</div>
      </div>
    </div>
  </div>

</div>

<div class="container text-center about-section">
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
<img src={require('../assets/about.png')} alt="about" className="about_img" />    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <h2 className="about_title">أكاديمية النجاح</h2>
      <p className="p_about">في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي
 في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة
 مثالية لتكميل النظام التعليمي التقليدي. هذه الطريقة 
الجديدة تمكن الطلاب من فهم المفاهيم المعقدة 
بسهولة أكبر
</p>
    </div>
   
  </div>
</div>

    </>
  );
}

export default SliderHome;
