import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
function MyCourses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const navigate = useNavigate();
    // const handleInputChange = (event) => {
    //   const query = event.target.value;
    //   setSearchQuery(query);
  
    //   // Filter the courses based on the search query
    //   const filteredResults = CoursesInfo.filter((course) =>
    //     course.courseName.toLowerCase().includes(query.toLowerCase())
    //   );
  
    //   setSearchResults(filteredResults);
    // };
    const cards = [
        { id: 1, content: 'مكثفات جيل 2006 1' },
        { id: 2, content: 'مكثفات جيل 2006 2' },
        { id: 3, content: 'مكثفات جيل 2006 3' },
       
     
        // Add more cards as needed
      ];
  return (
    <>
      {/* background image */}
      <div className="slide-item">
        <img
          src={require("../assets/slider.jfif")}
          alt={`Contact Video`}
          className="img_home"
        />
        <div className="overlay">
          <div className="overlay-content">
            <h1 style={{ fontWeight: "700", fontSize: "64px" }}>دوراتي</h1>
          </div>
        </div>
      </div>
      {/* End background image */}

      <section className="margin_section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="navbar__search">
                <span>
                  <i
                    className="fa-solid fa-magnifying-glass fa-sm"
                    style={{ color: "#833988" }}
                  ></i>{" "}
                </span>
                <input
                  type="text"
                  placeholder="ابحث عن مادة"
                  value={searchQuery}
                  className="search_course"
                  //   onChange={handleInputChange}
                />
                <a href="#" className="btn btn-s purple_btn search_btn">
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
            <div className="col-lg-3 col-md-4 col-sm-12">
              <select name="languages" id="lang" className="select_dep">
                <option value="javascript" className="specific_dep">
                  مكثفات جيل 2006
                </option>
                <option value="php"> مكثفات جيل 2007</option>
                <option value="java"> مكثفات جيل 2008</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>

      <div className="container ">
          <div className="row d-flex  flex-wrap justify-content-center align-items-center">
          {cards.map((card, index) => (
             <div className="col-lg-4 col-md-6 col-sm-12">
             <div
               key={index}
             
             >
                   <div className="card card_cont"  >
                     <img
                       src={require("../assets/course.png")}
                       className="card-img-top img-fluid card_img"
                       alt="..."
                     />
                     <div className="card-body">
                       <div>
                         {/* rating here */}
                         <p className="card-text card_dep"> {card.content} </p>
                       </div>
                       <div className="d-flex justify-content-between">
                         <p className="course_title_card">الحاسوب</p>{" "}
                         <p className=" teacher_name_card">عبدالعزيز الجمال</p>
                       </div>
                       <hr style={{ marginTop: "1px" }} />
                       <div className="d-flex justify-content-between">
                           <i
                             className="fa-solid fa-file card_icon"
                             style={{ color: "#F57D20" }}
                           ></i>
                             <p className="details_courses_card">20طالب  </p>
                         <i
                           className="fa-solid fa-graduation-cap card_icon"
                           style={{ color: "#F57D20" }}
                         ></i>{" "}
                       <p className="details_courses_card"> 20 درس</p>
                           <i
                             className="fa-solid fa-clock card_icon"
                             style={{ color: "#F57D20" }}
                           ></i>{" "}
                           <p className="details_courses_card"> 17/7/2024</p>
                          
                         
   
                         </div>
   
                     </div>
                   </div>
                 </div>{" "}
             </div>
        ))}
        </div>
        </div>
    </>
  );
}

export default MyCourses;
