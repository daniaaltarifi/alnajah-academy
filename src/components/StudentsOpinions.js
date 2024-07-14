import React from 'react'
import Slider from "react-slick";

function studentsOpinions() {
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
    <div>
          <section className="margin_section">
        <div className="slider-container">
          <div className="container ">
            <Slider {...settings}>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item ">
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                      م وقع رائع ، دراسة مريحة ، بتوفر الوقت والجهد ، والسعر
                      أوفر بكتير من أي طرق تدريس تانية ، والنتائج كانت واضحة من
                      امتحانات التجريبي “
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>سعد أحمد</p>
                        <p>عمان , طالب 2020</p>
                      </div>
                      <img
                        src={require("../assets/account.png")}
                        alt=""
                        className="img-fluid account_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default studentsOpinions