import React from "react";
import SliderComp from "../components/SliderComp";
import "../Css/contactUs.css";
import CommentForm from "../components/CommentForm";
function ContactUs() {
  return (
    <>
      <SliderComp
        title="اتصل بنا"
        description="في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية، ومعها، ظهر التعليم عن بُعد كوسيلة
 مثالية لتكميل النظام التعليمي التقليدي. هذه الطريقة الجديدة تمكن الطلاب من فهم المفاهيم المعقدة بسهولة أكبر"
      />
      <section className="margin_section">
        <div className="container text-center ">
          <div className="row cont_contact">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="faq">سعداء بتواصلك معنا</h1>
              <p className="desc_contac">
                في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا
                اليومية.
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                  <div className="d-flex ">
                    <div className="icon_cont_contact">
                      <img
                        src={require("../assets/phone.png")}
                        alt="phone"
                        className="img-fluid icon_contact"
                      />
                    </div>
                    <div>
                      <p className="contact_info">رقم الهاتف</p>
                      <p className="contact_info">0781234567</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                  <div className="d-flex ">
                    <div className="icon_cont_contact">
                      <img
                        src={require("../assets/email.png")}
                        alt="phone"
                        className="img-fluid icon_contact"
                      />
                    </div>
                    <div>
                      <p className="contact_info">رقم الهاتف</p>
                      <p className="contact_info">0781234567</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                  <div className="d-flex ">
                    <div className="icon_cont_contact">
                      <img
                        src={require("../assets/facebook.png")}
                        alt="phone"
                        className="img-fluid icon_contact"
                      />
                    </div>
                    <div>
                      <p className="contact_info">رقم الهاتف</p>
                      <p className="contact_info">0781234567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.2206410015024!2d35.90986842377241!3d31.92776652690021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0a3af3acf8b%3A0xfaeba9dd7981de41!2z2KPZg9in2K_ZitmF2YrYqSDYt9ix2YrZgiDYp9mE2YbYrNin2K0!5e0!3m2!1sar!2sjo!4v1721133493463!5m2!1sar!2sjo"
                className="location_maps_contact"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* comment form */}
      <div className="container">

      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 "></div>
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <CommentForm title="تواصل معنا" btn_title="ارسال" />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 "></div>
      </div>
      </div>
    </>
  );
}

export default ContactUs;
