import React, { useEffect, useState } from "react";
import "../Css/blogs.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [lastThreeBlogs, setLastThreeBlogs] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState(null); 

  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const response = await axios.get("http://localhost:8080/blog");
      setBlogs(response.data);
    } catch (error) {}
  };
  const fetchTags = async () => {
    const response = await axios.get("http://localhost:8080/tag");
    setTags(response.data);
  };
  const fetchLastThreeBlogs = async () => {
    const response = await axios.get("http://localhost:8080/blog/lastthree");
    setLastThreeBlogs(response.data);
  };
  useEffect(() => {
    fetchBlog();
    fetchTags();
    fetchLastThreeBlogs();
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = Math.ceil(blogs.length / 3);

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Calculate which blogs to display based on current slide index
  const startIndex = currentSlideIndex * 3;
  const endIndex = startIndex + 3;
  const visibleblogs = blogs.slice(startIndex, endIndex);

  while (visibleblogs.length < 3) {
    visibleblogs.push(null); 
  }

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter blogs based on search query
    const filteredResults = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId);
  };
  let displayBlogs = [];
  if (searchQuery.length > 0) {
    displayBlogs = searchResults;
  } else if (selectedTagId !== null) {
    displayBlogs = blogs.filter((blog) => blog.tag_id === selectedTagId);
  } else {
    displayBlogs = blogs; 
  }

  return (
    <>
      {/* header */}
      <div className="header_blog">
        <p className="title_header_blog">المدونة</p>
        <div className="paragraph_cont">
          <p className="paragraph_header_blog">
            في عصرنا الرقمي، تحولت التكنولوجيا إلى عنصر أساسي في حياتنا اليومية،
            ومعها، ظهر التعليم عن بُعد كوسيلة مثالية لتكميل النظام التعليمي
            التقليدي.{" "}
          </p>
        </div>
      </div>
      {/* End header */}
      <section className="margin_section">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-sm-12 col_blog">
              {/* search */}
              <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <h1 className="title_blog">جميع المقالات</h1>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="navbar__search">
                    <span>
                      <i
                        className="fa-solid fa-magnifying-glass fa-sm"
                        style={{ color: "#833988" }}
                      ></i>{" "}
                    </span>
                    <input
                      type="text"
                      placeholder="ابحث عن موضوع"
                      value={searchQuery}
                      className="search_blog"
                      onChange={handleInputChange}
                    />
                    <a
                      className="btn btn-s purple_btn search_btn_blog"
                      onChange={handleInputChange}
                    >
                      بحث{" "}
                    </a>
                    {searchQuery && (
                      <ul className="search_dropdown">
                        {searchResults.length > 0 ? (
                          searchResults.map((blog) => (
                            <li
                              key={blog.id}
                              onClick={() => {
                                navigate(`/blogdetails/${blog.id}`);
                                window.scrollTo(0, 0);
                              }}
                            >
                              <img
                                src={`http://localhost:8080/` + blog.img}
                                alt={blog.title}
                              />
                              {blog.title}
                            </li>
                          ))
                        ) : (
                          <li>No blogs found.</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {/* End search */}
              {displayBlogs.map((blog, index) => (
                <Link to={`/blogdetails/${blog.id}`} style={{textDecoration:"none"}}>

                <div key={index} className="card mb-3 card_cont_blog">
                  {blog ? (
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={`http://localhost:8080/${blog.img}`}
                          className="img-fluid img_blog"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="cont_info_blog">
                            <div>
                              <p className="card-title blog_title">
                                {blog.title}
                              </p>
                              <small className="blog_dep">
                                {blog.tag_title}
                              </small>
                            </div>
                            <div>
                              <h5 className=" teacher_name_blog">
                                {blog.author}
                              </h5>
                              <div className="d-flex">
                                <i
                                  className="fa-solid fa-clock card_icon ms-2"
                                  style={{ color: "#F57D20" }}
                                ></i>
                                <p className="details_blogs_card ">
                                  {blog.created_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="card-text desc_blog ">{blog.descr}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12 col-sm-12"></div> 
                  )}
                </div>
                </Link>

              ))}
              <div className="text-center mt-3">
                <div
                  className="col-md-12 col-sm-12 col_btn_prevNext"
                  style={{ marginTop: "10px" }}
                >
                  <button onClick={goToNextSlide} className="btn mb-3">
                    <i className="fa fa-arrow-right"></i>
                  </button>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "5px",
                      fontSize: "18px",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {currentSlideIndex + 1}
                    </span>{" "}
                    / {totalSlides}
                  </div>
                  <button onClick={goToPrevSlide} className="btn mb-3">
                    <i className="fa fa-arrow-left"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 ">
              {/* <p className="categories_title">الأصناف</p>
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div>{" "}
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div>{" "}
              <div className="categ_lastblog_cont">
                <p className="ms-4">الحاسوب</p>
                <p>12</p>
              </div> */}
              <p className="categories_title">المقالات الأخيرة</p>
              {lastThreeBlogs.map((lastthreeblogs) => (
                <Link to={`/blogdetails/${lastthreeblogs.id}`} style={{textDecoration:"none",color:"#000"}}>
                <div className="categ_lastblog_cont">
                  <img
                    src={`http://localhost:8080/` + lastthreeblogs.img}
                    alt=""
                    className="img-fluid img_last_blog"
                  />
                  <p className="desc_last_blog">{lastthreeblogs.title}</p>
                </div>
                                </Link>

              ))}
              <p className="categories_title">التاغات </p>
              <div className="tags_btn_cont">
                {tags.map((tag) => (
                  <div key={tag.id}>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mb-1"
                      onClick={() => handleTagClick(tag.id)}

                    >
                      {tag.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
