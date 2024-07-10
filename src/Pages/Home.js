import React from 'react'
import '../Css/home.css'
import Slider from "react-slick";

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
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
{/* About section */}
<div class="container text-center about-section">
  <div class="row ">
    <div class="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-md-center align-items-center">
<img src={require('../assets/about.png')} alt="about" className="about_img img-fluid " /> 
   </div>
    <div class="col-lg-5 col-md-6 col-sm-12">
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
{/* End About section */}
{/* Home Box */}
<section className="margin_section">

<div className="container text-center home_box">
  <h2 className="h_home_box">دورات أكاديمية النجاح</h2>
  <p className="p_home_box">في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلةمثالية لتكميل النظام التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم المعقدة بسهولة أكبر </p>
  <button type="button" className="btn btn-light click_here_btn">اضغط هنا</button>

</div>
</section>
{/* End Home Box */}

{/* FAQ section */}
<section className="margin_section">
<div class="container text-center">
  <h1 className="faq">الأسئلة المتكررة</h1>
  <div class="row">
    <div class="col">
      
	<details open>
		<summary>
    ممكن أعرف أكثر  عن أكاديمية النجاح ؟		</summary>
		<div>
    أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح استفسار على المعلم ويرجع يرد عليك 	
    </div>
	</details>
	<details>
		<summary>
    كيف طريقة التسجيل للدورات على الموقع ؟		</summary>
		<div>
    أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح استفسار على المعلم ويرجع يرد عليك 	
		</div>
	</details>
	<details>
		<summary>
    حاب أسجل بالموقع ، في وقت محدد للتسجيل بالدورات ؟		</summary>
		<div>
    أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح استفسار على المعلم ويرجع يرد عليك 	
		</div>
	</details>
	<details>
		<summary>
    كيف ممكن أجرب حصص مجانية على الموقع ؟		</summary>
		<div>
    أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح استفسار على المعلم ويرجع يرد عليك 	
		</div>
	</details>
  <details>
		<summary>
    كم جهاز بقدر أستخدم الموقع ؟	</summary>
		<div>
    أكاديمية النجاح هو منصة تعليميّة ( تعليم اون لاين ) بديله عن الطرق التقليدية من المراكز والخصوصي , بتقدر تسجل الدورات اون لاين وتدرس من البيت عن طريق اللابتوب أو الموبايل شرح مفصل للمواد وراح توفر الوقت والجهد والتكاليف وبتقدر تحت كل درس تطرح استفسار على المعلم ويرجع يرد عليك 	
		</div>
	</details>
</div>
    </div>
   
  </div>
</section>
<section className="margin_section">
<h1 className="faq">أراء وتجارب طلابنا </h1>
<div className="slider-container">
      <div className="container ">
        <Slider {...settings} >
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
          <div className='card-item '>
            <div className="card cont_comment">
              <div className="card-body">
                <p className='comment'>م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من امتحانات التجريبي “</p>
             <div className='details_account'>
<div className='info_account'>
              <p>سعد أحمد</p>
              <p>عمان , طالب 2020</p>
              </div>
              <img src={require("../assets/account.png")} alt="" className='img-fluid account_img'/>
             </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
</section>

    </>
  )
}

export default Home