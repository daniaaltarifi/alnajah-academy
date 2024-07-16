import React,{useState} from "react";
import SliderComp from "../components/SliderComp.js";
import "../Css/cardPrice.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
function CardPrice() {
    const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate()
      // const handleInputChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);

  //   // Filter the courses based on the search query
  //   const filteredResults = CoursesInfo.filter((course) =>
  //     course.courseName.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setSearchResults(filteredResults);
  // };
  return (
    <>
      <SliderComp
        title={"أسعار بطاقات أكاديمية النجاح المدفوعة مسبقًا"}
        description={
          "نقوم من خلال أكاديمية النجاح  بتقديم 5 فئات من البطاقات المدفوعة مسبقاً. تبدأ أسعار البطاقات  من 12 إلى 50 دينار أردني. يمكن للطالب استخدام الفئة المناسبة للمادة/المواد التي يرغب بشرائها، وجميع البطاقات  صالحة ومفعلة مع الطالب حتى تقديم الامتحانات الوزارية. أقوى بطاقات التوجيهي موجودة لدينا، اطلبها الآن"
        }
      />
      <section className="margin_section">
        <div className="container text-center">
          <h2 className="title_cardprice">تفاصيل أسعار البطاقات</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_purple__dep_cardprice">
                <p>توجيهي جيل 2007 وجيل 2008</p>
              </div>{" "}
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_purple__dep_cardprice">
                <p>مكثفات جيل 2006</p>
              </div>{" "}
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_purple__dep_cardprice">
                <p>شرح مواد توجيهي جيل 2006</p>
              </div>{" "}
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>{" "}
            </div>{" "}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_purple__dep_cardprice">
                <p>الدورة التكميلية</p>
              </div>{" "}
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>
              <p>
                اللغة الأنجليزية <b>  40 دينارًا  </b> لكل فصل
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="margin_section">
        <div className="container ">
          <h2 className="title_cardprice">لطلب وشراء البطاقة</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="box_purple__orderby_cardprice">
                <img
                  src={require("../assets/www.png")}
                  alt="www icon"
                  className="img-fluid icon_orderby_cardprice"
                />{" "}
              </div>{" "}
              <p className="name_of_orderby_cardprice">الموقع الألكتروني</p>
              <p className="desc_orderby_cardprice">
                الذهاب مباشره إلى أقرب فرع للبنك الإسلامي الأردني. وعمل الإيداع
                في حساب شركة القرش الأبيض لتكنولوجيا المعلومات بحساب رقم 1826522
                فرع الحساب جبل عمان وإيداع المبلغ المطلوب وبعد ذلك إرسال صورة عن
                الإيداع على الواتس آب الخاص بالشركة 0794531740  مباشرة وسيتم
                إرسال كود بطاقة وتد الخاص بتفعيل المادة مباشرةً.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="box_purple__orderby_cardprice">
                <img
                  src={require("../assets/whatsup.png")}
                  alt="www icon"
                  className="img-fluid icon_orderby_cardprice"
                />{" "}
              </div>{" "}
              <p className="name_of_orderby_cardprice">الواتساب </p>
              <p className="desc_orderby_cardprice">
                الذهاب مباشره إلى أقرب فرع للبنك الإسلامي الأردني. وعمل الإيداع
                في حساب شركة القرش الأبيض لتكنولوجيا المعلومات بحساب رقم 1826522
                فرع الحساب جبل عمان وإيداع المبلغ المطلوب وبعد ذلك إرسال صورة عن
                الإيداع على الواتس آب الخاص بالشركة 0794531740  مباشرة وسيتم
                إرسال كود بطاقة وتد الخاص بتفعيل المادة مباشرةً.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="box_purple__orderby_cardprice">
                <img
                  src={require("../assets/zaincash.png")}
                  alt="www icon"
                  className="img-fluid icon_orderby_cardprice"
                />{" "}
              </div>{" "}
              <p className="name_of_orderby_cardprice">زين كاش </p>
              <p className="desc_orderby_cardprice">
                الذهاب مباشره إلى أقرب فرع للبنك الإسلامي الأردني. وعمل الإيداع
                في حساب شركة القرش الأبيض لتكنولوجيا المعلومات بحساب رقم 1826522
                فرع الحساب جبل عمان وإيداع المبلغ المطلوب وبعد ذلك إرسال صورة عن
                الإيداع على الواتس آب الخاص بالشركة 0794531740  مباشرة وسيتم
                إرسال كود بطاقة وتد الخاص بتفعيل المادة مباشرةً.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box_purple__orderby_cardprice">
                <img
                  src={require("../assets/visa.png")}
                  alt="www icon"
                  className="img-fluid icon_orderby_cardprice"
                />{" "}
              </div>{" "}
              <p className="name_of_orderby_cardprice">ماستر كارد </p>
              <p className="desc_orderby_cardprice">
                الذهاب مباشره إلى أقرب فرع للبنك الإسلامي الأردني. وعمل الإيداع
                في حساب شركة القرش الأبيض لتكنولوجيا المعلومات بحساب رقم 1826522
                فرع الحساب جبل عمان وإيداع المبلغ المطلوب وبعد ذلك إرسال صورة عن
                الإيداع على الواتس آب الخاص بالشركة 0794531740  مباشرة وسيتم
                إرسال كود بطاقة وتد الخاص بتفعيل المادة مباشرةً.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="margin_section">
        <div class="container text-center">
          <h1 className="faq">البطاقات متوفرة في</h1>
            {/* search */}
            <div className="row mb-2">
                {/* <div className="col-lg-7 col-md-12 col-sm-12">
                  <h1 className="title_blog">جميع المقالات</h1>
                </div> */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="navbar__search">
                    <span>
                      <i
                        className="fa-solid fa-magnifying-glass fa-sm"
                        style={{ color: "#833988" }}
                      ></i>{" "}
                    </span>
                    <input
                      type="text"
                      placeholder="ابحث عن "
                      value={searchQuery}
                      className="search_blog"
                      //   onChange={handleInputChange}
                    />
                    <a
                      href="#"
                      className="btn btn-s purple_btn search_btn_blog"
                    >
                      بحث{" "}
                    </a>
                    {searchQuery && (
                      <ul className="search_dropdown">
                        {searchResults.length > 0 ? (
                          searchResults.map((course) => (
                            <li
                              key={course.id}
                              onClick={() => {
                                navigate(`/courses/${course.id}`);
                                console.log(course.id);
                                // window.location.reload()
                                window.scrollTo(0, 0);
                              }}
                            >
                              <img src={course.image} alt={course.courseName} />
                              {course.courseName}
                            </li>
                          ))
                        ) : (
                          <li>No courses found.</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {/* End search */}
          <div class="row">
            <div class="col">
              <details open>
                <summary>عمان </summary>
                <div>
                  <Table striped hover>
                    <thead>
                      <tr className="table_head_cardprice">
                        <th className="desc_table_cardprice">اسم المكتبة</th>
                        <th className="desc_table_cardprice">العنوان </th>
                        <th className="desc_table_cardprice">الرقم </th>
                        <th className="desc_table_cardprice">الموقع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء </td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </details>
              <details>
              <summary>معان </summary>
                <div>
                  <Table striped hover>
                    <thead>
                      <tr className="table_head_cardprice">
                        <th className="desc_table_cardprice">اسم المكتبة</th>
                        <th className="desc_table_cardprice">العنوان </th>
                        <th className="desc_table_cardprice">الرقم </th>
                        <th className="desc_table_cardprice">الموقع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء </td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </details>
              <details>
              <summary>البلقاء
                 </summary>
                <div>
                  <Table striped hover>
                    <thead>
                      <tr className="table_head_cardprice">
                        <th className="desc_table_cardprice">اسم المكتبة</th>
                        <th className="desc_table_cardprice">العنوان </th>
                        <th className="desc_table_cardprice">الرقم </th>
                        <th className="desc_table_cardprice">الموقع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء</td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>مكتبة الأسراء </td>
                        <td>عين الباشا</td>
                        <td>06780099888</td>
                        <td>
                          <i
                            className="fa-solid fa-location-dot ps-1"
                            style={{ color: "#f57d20" }}
                          ></i>
                          موقع المكتبة{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table> </div>
              </details>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardPrice;
