import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filledStars = Math.floor(rating) > index;
    const halfStar = rating % 1 !== 0 && Math.floor(rating) === index;
    return filledStars ? <FaStar key={index} /> : halfStar ? <FaStarHalfAlt key={index} /> : <FaRegStar key={index} />;
  });

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
