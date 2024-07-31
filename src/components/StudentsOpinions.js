import React,{ useEffect ,useState} from 'react'
import Slider from "react-slick";
import axios from 'axios';
function StudentsOpinions() {
  const [comments, setComments] = useState([]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
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

      useEffect(() => {
        const fetchComment = async () => {
          try {
            const response = await axios.get("http://localhost:8080/connects/comment");
            const commentsData = response.data;
            
            console.log(commentsData); // Inspect the raw data here
            
            const approvedComments = commentsData.filter(comment => comment.action === 'approved');
            console.log(approvedComments);
            
            setComments(approvedComments);
          } catch (error) {
            console.error("Error fetching comments:", error);
          }
        };
      
        fetchComment();
      }, []);
      
  return (
    <div>
          <section className="margin_section">
        <div className="slider-container">
          <div className="container ">
            <Slider {...settings}>
            {comments.map((comment) =>(

              <div className="card-item " key={comment.id}>
                <div className="card cont_comment">
                  <div className="card-body">
                    <p className="comment">
                     {comment.comment}
                    </p>
                    <div className="details_account">
                      <div className="info_account">
                        <p>{comment.name}</p>
                        <p>{comment.created_date}</p>
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
            ))}
       
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentsOpinions