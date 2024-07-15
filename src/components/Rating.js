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
    <div dir="ltr" className="mb-3">
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <p className="total_rating">4.0</p>
        </div>
        <div className=" p-3">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <p> based on 254 ratings.</p>
        </div>
      </div>
      {/* <hr style={{ border: "3px solid #f1f1f1" }} /> */}

      <div className="row">
        <div className="side_rating">
          <div className="d-flex">
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
          </div>
        </div>
        <div className="percentage_cont ">
          <span className="percentage_rating">90%</span>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>
          </div>
        </div>

        <div className="side_rating">
          <div className="d-flex">
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
          </div>{" "}
        </div>
        <div className="percentage_cont ">
          <span className="percentage_rating">5%</span>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>
          </div>
        </div>
      
        <div className="side_rating">
          <div className="d-flex">
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
          </div>{" "}
        </div>
        <div className="percentage_cont ">
          <span className="percentage_rating">2%</span>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
      
        <div className="side_rating">
          <div className="d-flex">
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
          </div>{" "}
        </div>
        <div className="percentage_cont ">
          <span className="percentage_rating">2%</span>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
      
        <div className="side_rating">
          <div className="d-flex">
            <i className="fa-solid fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#F6B40A" }}></i>
          </div>{" "}
        </div>
        <div className="percentage_cont ">
          <span className="percentage_rating">1%</span>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${width}%` }}></div>{" "}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Rating;
