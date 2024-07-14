// import React from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// const Rating = ({ rating }) => {
//   const stars = Array.from({ length: 5 }, (_, index) => {
//     const filledStars = Math.floor(rating) > index;
//     const halfStar = rating % 1 !== 0 && Math.floor(rating) === index;
//     return filledStars ? <FaStar key={index} /> : halfStar ? <FaStarHalfAlt key={index} /> : <FaRegStar key={index} />;
//   });

//   return (
//     <div className="rating-stars">
//       {stars.map((star, index) => (
//         <span key={index}>{star}</span>
//       ))}
//     </div>
//   );
// };

// export default Rating;
import React from "react";
import "../Css/topicsAndRating.css";
function Rating() {
  const width = "50";
  return (
    <div dir="ltr">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <p>4.1 average based on 254 reviews.</p>
      <hr style={{ border: "3px solid #f1f1f1" }} />

      <div class="row">
        <div class="side">
          <div className="d-flex">
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>

          </div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>
          </div>
        </div>
        <div class="side right">
          <div>150</div>
        </div>
        <div class="side">
        <div className="d-flex">
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          </div>        </div>
        <div class="middle">
          <div class="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>
          </div>
        </div>
        <div class="side right">
          <div>63</div>
        </div>
        <div class="side">
        <div className="d-flex">
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>


          </div>        </div>
        <div class="middle">
          <div class="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
        <div class="side right">
          <div>15</div>
        </div>
        <div class="side">
        <div className="d-flex">
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>


          </div>        </div>
        <div class="middle">
          <div class="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
        <div class="side right">
          <div>6</div>
        </div>
        <div class="side">
        <div className="d-flex">
          <i class="fa-solid fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>
          <i class="fa-regular fa-star" style={{color: "#F6B40A"}}></i>


          </div>        </div>
        <div class="middle">
          <div class="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
        <div class="side right">
          <div>20</div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
